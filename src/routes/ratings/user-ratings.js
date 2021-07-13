import React, {useEffect, Fragment, useState} from 'react';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {connect} from "react-redux";
import {getRatings, getRatingsCount} from "Actions/ratingAction";
import RatingTable from "Routes/ratings/components/ratingTable";




const  UserRatings = ({match, getRatings, getRatingsCount}) => {


    useEffect(()=> {
        getRatings(1, 'rider', true)
        getRatingsCount('rider')
    },[])




    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Ratings"} match={match} />
            <RatingTable user_type={'rider'} header={'Passenger Ratings'} />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getRatings: (page_no, user_type, spinner) => dispatch(getRatings(page_no, user_type, spinner)),
        getRatingsCount: (user_type) => dispatch(getRatingsCount(user_type)),
    };
}

const mapStateToProps = state => ({
    ratings: state.rating.ratings,
    ratingCount: state.rating.ratingCount,
    loading: state.loading.loading,



});

export default connect( mapStateToProps, mapDispatchToProps) (UserRatings);
