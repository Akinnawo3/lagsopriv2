import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";
import { RctCard } from 'Components/RctCard';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {getPassengerByAuthId, getPassengers} from "Actions/passengerActions";
import PassengerProfile from "Routes/passengers/components/passengerProfile";
import PassengerTripHistory from "Routes/passengers/components/passengerTripHistory";
import Spinner from "../../spinner/Spinner";
import PassengerPaymentHistory from "Routes/passengers/components/passengerPaymentHistory";
import PassengerRatings from "Routes/passengers/components/passengerRatings";
import {getRating, getRatingAverage} from "Actions/ratingAction";
import {getPassengerTripCount, getPassengerTrips} from "Actions/tripAction";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

 const Passenger  = ({location, match, getPassengerByAuthId, passengerDetails, loading, getRating, getRatingAverage, getTrips, getTripCount}) => {
    const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 0);
     const [currentPage, setCurrentPage] = useState(1);
     const [postsPerPage] = useState(10);


  const  handleChange = (event, value) => {
        setActiveTab(value)
    }


     useEffect(()=> {
         if (match.params.id){
             getPassengerByAuthId(match.params.id)
             getRating(match.params.id)
             getRatingAverage(match.params.id)
             getTrips(1, match.params.id);
             getTripCount(match.params.id)
         }
     },[match.params.id])

     const paginate = pageNumber => {
         setCurrentPage(pageNumber);
         getTrips(pageNumber);
         window.scrollTo(0, 0);
     };


        return (
            <div className="userProfile-wrapper">
                <Helmet>
                    <title>User Profile</title>
                    <meta name="description" content="User Profile" />
                </Helmet>
                {passengerDetails.firstName ?
                    <PageTitleBar title={!loading ? `${passengerDetails.firstName} ${passengerDetails.lastName}`: ''} match={match}  /> :
                    <PageTitleBar title={`loading..`} match={match}  />

                }
                {loading && <Spinner />}
                {!loading &&
                <RctCard>
                    <div
                        className="d-flex align-items-center py-5 justify-content-center mb-4 mt-2"
                    >
                        <div className="user-profile mt-2">
                            <img
                                src={require('Assets/avatars/avatar.png')}
                                alt="user profile"
                                className="img-fluid rounded-circle"
                                width="200"
                                height="200"
                            />
                        </div>
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
                                    icon={<i className="icon-credit-card"></i>}
                                    label={"Payment History"}
                                />
                                <Tab
                                    icon={<i className="icon-star"></i>}
                                    label={"Ratings"}
                                />
                                {/*<Tab*/}
                                {/*    icon={<i className="ti-home"></i>}*/}
                                {/*    label={<IntlMessages id="components.address" />}*/}
                                {/*/>*/}
                            </Tabs>
                        </AppBar>
                        {activeTab === 0 &&
                        <TabContainer>
                            <PassengerProfile passenger={passengerDetails}/>
                        </TabContainer>}
                        {activeTab === 1 &&
                        <TabContainer>
                            <PassengerTripHistory/>
                        </TabContainer>}
                        {activeTab === 2 &&
                        <TabContainer>
                           <PassengerPaymentHistory currentPage={currentPage} postsPerPage={postsPerPage} paginate={paginate} />
                        </TabContainer>}
                        {activeTab === 3 &&
                        <TabContainer>
                            <PassengerRatings />
                        </TabContainer>}
                    </div>
                </RctCard>
                }
            </div>
        );
}

function mapDispatchToProps(dispatch) {
    return {
        getPassengerByAuthId: (id) => dispatch(getPassengerByAuthId(id)),
        getRating: (id) => dispatch(getRating(id)),
        getRatingAverage: (id) => dispatch(getRatingAverage(id)),
        getTrips: (pageNo, authId) => dispatch(getPassengerTrips(pageNo, authId)),
        getTripCount: (authId) => dispatch(getPassengerTripCount(authId)),
    };
}

const mapStateToProps = state => ({
    passengerDetails: state.passenger.passenger,
    loading: state.loading.loading
});

export default connect(mapStateToProps,mapDispatchToProps)(Passenger)
