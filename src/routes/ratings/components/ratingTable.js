import React, {Fragment, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {connect} from "react-redux";
import StarRatings from "react-star-ratings";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";
import {getRatings} from "Actions/ratingAction";
import EmptyData from "Components/EmptyData/EmptyData";
import {calculatePostDate} from "Helpers/helpers";




const  RatingTable = ({getRatings, ratings,  loading, ratingCount, user_type, header}) => {
    const [currentPage, setCurrentPage] = useState(1);


    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getRatings(pageNumber, user_type)
        window.scrollTo(0, 0);
    };


    return (
        <div>
            {!loading && ratings?.length > 0 &&
            <RctCollapsibleCard heading={header} fullBlock>
                {/*<div className="float-right">*/}
                {/*    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>*/}
                {/*</div>*/}
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Full Name</TableCell>
                                <TableCell>Rating</TableCell>
                                <TableCell>Date / Time</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {ratings.map((user, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{user?.receiver[0]?.first_name} {user?.receiver[0]?.last_name}</TableCell>
                                        <TableCell>
                                            <StarRatings
                                                rating={user.rating}
                                                starRatedColor={(user.rating <= 2) ? '#dc3545' : (user.rating > 2 && user.rating < 4) ? '#ffc107' : '#5cb85c'}
                                                numberOfStars={5}
                                                starDimension="18px"
                                            />
                                        </TableCell>
                                        <TableCell>{calculatePostDate(user.createdAt)}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/ratings/${user.rating_id}`}><i className="ti-eye"/></Link></button>
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
                        totalItemsCount={ratingCount}
                        onChange={paginate}
                    />
                </div>
            </RctCollapsibleCard>}
            {!loading && ratings?.length < 1 && <EmptyData />}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getRatings: (page_no, user_type, spinner) => dispatch(getRatings(page_no, user_type, spinner)),
    };
}

const mapStateToProps = state => ({
    ratings: state.rating.ratings,
    ratingCount: state.rating.ratingCount,
    loading: state.loading.loading,



});

export default connect( mapStateToProps, mapDispatchToProps) (RatingTable);
