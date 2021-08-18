import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";
import { RctCard } from 'Components/RctCard';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {getPassenger} from "Actions/passengerActions";
import PassengerProfile from "Routes/passengers/components/passengerProfile";
import PassengerTripHistory from "Routes/passengers/components/passengerTripHistory";
import PassengerRatings from "Routes/passengers/components/passengerRatings";
import {
    getPassengerTripCountDisplayAll, getPassengerTripCountDisplayCancelled, getPassengerTripCountDisplayCompleted,
    getPassengerTripCount,
    getPassengerTrips
} from "Actions/tripAction";
import {getUserRating, getUserRatingAverage, getUserRatingsCount} from "Actions/ratingAction";
import {getWalletBalance, getWallets, getWalletsCount} from "Actions/walletAction";
import Wallets from "Components/Wallets/wallets";
import {getPayments, getPaymentsCount} from "Actions/paymentAction";
import PaymentsComponent from "Components/PaymentsComponent/paymentsComponent";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

 const Passenger  = (props) => {

   const  {
       location,
       match,
       getPassenger,
       passengerDetails,
       loading,
       getUserRating,
       getUserRatingCount,
       getUserRatingAverage,
       getPassengerTripCountDisplayAll,
       getPassengerTripCountDisplayCompleted,
       getPassengerTripCountDisplayCancelled,
       getPassengerTrips,
       getPassengerTripCount,
       getWallets,
       getWalletsCount,
       getWalletsBalance,
       wallets,
       wallet,
       walletsCount,
       paymentsCount,
       payments,
       getPayments,
       getPaymentsCount
   } = props

    const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 0);

   const  handleChange = (event, value) => {
        setActiveTab(value)
    }

    useEffect(()=> {
         if (match.params.id){
             getPassenger(match.params.id)
             getPassengerTrips(1, match.params.id, true, '')
             getPassengerTripCount(match.params.id, '')
             getPassengerTripCountDisplayAll(match.params.id)
             getPassengerTripCountDisplayCompleted(match.params.id)
             getPassengerTripCountDisplayCancelled(match.params.id)
             getUserRating(1, 'rider', match.params.id)
             getUserRatingCount('rider', match.params.id)
             getUserRatingAverage('rider', match.params.id)
             getWallets(1, '', match.params.id)
             getWalletsCount('', match.params.id)
             getWalletsBalance(match.params.id)
             getPayments(1, '', match.params.id)
             getPaymentsCount('', match.params.id)
         }
     },[match.params.id])


        return (
            <div className="userProfile-wrapper">
                <Helmet>
                    <title>User Profile</title>
                    <meta name="description" content="User Profile" />
                </Helmet>
                    <PageTitleBar title={!loading && passengerDetails?.first_name ? `${passengerDetails?.first_name} ${passengerDetails?.last_name}`: ''} match={match}  />

                {!loading &&
                <RctCard>
                    <div
                        className="d-flex align-items-center py-5 justify-content-center mb-4 mt-2"
                    >
                        {!loading && passengerDetails?.avatar ?
                            <img
                                src={passengerDetails?.avatar}
                                alt="user profile"
                                className="rounded-circle"
                                width="200"
                                height="200"
                            />:
                            <div className='d-flex align-items-center justify-content-center' style={{width: '200px', height: '200px', borderRadius: '100px', backgroundColor: 'lightblue'}} >
                                <div style={{fontSize: '50px', color: 'white'}}>
                                    {passengerDetails?.first_name?.charAt(0)}
                                </div>
                            </div>
                           }
                    </div>
                    <div className="rct-tabs">
                        <AppBar position="static">
                            <Tabs
                                value={activeTab}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="off"
                                indicatorColor="primary"
                            >
                                <Tab
                                    icon={<i className="ti-user"></i>}
                                    label={"Profile"}
                                />
                                <Tab
                                    icon={<i className="icon-graph"></i>}
                                    label={"Trip History"}
                                />
                                <Tab
                                    icon={<i className="icon-star"></i>}
                                    label={"Ratings"}
                                />
                                <Tab
                                    icon={<i className="icon-credit-card"></i>}
                                    label={"Wallets History"}
                                />
                                <Tab
                                    icon={<i className="icon-credit-card"></i>}
                                    label={"Payment History"}
                                />
                            </Tabs>
                        </AppBar>
                        {activeTab === 0 &&
                        <TabContainer>
                            <PassengerProfile passenger={passengerDetails}/>
                        </TabContainer>}
                        {activeTab === 1 &&
                        <TabContainer>
                            <PassengerTripHistory passenger_id={match.params.id} />
                        </TabContainer>}
                        {activeTab === 2 &&
                        <TabContainer>
                            <PassengerRatings auth_id={match.params.id} />
                        </TabContainer>}
                        {activeTab === 3 &&
                        <TabContainer>
                            <Wallets auth_id={match.params.id} wallets={wallets} wallet={wallet} walletsCount={walletsCount} />
                        </TabContainer>}
                        {activeTab === 4 &&
                        <TabContainer>
                            <PaymentsComponent auth_id={match.params.id} payments={payments}  paymentsCount={paymentsCount} />
                        </TabContainer>}
                    </div>
                </RctCard>
                }
            </div>
        );
}

function mapDispatchToProps(dispatch) {
    return {
        getPassengerTrips: (pageNo, authId, spinner, trip_status) => dispatch(getPassengerTrips(pageNo, authId, spinner, trip_status)),
        getPassengerTripCount: (authId, trip_status) => dispatch(getPassengerTripCount(authId, trip_status)),
        getPassengerTripCountDisplayAll: (authId) => dispatch(getPassengerTripCountDisplayAll(authId)),
        getPassengerTripCountDisplayCompleted: (authId) => dispatch(getPassengerTripCountDisplayCompleted(authId)),
        getPassengerTripCountDisplayCancelled: (authId) => dispatch(getPassengerTripCountDisplayCancelled(authId)),
        getPassenger: (auth_id) => dispatch(getPassenger(auth_id)),
        getUserRating: (page_no, user_type, auth_id) => dispatch(getUserRating(page_no,user_type, auth_id)),
        getUserRatingCount: (user_type, auth_id) => dispatch(getUserRatingsCount(user_type, auth_id)),
        getUserRatingAverage: (user_type, auth_id) => dispatch(getUserRatingAverage(user_type, auth_id)),
        getWallets: (pageNo, transaction_status, auth_id) => dispatch(getWallets(pageNo, transaction_status, auth_id)),
        getWalletsCount: (transaction_status, auth_id) => dispatch(getWalletsCount(transaction_status, auth_id)),
        getWalletsBalance: (auth_id) => dispatch(getWalletBalance(auth_id)),
        getPayments: (pageNo, transaction_status, auth_id) => dispatch(getPayments(pageNo, transaction_status, auth_id)),
        getPaymentsCount: (transaction_status, auth_id) => dispatch(getPaymentsCount(transaction_status, auth_id)),




    };
}

const mapStateToProps = state => ({
    passengerDetails: state.passenger.passenger,
    loading: state.loading.loading,
    wallets: state.wallets.wallets,
    wallet: state.wallets.wallet,
    walletsCount: state.wallets.walletsCount,
    payments: state.payments.payments,
    paymentsCount: state.payments.paymentsCount,
});

export default connect(mapStateToProps,mapDispatchToProps)(Passenger)
