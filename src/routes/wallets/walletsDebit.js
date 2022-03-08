/**
 * WalletsCompleted
 */
import React, {useEffect} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getTripCount, getTrips} from "Actions/tripAction";
import WalletTable from "Routes/wallets/component/walletTable";

const WalletsDebit = ({match, getTrips, getTripCount}) => {
  useEffect(() => {
    getTrips(1, "completed", true);
    getTripCount("completed");
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Wallets"} match={match} />
      <WalletTable status={"completed"} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getTrips: (pageNo, status, spinner) => dispatch(getTrips(pageNo, status, spinner)),
    getTripCount: (status) => dispatch(getTripCount(status)),
  };
}

const mapStateToProps = (state) => ({
  trips: state.trips.trips,
  tripCount: state.trips.tripCount,
  isLoading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletsDebit);
