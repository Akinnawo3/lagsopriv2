import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Helmet } from "react-helmet";
import { RctCard } from "Components/RctCard";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import { getDriver } from "Actions/driverAction";
import DriverProfile from "Routes/drivers/components/driverProfile";
import DriverRatings from "Routes/drivers/components/driverRatings";
import { getRating, getUserRating, getUserRatingAverage, getUserRatingsCount } from "Actions/ratingAction";
import DriverTrips from "Routes/drivers/components/driverTrips";
import { getDriverTripCount, getDriverTripCountDisplayAll, getDriverTripCountDisplayCancelled, getDriverTripCountDisplayCompleted, getDriverTrips } from "Actions/tripAction";
import { getWalletBalance, getWallets, getWalletsCount } from "Actions/walletAction";
import Wallets from "Components/Wallets/wallets";
import { getPayments, getPaymentsCount, getPaymentsService, getPaymentsServiceBalanceForIndividual, getPaymentsServiceCount } from "Actions/paymentAction";
import PaymentsServiceComponent from "Components/PaymentsComponent/paymentsServiceComponent";
import PaymentTripComponent from "Components/PaymentsComponent/paymentTripComponent";
import DriverPayoutsTable from "Routes/drivers/components/driverPayouts";

// For Tab Content
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const Driver = (props) => {
  const {
    location,
    match,
    getDriver,
    getDriverTrips,
    loading,
    getDriverTripCount,
    driverDetails,
    getUserRating,
    getDriverTripCountDisplayAll,
    getDriverTripCountDisplayCompleted,
    getDriverTripCountDisplayCancelled,
    getUserRatingCount,
    getUserRatingAverage,
    getWallets,
    getWalletsCount,
    getWalletsBalance,
    wallets,
    wallet,
    walletsCount,
    getPaymentsService,
    getPaymentsServiceCount,
    getPaymentsServiceBalanceForIndividual,
    getPayments,
    getPaymentsCount,
    loadingStatus
  } = props;

   const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 0);

   const handleChange = (event, value) => {
      setActiveTab(value);
   };

   useEffect(() => {
      if (match.params.id) {
         getDriver(match.params.id);
      }
   }, [match.params.id]);

   //called only when on trip tab
   useEffect(() => {
      if (match.params.id && activeTab === 1) {
         getDriverTrips(1, match.params.id, false, "");
         getDriverTripCount(match.params.id, "");
         getDriverTripCountDisplayAll(match.params.id);
         getDriverTripCountDisplayCompleted(match.params.id);
         getDriverTripCountDisplayCancelled(match.params.id);
      }
   }, [match.params.id, activeTab]);

   //called only when on rating tab
   useEffect(() => {
      if (match.params.id && activeTab === 2) {
         getUserRating(1, "driver", match.params.id);
         getUserRatingCount("driver", match.params.id);
         getUserRatingAverage("driver", match.params.id);
      }
   }, [match.params.id, activeTab]);

   //called only when on wallet tab
   useEffect(() => {
      if (match.params.id && activeTab === 3) {
         getWallets(1, "", match.params.id, true);
         getWalletsCount("", match.params.id);
         getWalletsBalance(match.params.id);
      }
   }, [match.params.id, activeTab]);

   //called only when on trip payment tab
   useEffect(() => {
      if (match.params.id && activeTab === 5) {
         getPayments(1, "", match.params.id, false, "driver_id");
         getPaymentsCount("", match.params.id, "driver_id");
      }
   }, [match.params.id, activeTab]);

   //called only when on service payment tab
   useEffect(() => {
      if (match.params.id && activeTab === 4) {
         getPaymentsService(1, "", match.params.id);
         getPaymentsServiceCount("", match.params.id);
         getPaymentsServiceBalanceForIndividual(match.params.id);
      }
   }, [match.params.id, activeTab]);

  return (
    <div className="userProfile-wrapper">
      <Helmet>
        <title>Driver Profile</title>
        <meta name="description" content="Driver Profile" />
      </Helmet>
      <PageTitleBar title={!loading && driverDetails?.first_name ? `${driverDetails.first_name} ${driverDetails.last_name}` : ""} match={match} />
      {!loading && (
        <RctCard>
          <div className="d-flex align-items-center py-5 justify-content-center mb-4 mt-2">
            <div className="user-profile mt-2">
              {!loading && driverDetails.avatar ? (
                <img src={driverDetails.avatar} alt="user profile" className="rounded-circle" width="200" height="200" />
              ) : (
                <div className="d-flex align-items-center justify-content-center" style={{ width: "200px", height: "200px", borderRadius: "100px", backgroundColor: "lightblue" }}>
                  <div style={{ fontSize: "50px", color: "white" }}>{driverDetails?.first_name?.charAt(0)}</div>
                </div>
              )}
            </div>
          </div>
          <div className="rct-tabs">
            <AppBar position="static">
              <Tabs value={activeTab} onChange={handleChange} variant="scrollable" scrollButtons="off" indicatorColor="primary">
                <Tab icon={<i className="ti-user"></i>} label={"Profile"} />
                <Tab icon={<i className="icon-graph"></i>} label={"Trip History"} />
                <Tab icon={<i className="icon-star"></i>} label={"Ratings"} />
                <Tab icon={<i className="icon-credit-card"></i>} label={"Wallet History"} />
                {/* <Tab icon={<i className="icon-credit-card"></i>} label={"Revenue Split"} /> */}
                <Tab icon={<i className="icon-credit-card"></i>} label={"Debt Service History"} />
                <Tab icon={<i className="icon-credit-card"></i>} label={"Trip Payment History"} />
                <Tab icon={<i className="icon-credit-card"></i>} label={"Payout"} />
              </Tabs>
            </AppBar>
            {activeTab === 0 && (
              <TabContainer>
                <DriverProfile driver={driverDetails} />
              </TabContainer>
            )}
            {activeTab === 1 && (
              <TabContainer>
                <DriverTrips driver_id={match.params.id} />
              </TabContainer>
            )}
            {activeTab === 2 && (
              <TabContainer>
                <DriverRatings auth_id={match.params.id} />
              </TabContainer>
            )}
            {activeTab === 3 && (
              <TabContainer>
                <Wallets auth_id={match.params.id} wallets={wallets} wallet={wallet} walletsCount={walletsCount} />
              </TabContainer>
            )}
            {activeTab === 4 && (
              <TabContainer>
                <PaymentsServiceComponent auth_id={match.params.id} />
              </TabContainer>
            )}
            {activeTab === 5 && (
              <TabContainer>
                <PaymentTripComponent auth_id={match.params.id} />
              </TabContainer>
            )}
            {activeTab === 6 && (
              <TabContainer>
                <DriverPayoutsTable  driverId={match?.params?.id} isLoading={loadingStatus} />
              </TabContainer>
            )}
          </div>
        </RctCard>
      )}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
   return {
      getDriver: (auth_id) => dispatch(getDriver(auth_id)),
      getRating: (id) => dispatch(getRating(id)),
      getDriverTrips: (pageNo, authId, spinner, trip_status) => dispatch(getDriverTrips(pageNo, authId, spinner, trip_status)),
      getDriverTripCount: (authId, trip_status) => dispatch(getDriverTripCount(authId, trip_status)),
      getDriverTripCountDisplayAll: (authId) => dispatch(getDriverTripCountDisplayAll(authId)),
      getDriverTripCountDisplayCompleted: (authId) => dispatch(getDriverTripCountDisplayCompleted(authId)),
      getDriverTripCountDisplayCancelled: (authId) => dispatch(getDriverTripCountDisplayCancelled(authId)),
      getUserRating: (page_no, user_type, auth_id) => dispatch(getUserRating(page_no, user_type, auth_id)),
      getUserRatingCount: (user_type, auth_id) => dispatch(getUserRatingsCount(user_type, auth_id)),
      getUserRatingAverage: (user_type, auth_id) => dispatch(getUserRatingAverage(user_type, auth_id)),
      getWallets: (pageNo, transaction_status, auth_id, loading) => dispatch(getWallets(pageNo, transaction_status, auth_id, loading)),
      getWalletsCount: (transaction_status, auth_id) => dispatch(getWalletsCount(transaction_status, auth_id)),
      getWalletsBalance: (auth_id) => dispatch(getWalletBalance(auth_id)),
      getPaymentsService: (pageNo, transaction_status, auth_id) => dispatch(getPaymentsService(pageNo, transaction_status, auth_id)),
      getPaymentsServiceCount: (transaction_status, auth_id) => dispatch(getPaymentsServiceCount(transaction_status, auth_id)),
      getPaymentsServiceBalanceForIndividual: (auth_id) => dispatch(getPaymentsServiceBalanceForIndividual(auth_id)),
      getPayments: (pageNo, transaction_status, auth_id, loading, userType) => dispatch(getPayments(pageNo, transaction_status, auth_id, loading, userType)),
      getPaymentsCount: (transaction_status, auth_id, userType) => dispatch(getPaymentsCount(transaction_status, auth_id, userType)),
   };
}

const mapStateToProps = (state) => ({
   drivers: state.driver.drivers,
   driverDetails: state.driver.driver,
   loadingStatus: state.loading.loadingStatus,
   loading: state.loading.loading,
   vehicle: state.vehicle.vehicle,
   wallets: state.wallets.wallets,
   wallet: state.wallets.wallet,
   walletsCount: state.wallets.walletsCount,
   payments: state.payments.paymentsService,
   paymentsCount: state.payments.paymentsServiceCount,
   paymentsServiceBalanceIndividual: state.payments.paymentsServiceBalanceIndividual,
   driverLocation: state.driver.driverLocation,
});

export default connect(mapStateToProps, mapDispatchToProps)(Driver);
