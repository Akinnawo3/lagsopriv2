/**
 * Contact Us
 */
import React, {useState, Fragment, useEffect} from 'react';
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
import {calculatePostDate, textTruncate} from "Helpers/helpers";
import {getContactUs, getContactUsCount} from "Actions/supportAction";
import {Badge} from "reactstrap";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";



const  ContactUs = ({contactUs, getContactUs, contactUsCount, getContactUsCount, loading, match}) => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getContactUs(true);
        getContactUsCount()
    },[])


    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getContactUs('', pageNumber)
        window.scrollTo(0, 0);
    };


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Contact Us"} match={match} />
            {!loading && contactUs?.length > 0 &&   <RctCollapsibleCard heading='Contact us' fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Subject</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Date/ Time</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {contactUs.map((sup, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{sup.subject}</TableCell>
                                        <TableCell>{textTruncate(sup.description)}</TableCell>
                                        <TableCell>
                                            {calculatePostDate(sup.createdAt)}
                                        </TableCell>
                                        <TableCell>
                                            <Badge color={sup.status === 1 ? 'success' : 'danger'}>{sup.status === 1 ? 'Closed' : 'Open'}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary">
                                                <Link to={`/admin/support/contact-us/${sup.contact_id}`}>
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

                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={20}
                        totalItemsCount={contactUsCount}
                        onChange={paginate}
                    />
                </div>
            </RctCollapsibleCard>}
            {contactUs?.length < 1 && <EmptyData />}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getContactUs: (loading, page) => dispatch(getContactUs(loading, page)),
        getContactUsCount: () => dispatch(getContactUsCount()),
    };
}

const mapStateToProps = state => ({
    contactUs: state.support.contactUs,
    contactUsCount: state.support.contactUsCount,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(ContactUs);
