/**
 * Basic Table
 */
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge } from 'reactstrap';
import api from 'Api';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {Link} from "react-router-dom";
import {createTicketType, deleteTicketType, getTicketTypes, updateTicketType} from "Actions/ticketTypeAction";
import {connect} from "react-redux";
import {getSupport} from "Actions/supportAction";
import Spinner from "../../spinner/Spinner";
import Pagination from "react-js-pagination";



const  ClosedSupport = ({match, support, getSupport, getTicketTypes, ticketTypes, loading}) => {
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)



    useEffect(()=> {
        getSupport();
        getTicketTypes();
    },[])


    useEffect(()=> {
        if(support.length > 0) {
            setPosts(support.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).filter(data => data.status == 4))
        }
    },[support])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };



    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Tickets"} match={match} />
            {loading && <Spinner />}
            {!loading &&  <RctCollapsibleCard heading="Closed Tickets" fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive">
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Ticket Type</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {posts && currentPosts.map((sup, key) => (
                                    <TableRow hover key={key}>
                                        {ticketTypes && ticketTypes.map(ticket => {
                                            if(ticket.id  == sup.ticket_id) {
                                                return <TableCell key={ticket.id}>{ticket.name}</TableCell>
                                            }
                                        })}
                                        {sup.status == 1  && <TableCell>New</TableCell>}
                                        {sup.status == 2  && <TableCell>Opened</TableCell>}
                                        {sup.status == 3  && <TableCell>In-progress</TableCell>}
                                        {sup.status == 4  && <TableCell>Closed</TableCell>}
                                        {sup.status == 5  && <TableCell>Unresolved</TableCell>}
                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary"><Link to={`/admin/support/${sup.id}`}><i className="ti-eye"></i></Link></button>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                    {!loading && posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Ticket Found</div>}
                </div>
                {posts.length > 10 &&<div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">

                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={postsPerPage}
                        totalItemsCount={posts.length}
                        onChange={paginate}
                    />
                </div>}
            </RctCollapsibleCard>}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getTicketTypes: () => dispatch(getTicketTypes()),
        getSupport: () => dispatch(getSupport()),
        updateTicketType: (id, name) => dispatch(updateTicketType(id, name)),
        deleteTicketType: (id) => dispatch(deleteTicketType(id)),
    };
}

const mapStateToProps = state => ({
    support: state.support.support,
    ticketTypes: state.ticketTypes.ticketTypes,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(ClosedSupport);
