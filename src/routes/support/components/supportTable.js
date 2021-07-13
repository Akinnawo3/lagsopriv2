/**
 * Tickets
 */
import React, { useState, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import {calculatePostDate} from "Helpers/helpers";
import {getSupportTickets} from "Actions/supportAction";
import {Badge} from "reactstrap";



const  SupportTable = ({support, getSupportTickets,loading, support_type, supportCount, header}) => {
    const [currentPage, setCurrentPage] = useState(1);


    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getSupportTickets(pageNumber, support_type)
        window.scrollTo(0, 0);
    };




    return (
        <div>
            {!loading && support?.length > 0 &&   <RctCollapsibleCard heading={header} fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Status</TableCell>
                                <TableCell>Date/ Time</TableCell>
                                <TableCell>Assigned</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {support.map((sup, key) => (
                                    <TableRow hover key={key}>
                                        {sup.status == 1   && <TableCell>New</TableCell>}
                                        {sup.status == 2  && <TableCell>Opened</TableCell>}
                                        {sup.status == 3  && <TableCell>In-progress</TableCell>}
                                        {sup.status == 4  && <TableCell>Closed</TableCell>}
                                        {sup.status == 5  && <TableCell>Unresolved</TableCell>}
                                        <TableCell>
                                            {calculatePostDate(sup.timestamp)}
                                        </TableCell>
                                        <TableCell>
                                            <Badge color={sup.assigned_to ? 'success' : 'danger'}>{sup.assigned_to ? 'Yes' : 'No'}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary"><Link to={`/admin/support/${sup.ticket_id}`}><i className="ti-eye"></i></Link></button>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">

                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={20}
                        totalItemsCount={supportCount}
                        onChange={paginate}
                    />
                </div>
            </RctCollapsibleCard>}
            {support?.length < 1 && <EmptyData />}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getSupportTickets: (page_no, status, spinner) => dispatch(getSupportTickets(page_no, status, spinner)),
    };
}

const mapStateToProps = state => ({
    support: state.support.support,
    supportCount: state.support.supportCount,
    ticketTypes: state.ticketTypes.ticketTypes,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(SupportTable);
