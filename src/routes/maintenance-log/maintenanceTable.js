/**
 * Emergency
 */
import React, {useState, useEffect, Fragment} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Link, useHistory} from "react-router-dom";
import {connect} from "react-redux";
import {getServiceRequests, getServiceRequestsCount} from "Actions/serviceRequestAction";
import EmptyData from "Components/EmptyData/EmptyData";
import Pagination from "react-js-pagination";
import {Badge} from "reactstrap";
import {calculatePostDate, getServiceRequestStatusColor} from "Helpers/helpers";

const qs = require("qs");

const MaintenanceTable = ({match, getServiceRequests, getServiceRequestsCount, serviceRequests, serviceRequestsCount, loading}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });

  useEffect(() => {
    if (pageFromQuery === undefined || serviceRequests.length < 1) {
      getServiceRequests(currentPage, true);
      getServiceRequestsCount();
    }
  }, []);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    // getOems(pageNumber);
    window.scrollTo(0, 0);
  };

  console.log(serviceRequests);
  console.log(serviceRequestsCount);

  return (
    <div>
      {!loading && serviceRequests?.length > 0 && (
        <RctCollapsibleCard heading="Service Requests" fullBlock style={{minHeight: "70vh"}}>
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Type</TableCell>
                  <TableCell>Time</TableCell>
                  <TableCell>Covered by warranty</TableCell>
                  <TableCell>Driver name</TableCell>
                  <TableCell>plate number </TableCell>
                  <TableCell>Urgency </TableCell>
                  <TableCell>status </TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {serviceRequests.length > 0 &&
                    serviceRequests.map((data) => (
                      <TableRow hover key={data._id}>
                        <TableCell className="text-capitalize">{data?.service_type}</TableCell>
                        <TableCell>{calculatePostDate(data?.createdAt)}</TableCell>
                        <TableCell className={`fw-bold text-${data?.covered_by_warranty ? "success" : "danger"}`}>{data?.covered_by_warranty ? "Yes" : "No"}</TableCell>
                        <TableCell>{data.driver_name}</TableCell>
                        <TableCell>{data.plate_number}</TableCell>
                        <TableCell className={`fw-bold text-capitalize text-${data.urgency === "low" ? "warning" : data.urgency === "high" ? "danger" : "secondary"}`}>
                          {data.urgency ? data.urgency : "N/A"}
                        </TableCell>
                        <TableCell>
                          <Badge color={getServiceRequestStatusColor(data?.status)} style={{minWidth: 80}}>
                            {data.status}
                          </Badge>
                        </TableCell>

                        {/* 
                          <TableCell>{data.latitude}</TableCell>
                          <TableCell>{data.longitude}</TableCell>
                          <TableCell>{"Time of Report"}</TableCell>
                          <TableCell>
                            <Badge color={data.status === 0 ? "danger" : "success"}>{data.status === 0 ? "Unresolved" : "Resolved"}</Badge>
                          </TableCell> */}
                        <TableCell>
                          <button type="button" className="rct-link-btn text-primary" title="view details">
                            <Link to={`/admin/maintenance/${data?._id}`}>
                              <i className="ti-eye" />
                            </Link>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                </Fragment>
              </TableBody>
            </Table>
          </div>
          <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
            <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={serviceRequestsCount} onChange={paginate} />
          </div>
        </RctCollapsibleCard>
      )}
      {serviceRequests.length < 1 && <EmptyData />}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getServiceRequests: (page_no, spinner, oem_id, status, service_type) => dispatch(getServiceRequests(page_no, spinner, oem_id, status, service_type)),
    getServiceRequestsCount: (oem_id, status, service_type) => dispatch(getServiceRequestsCount(oem_id, status, service_type)),
  };
}

const mapStateToProps = (state) => ({
  serviceRequests: state.serviceRequests.serviceRequests,
  serviceRequestsCount: state.serviceRequests.serviceRequestsCount,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(MaintenanceTable);
