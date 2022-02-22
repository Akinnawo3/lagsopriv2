import React, {useState, useEffect, Fragment} from "react";
import {connect} from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Badge} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {CSVLink} from "react-csv";
import Pagination from "react-js-pagination";
import {calculatePostDate, getStatus, getStatusColor} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {getDriverRevenueSPlit} from "../../actions/revenueSplitAction";
import moment from "moment";
import {getFirstDayOfMonth, getTodayDate} from "../../helpers/helpers";

//driver debt service
const PaymentsServiceComponent = ({auth_id, getDriverRevenueSPlit, driverRevenueSplit, loading}) => {
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
    getDriverRevenueSPlit(false, auth_id, startDate, endDate, dateType);
  }, [dateType, startDate, endDate]);

  const handleChange = (e) => {
    setDateType(e.target.value);
  };

  console.log(driverRevenueSplit);

  const dateTypeFilter = [
    {value: "", label: "- - Filter by Date Type- -"},
    {value: "daily", label: "Daily"},
    {value: "monthly", label: "Monthly"},
    {value: "yearly", label: "Yearly"},
  ];
  return (
    <div>
      <RctCollapsibleCard heading={"Debt Service History"} fullBlock style={{minHeight: "70vh"}}>
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
        {!loading && driverRevenueSplit.length > 0 && (
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
                    <TableCell>Dashcam Repayment</TableCell>
                    <TableCell>Mobile Phone Repayment</TableCell>
                    {/* <TableCell>Gross Balance</TableCell>
                    <TableCell> Balance</TableCell> */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {driverRevenueSplit.length > 0 &&
                      driverRevenueSplit.map((item, index) => (
                        <TableRow hover key={index}>
                          <TableCell>{`${formatByDateType(item?.created)}`}</TableCell>
                          <TableCell>{`₦${item?.asset_co.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.comms.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.daily_tax.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.maintenance.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.refleeting.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.tech_co.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.asset_repayment.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.dashcam_repayment.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.mobile_phone_repayment.toLocaleString()}`}</TableCell>
                          {/* <TableCell>{`₦${item?.gross_balance.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.balance.toLocaleString()}`}</TableCell> */}
                        </TableRow>
                      ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              {/* <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={driversCount} onChange={paginate} /> */}
            </div>
          </>
        )}
        {driverRevenueSplit.length === 0 && !loading && <EmptyData />}
      </RctCollapsibleCard>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getDriverRevenueSPlit: (spinner, driverID, startDate, endDate, dateType) => dispatch(getDriverRevenueSPlit(spinner, driverID, startDate, endDate, dateType)),
  };
}
const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  driverRevenueSplit: state.revenueSplit.driverRevenueSplit,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsServiceComponent);
