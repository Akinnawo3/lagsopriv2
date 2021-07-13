import React, {useEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {Link} from "react-router-dom";
import {getRating, getRatings} from "Actions/ratingAction";
import {calculatePostDate} from "Helpers/helpers";
import StarRatings from "react-star-ratings";



const RatingDetails = ({getRating, rating,  loading, match})=> {
    useEffect(()=> {
        getRating(match.params.id, true)
    },[match.params.id])

    return (
        <div className='mb-5' style={{minHeight: '90vh'}}>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Rating Details" />
            </Helmet>
            <PageTitleBar title={`Rating details`} match={match}  />
            {!loading &&
            <div className="row" style={{fontSize: '0.8rem'}}>
                <div className="col-sm-6">
                    <div className="tab-content px-4">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Rating Id</strong></span>{rating?.rating_id}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Receiver's Name</strong></span>
                                    <Link
                                        to={rating?.receiver_user_type === 'driver' ? `/admin/drivers/${rating?.receiver_auth_id}` : `/admin/passengers/${rating?.receiver_auth_id}`}>{rating?.receiver?.find(x=>x !== 'undefined')?.first_name} {rating?.receiver?.find(x=>x !== 'undefined')?.last_name}</Link>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Receiver's User Type</strong></span>{rating?.receiver_user_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Sender's Name</strong></span>
                                    <Link
                                        to={rating?.sender?.find(x=>x !== 'undefined')?.user_type === 'driver' ? `/admin/drivers/${rating?.sender_auth_id}` : `/admin/passengers/${rating?.sender_auth_id}`}>{rating?.sender?.find(x=>x !== 'undefined')?.first_name} {rating?.sender?.find(x=>x !== 'undefined')?.last_name}</Link>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Sender's User Type</strong></span>{rating?.sender?.find(x=>x !== 'undefined')?.user_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Id</strong></span>
                                    <Link to={`/admin/trips/${rating?.trip_id}`}>{rating?.trip_id}</Link>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Date / Time</strong></span>{calculatePostDate(rating?.createdAt)}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Rating</strong></span>
                                    <StarRatings
                                        rating={rating?.rating}
                                        starRatedColor={(rating?.rating <= 2) ? '#dc3545' : (rating?.rating > 2 && rating?.rating < 4) ? '#ffc107' : '#5cb85c'}
                                        numberOfStars={5}
                                        starDimension="18px"
                                    />
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Comment</strong></span>{rating?.comment}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getRating: (rating_id, spinner) => dispatch(getRating(rating_id, spinner)),
    };
}

const mapStateToProps = state => ({
    rating: state.rating.rating,
    loading: state.loading.loading,



});

export default connect( mapStateToProps, mapDispatchToProps)(RatingDetails)
