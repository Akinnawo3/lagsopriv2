import React, {useEffect, Fragment, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getRatings, getRatingsCount} from "Actions/ratingAction";
import RatingTable from "Routes/ratings/components/ratingTable";
const qs = require("qs");

const UserRatings = ({history, match, getRatings, getRatingsCount, ratings}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || ratings.length < 1) {
      getRatings(currentPage, "rider", true);
      getRatingsCount("rider");
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Ratings"} match={match} />
      <RatingTable user_type={"rider"} header={"Rider Ratings"} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getRatings: (page_no, user_type, spinner) => dispatch(getRatings(page_no, user_type, spinner)),
    getRatingsCount: (user_type) => dispatch(getRatingsCount(user_type)),
  };
}

const mapStateToProps = (state) => ({
  ratings: state.rating.ratings,
  ratingCount: state.rating.ratingCount,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(UserRatings);
