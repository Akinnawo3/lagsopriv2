/**
 * Tickets
 */
import React, {useState, Fragment} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {calculatePostDate, getTicketStatus} from "Helpers/helpers";
import {getSupportTickets} from "Actions/supportAction";
import {Badge} from "reactstrap";
import {useHistory} from "react-router-dom";
const qs = require("qs");

const SupportTable = ({support, getSupportTickets, loading, support_type, supportCount, header}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getSupportTickets(pageNumber, support_type);
    window.scrollTo(0, 0);
  };

  // email: "tajibuwa@gmail.com"
  // first_last: "Dean"
  // first_name: "Mike"
  // phone_number: "07032838025"
  // user_type: "admin"
  // assign_to: "611b6c839f0781cec3ebb5aa"
  // auth_id: "611a827d9f07814794ebb48a"
  // comment: "A description"
  // createdAt: "2021-08-17T08:01:13.993Z"
  // status: 1
  // updatedAt: "2021-08-17T08:01:13.993Z"
  // user_data: {first_name: "Ayorinde", first_last: "Kudoro", email: "kudoroayorinde@gmail.com",…}
  // email: "kudoroayorinde@gmail.com"
  // first_last: "Kudoro"
  // first_name: "Ayorinde"
  // phone_number: "08034895313"
  // user_type: "rider"
  return (
    <div>
      {!loading && support?.length > 0 && (
        <RctCollapsibleCard heading={header} fullBlock>
          <div className="float-right">
            <a href="#" onClick={(e) => e.preventDefault()} className="btn-sm btn-outline-default mr-10">
              Export to Excel
            </a>
            {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
          </div>
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Status</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>User Type</TableCell>

                  <TableCell>Date/ Time</TableCell>
                  <TableCell>Assigned</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {support.map((sup, key) => (
                    <TableRow hover key={key}>
                      <TableCell>{getTicketStatus(sup.status)}</TableCell>
                      <TableCell>
                        {sup?.user_data?.first_name} {sup?.user_data?.first_last}
                      </TableCell>
                      <TableCell className="text-capitalize">{sup?.user_data?.user_type}</TableCell>
                      <TableCell>
                        {calculatePostDate(sup.createdAt)}
                        {/*{new Date(sup.timestamp.setHours(sup.timestamp.getHours() + 1))}*/}
                      </TableCell>
                      <TableCell>
                        <Badge color={sup.assign_to ? "success" : "danger"}>{sup.assign_to ? "Yes" : "No"}</Badge>
                      </TableCell>
                      <TableCell>
                        <button type="button" className="rct-link-btn text-primary">
                          <Link to={`/admin/support/${sup.issue_id}`}>
                            <i className="ti-eye"></i>
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
            <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={supportCount} onChange={paginate} />
          </div>
        </RctCollapsibleCard>
      )}
      {support?.length < 1 && <EmptyData />}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSupportTickets: (page_no, status, spinner) => dispatch(getSupportTickets(page_no, status, spinner)),
  };
}

const mapStateToProps = (state) => ({
  support: state.support.support,
  supportCount: state.support.supportCount,
  ticketTypes: state.ticketTypes.ticketTypes,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(SupportTable);
