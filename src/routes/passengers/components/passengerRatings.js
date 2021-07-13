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
import {getUserRating} from "Actions/ratingAction";
import EmptyData from "Components/EmptyData/EmptyData";
import {calculatePostDate} from "Helpers/helpers";
import {Card, CardBody, Col, Row} from "reactstrap";




const  PassengerRatings = ({getUserRating, ratingsUser,  loading, ratingCountUser, auth_id, ratingsUserAverage}) => {
    const [currentPage, setCurrentPage] = useState(1);


    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getUserRating(pageNumber, 'rider', auth_id)
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Row className='mb-5'>
                <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-secondary" >
                        <CardBody className="pb-0">
                            <div className="text-value">Average Rating</div>
                        </CardBody>
                        <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                            <StarRatings
                                rating={ratingsUserAverage}
                                starRatedColor={(ratingsUserAverage <= 2) ? '#dc3545' : (ratingsUserAverage > 2 && ratingsUserAverage < 4) ? '#ffc107' : '#5cb85c'}
                                numberOfStars={5}
                                starDimension="18px"
                            />
                        </div>
                    </Card>
                </Col>

                <Col xs="12" sm="6" lg="3">
                    <Card className="text-white bg-success" >
                        <CardBody className="pb-0">
                            <div className="text-value">Total Ratings</div>
                        </CardBody>
                        <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                            <span className="pr-2 font-2xl">{ratingCountUser}</span>
                        </div>
                    </Card>
                </Col>

            </Row>
            {!loading && ratingsUser?.length > 0 &&
            <RctCollapsibleCard>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Rating</TableCell>
                                <TableCell>Date / Time</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {ratingsUser.map((user, key) => (
                                    <TableRow hover key={key}>
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
                        totalItemsCount={ratingCountUser}
                        onChange={paginate}
                    />
                </div>
            </RctCollapsibleCard>}
            {!loading && ratingsUser?.length < 1 && <EmptyData />}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getUserRating: (page_no, user_type, auth_id) => dispatch(getUserRating(page_no,user_type, auth_id)),
    };
}

const mapStateToProps = state => ({
    ratingsUser: state.rating.ratingsUser,
    ratingsUserAverage: state.rating.ratingsUserAverage,
    ratingCountUser: state.rating.ratingCountUser,
    loading: state.loading.loading,



});

export default connect( mapStateToProps, mapDispatchToProps) (PassengerRatings);
