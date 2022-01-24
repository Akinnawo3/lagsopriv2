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
import {getChartRevenueData} from "../../actions/revenueSplitAction";
import moment from "moment";

const RevenueTable = ({getChartRevenueData, revenueChartData, loading}) => {
  useEffect(() => {
    getChartRevenueData(true);
  }, []);

  const dateTypeFilter = [
    {value: "", label: "- - Filter by Date Type- -"},
    {value: "daily", label: "Daily"},
    {value: "monthly", label: "Monthly"},
    {value: "yearly", label: "Yearly"},
  ];
  return (
    <div>
      <RctCollapsibleCard heading={"Revenues Table"} fullBlock style={{minHeight: "70vh"}}>
        <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
          <select id="filter-dropdown" name="fiter-dropdown" onChange={handleChange} className="p-1 px-4">
            {dateTypeFilter.map((item, index) => (
              <option value={item.value} key={index}>
                {item.label}
              </option>
            ))}
          </select>{" "}
        </li>
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
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {revenueChartData.length > 0 &&
                      revenueChartData.map((item, index) => (
                        <TableRow hover key={index}>
                          <TableCell>{`${moment(item?.rev_date).format("MMMM Do YYYY")}`}</TableCell>
                          <TableCell>{`₦${item?.asset_co}`}</TableCell>
                          <TableCell>{`₦${item?.comms}`}</TableCell>
                          <TableCell>{`₦${item?.daily_tax}`}</TableCell>
                          <TableCell>{`₦${item?.maintenance}`}</TableCell>
                          <TableCell>{`₦${item?.refleeting}`}</TableCell>
                          <TableCell>{`₦${item?.tech_co}`}</TableCell>
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
        {revenueChartData.length === 0 && !loading && <EmptyData />}
      </RctCollapsibleCard>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getChartRevenueData: (spinner, startDate, endDate) => dispatch(getChartRevenueData(spinner, startDate, endDate)),
  };
}
const mapStateToProps = (state) => ({
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  revenueChartData: state.revenueSplit.chartRevenueData,
});

export default connect(mapStateToProps, mapDispatchToProps)(RevenueTable);
