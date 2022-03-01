import React, {useState, Fragment} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import {CSVLink} from "react-csv";
import Pagination from "react-js-pagination";
import {getVehiclesFeedback,} from "Actions/vehicleAction";
import EmptyData from "Components/EmptyData/EmptyData";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";
import {calculatePostDate} from "Helpers/helpers";
const qs = require("qs");
const VehicleFeedbackTable = ({
  getVehicles,
  vehicles,
  loading,
  vehiclesCount,
  assign,
  header,

}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [excelExport, setExcelExport] = useState([]);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getVehicles(pageNumber);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {!loading && (
        <RctCollapsibleCard heading={header} fullBlock>
          <div className="float-right">
            {vehicles.length > 0 && (
              <CSVLink data={excelExport} filename={"vehicles.csv"} className="btn-sm btn-outline-default mr-10 bg-primary text-white" target="_blank">
                <i className="zmdi zmdi-download mr-2"></i>
                Export to Excel
              </CSVLink>
            )}
          </div>
          {!loading && vehicles.length > 0 && (
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Comment</TableCell>
                    <TableCell>Driver Id</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {vehicles.map((vehicle, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{vehicle.comment}</TableCell>
                        <TableCell> <Link to={`/admin/drivers/${vehicle.driver_auth_id}`}>
                          {vehicle.driver_auth_id}
                        </Link></TableCell>
                        <TableCell>{calculatePostDate(vehicle.createdAt)}</TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
          )}

          {!loading && vehicles.length > 0 && (
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={vehiclesCount} onChange={paginate} />
            </div>
          )}
          {vehicles.length < 1 && <EmptyData />}
        </RctCollapsibleCard>
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: (page_no, spinner) => dispatch(getVehiclesFeedback(page_no, spinner)),
  };
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehiclesFeedback,
  vehiclesCount: state.vehicle.vehiclesFeedbackCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleFeedbackTable);
