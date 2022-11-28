import React, { useState, useEffect, Fragment, useRef } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Badge, Button } from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { CSVLink } from "react-csv";
import Pagination from "react-js-pagination";
import { calculatePostDate, getStatus, getStatusColor } from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import { Link } from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import { getChartRevenueData, getRevenueExport } from "../../actions/revenueSplitAction";
import moment from "moment";
import { getFirstDayOfMonth, getTodayDate } from "../../helpers/helpers";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const RevenueTable = ({ getChartRevenueData, revenueChartData, loading, getRevenueExport }) => {
  const typeHolder = useRef();
  const [dateType, setDateType] = useState("daily");
  const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = useState(getTodayDate());
  const [type, setType] = useState("revenue");

  const changeType = (e) => setType(e.target.value);

  const formatByDateType = (timeStamp) => {
    if (dateType === "daily") {
      return moment(timeStamp).format("MMMM Do YYYY");
    } else if (dateType === "monthly") {
      return moment(timeStamp).format("MMMM YYYY");
    } else {
      return moment(timeStamp).format("YYYY");
    }
  };

  useEffect(() => {
    getChartRevenueData(true, startDate, endDate, dateType);
  }, []);

  const exportRef = useRef(null);

  const handleChange = (e) => {
    // setDateType(e.target.value);
    typeHolder.current = e.target.value;
  };

  const dateTypeFilter = [
    { value: "", label: "- - Filter by Date Type- -" },
    { value: "daily", label: "Daily" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];
  const handleFilter = () => {
    setDateType(typeHolder.current);
    getChartRevenueData(true, startDate, endDate, dateType);
  };

  const findprop = (obj, path) => {
    var args = path.split("."),
      i,
      l;
    for (i = 0, l = args.length; i < l; i++) {
      if (!obj.hasOwnProperty(args[i])) return;
      obj = obj[args[i]];
    }
    return obj;
  };

  const handleExport = () => {
    exportRef.current.open();
  };

  const confirmExport = () => {
    exportRef.current.close();
    getRevenueExport(startDate, endDate, dateType);
  };

  const getColumnSum = (path) => {
    let sum = 0;
    revenueChartData.map((item) => (sum += findprop(item, path) || 0));
    return sum;
  };

  return (
    <div>
      <RctCollapsibleCard heading={"Revenues Table"} fullBlock style={{ minHeight: "70vh" }}>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          {/* <small className="fw-bold">Date Type Filter</small> */}
          <select name="type-filter" onChange={changeType} className="p-1 px-4">
            <option value={"revenue"}>Revenue</option>
            <option value={"payout"}>Payout</option>
          </select>
        </li>
        {type === "revenue" && (
          <>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              {/* <small className="fw-bold">Date Type Filter</small> */}
              <select name="fiter-dropdown" onChange={handleChange} className="p-1 px-4">
                {dateTypeFilter.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.label}
                  </option>
                ))}
              </select>
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <small className="fw-bold mr-2">From</small>
              <input type="date" id="start" name="trip-start" defaultValue={startDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setStartDate(e.target.value)} />
            </li>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <small className="fw-bold mr-2">To</small>
              <input type="date" id="start" name="trip-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
            </li>
            <Button onClick={() => handleFilter()} style={{ height: "30px" }} className="align-items-center text-light justify-content-center" color="success">
              Apply filter
            </Button>
            <div className="float-right">
              {!loading && revenueChartData.length > 0 && (
                <Button onClick={() => handleExport()} style={{ height: "30px" }} className="align-items-center justify-content-center mr-2" color="primary">
                  <i className="zmdi zmdi-download mr-2"></i> Export to Excel
                </Button>
              )}
            </div>
          </>
        )}
        {!loading && revenueChartData.length > 0 && type === "revenue" && (
          <>
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Date</TableCell>
                    <TableCell>Asset Co.</TableCell>
                    <TableCell>Comms</TableCell>
                    <TableCell>Daily Tax</TableCell>
                    <TableCell>Maintenance</TableCell>
                    <TableCell>Refleeting</TableCell>
                    <TableCell>Tech Co</TableCell>
                    <TableCell>Asset Repayment</TableCell>
                    <TableCell>Dashcam</TableCell>
                    <TableCell>Mobile Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {revenueChartData.length > 0 &&
                      revenueChartData.map((item, index) => (
                        <TableRow hover key={index}>
                          <TableCell>{`${formatByDateType(item?.rev_date)}`}</TableCell>
                          <TableCell>{`₦${item?.asset_co?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.comms?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.daily_tax?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.maintenance?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.refleeting?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.tech_co?.toLocaleString()}`}</TableCell>

                          <TableCell>{`₦${item?.asset_repayment?.toLocaleString() || 0}`}</TableCell>
                          <TableCell>{`₦${item?.dashcam_repayment?.toLocaleString() || 0}`}</TableCell>
                          <TableCell>{`₦${item?.mobile_phone_repayment?.toLocaleString() || 0}`}</TableCell>
                        </TableRow>
                      ))}
                    {revenueChartData.length > 0 && (
                      <TableRow>
                        <TableCell className="fw-bold">Total</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("asset_co")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("comms")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("daily_tax")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("maintenance")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("refleeting")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("tech_co")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("asset_repayment")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("dashcam_repayment")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("mobile_phone_repayment")?.toLocaleString()}`}</TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              {/* <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={driversCount} onChange={paginate} /> */}
            </div>
          </>
        )}
        {revenueChartData.length === 0 && type === "revenue" && !loading && <EmptyData />}

        {/* For Payouts */}
        {!loading && revenueChartData.length > 0 && type === "payout" && (
          <>
            <div className="float-right">
              {!loading && revenueChartData.length > 0 && (
                <Button onClick={() => handleExport()} style={{ height: "30px" }} className="align-items-center justify-content-center mr-2" color="primary">
                  Create New
                </Button>
              )}
            </div>
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {revenueChartData.length > 0 &&
                      revenueChartData.map((item, index) => (
                        <TableRow hover key={index}>
                          <TableCell>{`${formatByDateType(item?.rev_date)}`}</TableCell>
                          <TableCell>{`₦${item?.asset_co?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.comms?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.daily_tax?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.maintenance?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.refleeting?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.tech_co?.toLocaleString()}`}</TableCell>

                          <TableCell>{`₦${item?.asset_repayment?.toLocaleString() || 0}`}</TableCell>
                          <TableCell>{`₦${item?.dashcam_repayment?.toLocaleString() || 0}`}</TableCell>
                          <TableCell>{`₦${item?.mobile_phone_repayment?.toLocaleString() || 0}`}</TableCell>
                        </TableRow>
                      ))}
                    {revenueChartData.length > 0 && (
                      <TableRow>
                        <TableCell className="fw-bold">Total</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("asset_co")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("comms")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("daily_tax")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("maintenance")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("refleeting")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("tech_co")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("asset_repayment")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("dashcam_repayment")?.toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("mobile_phone_repayment")?.toLocaleString()}`}</TableCell>
                      </TableRow>
                    )}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
          </>
        )}
      </RctCollapsibleCard>
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getChartRevenueData: (spinner, startDate, endDate, dateType) => dispatch(getChartRevenueData(spinner, startDate, endDate, dateType)),
    getRevenueExport: (startDate, endDate, dateType) => dispatch(getRevenueExport(startDate, endDate, dateType)),
  };
}
const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  revenueChartData: state.revenueSplit.chartRevenueData,
});

export default connect(mapStateToProps, mapDispatchToProps)(RevenueTable);
