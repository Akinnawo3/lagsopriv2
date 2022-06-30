import React, {useState, useEffect, Fragment, useRef} from "react";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Badge, Button} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {CSVLink} from "react-csv";
import Pagination from "react-js-pagination";
import {calculatePostDate, getStatus, getStatusColor} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {getChartRevenueData} from "../../actions/revenueSplitAction";
import moment from "moment";
import {getFirstDayOfMonth, getTodayDate} from "../../helpers/helpers";

const RevenueTable = ({getChartRevenueData, revenueChartData, loading}) => {
  const typeHolder = useRef();
  const [dateType, setDateType] = useState("daily");
  const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  const [endDate, setEndDate] = useState(getTodayDate());

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

  const handleChange = (e) => {
    // setDateType(e.target.value);
    typeHolder.current = e.target.value;
  };

  const dateTypeFilter = [
    {value: "", label: "- - Filter by Date Type- -"},
    {value: "daily", label: "Daily"},
    {value: "monthly", label: "Monthly"},
    {value: "yearly", label: "Yearly"},
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

  const getColumnSum = (path) => {
    let sum = 0;
    revenueChartData.map((item) => (sum += findprop(item, path) || 0));
    return sum;
  };

  return (
    <div>
      <RctCollapsibleCard heading={"Revenues Table"} fullBlock style={{minHeight: "70vh"}}>
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
        <Button onClick={() => handleFilter()} style={{height: "30px"}} className="align-items-center text-light justify-content-center" color="success">
          Apply filter
        </Button>
        {!loading && revenueChartData.length > 0 && (
          <>
            <div className="table-responsive" style={{minHeight: "50vh"}}>
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
                          <TableCell>{`₦${item?.asset_co.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.comms.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.daily_tax.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.maintenance.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.refleeting.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.tech_co.toLocaleString()}`}</TableCell>

                          <TableCell>{`₦${item?.debt_service_split?.asset_repayment?.toLocaleString() || 0}`}</TableCell>
                          <TableCell>{`₦${item?.debt_service_split?.dashcam?.toLocaleString() || 0}`}</TableCell>
                          <TableCell>{`₦${item?.debt_service_split?.mobile_phone?.toLocaleString() || 0}`}</TableCell>
                        </TableRow>
                      ))}
                    {revenueChartData.length > 0 && (
                      <TableRow>
                        <TableCell className="fw-bold">Total</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("asset_co").toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("comms").toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("daily_tax").toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("maintenance").toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("refleeting").toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("tech_co").toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("debt_service_split.asset_repayment").toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("debt_service_split.dashcam").toLocaleString()}`}</TableCell>
                        <TableCell className="fw-bold">{`₦${getColumnSum("debt_service_split.mobile_phone").toLocaleString()}`}</TableCell>
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
        {revenueChartData.length === 0 && !loading && <EmptyData />}
      </RctCollapsibleCard>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getChartRevenueData: (spinner, startDate, endDate, dateType) => dispatch(getChartRevenueData(spinner, startDate, endDate, dateType)),
  };
}
const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  revenueChartData: state.revenueSplit.chartRevenueData,
});

export default connect(mapStateToProps, mapDispatchToProps)(RevenueTable);
