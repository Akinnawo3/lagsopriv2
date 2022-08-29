import React, {useState, useEffect, Fragment, useRef} from "react";
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
import {getDriverRevenueSPlit, getDriverRevenueSPlitCount, exportDriverRevenueSplit} from "../../actions/revenueSplitAction";
import moment from "moment";
import {getFirstDayOfMonth, getTodayDate} from "../../helpers/helpers";
import {Button} from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
const qs = require("qs");
import {useHistory} from "react-router-dom";

//driver debt service
const PaymentsServiceComponent = ({auth_id, getDriverRevenueSPlit, driverRevenueSplit, loading, exportDriverRevenueSplit, getDriverRevenueSPlitCount, driverRevenueSplitCount}) => {
  const [dateType, setDateType] = useState("");
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const exportRef = useRef(null);

  const formatByDateType = (timeStamp) => {
    if (dateType === "monthly") {
      return moment(timeStamp).format("MMMM YYYY");
    } else if (dateType === "yearly") {
      return moment(timeStamp).format("YYYY");
    } else {
      return moment(timeStamp).format("MMMM Do YYYY");
    }
  };

  useEffect(() => {
    getDriverRevenueSPlit(false, auth_id, startDate, endDate, dateType, currentPage);
    getDriverRevenueSPlitCount(false, auth_id, startDate, endDate, dateType);
  }, []);

  const handleChange = (e) => {
    setDateType(e.target.value);
  };

  const handleFilter = () => {
    getDriverRevenueSPlit(false, auth_id, startDate, endDate, dateType);
    getDriverRevenueSPlitCount(false, auth_id, startDate, endDate, dateType);
  };

  console.log(driverRevenueSplit);

  const dateTypeFilter = [
    {value: "", label: "- - Filter by Date Type- -"},
    {value: "daily", label: "Daily"},
    {value: "monthly", label: "Monthly"},
    {value: "yearly", label: "Yearly"},
  ];

  const handleExport = () => {
    exportRef.current.open();
  };

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getDriverRevenueSPlit(false, auth_id, startDate, endDate, dateType, pageNumber);
    // getDrivers(status, pageNumber, 1, appStatus);
    window.scrollTo(0, 0);
  };

  const confirmExport = () => {
    exportRef.current.close();
    exportDriverRevenueSplit(auth_id, startDate, endDate, dateType);
  };

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
          <input type="date" id="start" name="trip-start" defaultValue={startDate} min="2018-01-01" onChange={(e) => setStartDate(e.target.value)} />
        </li>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <small className="fw-bold mr-2">To</small>
          <input type="date" id="start" name="trip-start" defaultValue={endDate} min="2018-01-01" max={getTodayDate()} onChange={(e) => setEndDate(e.target.value)} />
        </li>

        <Button onClick={() => handleFilter()} style={{height: "30px"}} className="align-items-center text-light justify-content-center" color="success">
          Apply filter
        </Button>

        {!loading && driverRevenueSplit.length > 0 && (
          <>
            <div className="d-flex justify-content-end mb-2">
              <Button onClick={handleExport} style={{height: "30px"}} className="align-items-center text-light justify-content-center" color="primary">
                Export to Excel
              </Button>
            </div>
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
                    <TableCell>Gross Balance</TableCell>
                    <TableCell>Net Balance</TableCell>
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
                          <TableCell>{`₦${item?.asset_co?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.comms?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.daily_tax?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.maintenance?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.refleeting?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.tech_co?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.asset_repayment?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.dashcam_repayment?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.mobile_phone_repayment?.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.gross_balance?.toLocaleString() || 0}`}</TableCell>
                          <TableCell>{`₦${item?.balance?.toLocaleString()}`}</TableCell>
                          {/* <TableCell>{`₦${item?.gross_balance.toLocaleString()}`}</TableCell>
                          <TableCell>{`₦${item?.balance.toLocaleString()}`}</TableCell> */}
                        </TableRow>
                      ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item undo-folding" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={driverRevenueSplitCount} onChange={paginate} />
            </div>
          </>
        )}
        {driverRevenueSplit.length === 0 && !loading && <EmptyData />}
      </RctCollapsibleCard>
      <DeleteConfirmationDialog ref={exportRef} title={"Are you sure you want to Export File?"} message={"This will send the excel file to your email"} onConfirm={confirmExport} />
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getDriverRevenueSPlit: (spinner, driverID, startDate, endDate, dateType, pageNumber) => dispatch(getDriverRevenueSPlit(spinner, driverID, startDate, endDate, dateType, pageNumber)),
    exportDriverRevenueSplit: (driverID, startDate, endDate, dateType) => dispatch(exportDriverRevenueSplit(driverID, startDate, endDate, dateType)),
    getDriverRevenueSPlitCount: (driverID, startDate, endDate, dateType) => dispatch(getDriverRevenueSPlitCount(driverID, startDate, endDate, dateType)),
  };
}
const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  driverRevenueSplit: state.revenueSplit.driverRevenueSplit,
  driverRevenueSplitCount: state.revenueSplit.driverRevenueSplitCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsServiceComponent);
