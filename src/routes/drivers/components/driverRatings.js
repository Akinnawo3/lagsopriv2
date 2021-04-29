import {Card, CardBody, Col, Row, Table} from "reactstrap";
import StarRatings from "react-star-ratings";
import {getRating} from "Actions/ratingAction";
import {connect} from "react-redux";
import React from "react";

const DriverRatings = ({rating, ratingAverage, isLoading}) =>{


    return (
        <div className="prefrences-wrapper">
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-dark" >
                            <CardBody className="pb-0">
                                <div className="text-value">Aggregate Rating</div>
                                <div>All time Statistic</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                                <span className="pr-2 font-2xl">{ratingAverage}</span>
                                <StarRatings
                                    rating={ratingAverage}
                                    starRatedColor="#ffc107"
                                    starDimension="20px"
                                    // changeRating={this.changeRating}
                                    numberOfStars={5}
                                    name='rating'
                                />
                            </div>
                        </Card>
                    </Col>

                    <Col xs="12" sm="6" lg="3">
                        <Card className="text-dark" >
                            <CardBody className="pb-0">
                                <div className="text-value">Total Reviews</div>
                                <div>All time Statistic</div>
                            </CardBody>
                            <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-center" style={{ height: '70px' }}>
                                <span className="pr-2 font-2xl">{rating.length}</span>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card>
                            <CardBody>
                                <Table responsive hover>
                                    <thead>
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Review</th>
                                        {/*<th scope="col">Channel</th>*/}
                                        <th scope="col">Rating</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {rating.length > 0 && rating.map(rat => (
                                        <tr key={rat.id}>
                                            <td>{new Date(rat.timestamp).toLocaleString()}</td>
                                            <td>{rat.comment}</td>
                                            {/*<td>USSD</td>*/}
                                            <td>
                                                <StarRatings
                                                    rating={rat.rating? rat.rating: 0}
                                                    starRatedColor="#ffc107"
                                                    starDimension="20px"
                                                    numberOfStars={5}
                                                    name='rating'
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                                {rating.length === 0 && !isLoading &&
                                <div className="d-flex align-items-center justify-content-center">No  rating Available</div>
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        getRating: (id) => dispatch(getRating(id)),
    };
}

const mapStateToProps = state => ({
    rating: state.rating.rating,
    ratingAverage: state.rating.ratingAverage,
    isLoading: state.loading.loading,



});

export default connect( mapStateToProps, mapDispatchToProps) (DriverRatings)
