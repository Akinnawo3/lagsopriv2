import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";
import { RctCard } from 'Components/RctCard';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {getDriver} from "Actions/driverAction";
import DriverProfile from "Routes/drivers/components/driverProfile";
import DriverRatings from "Routes/drivers/components/driverRatings";
import {getRating, getUserRating, getUserRatingAverage, getUserRatingsCount} from "Actions/ratingAction";
import DriverTrips from "Routes/drivers/components/driverTrips";
import {
    getDriverTripCount,
    getDriverTripCountDisplayAll, getDriverTripCountDisplayCancelled,
    getDriverTripCountDisplayCompleted,
    getDriverTrips
} from "Actions/tripAction";
import {getVehicles} from "Actions/vehicleAction";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

 const Driver  = ({location, match, getDriver, getDriverTrips, loading, getDriverTripCount, driverDetails, getUserRating, getVehicles,
                      getDriverTripCountDisplayAll, getDriverTripCountDisplayCompleted,
                      getDriverTripCountDisplayCancelled, getUserRatingCount, getUserRatingAverage}) => {
    const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 0);

  const  handleChange = (event, value) => {
        setActiveTab(value)
    }

     useEffect(()=> {
         if (match.params.id){
             getDriverTrips(1, match.params.id, true, '')
             getDriverTripCount(match.params.id, '')
             getDriverTripCountDisplayAll(match.params.id)
             getDriverTripCountDisplayCompleted(match.params.id)
             getDriverTripCountDisplayCancelled(match.params.id)
             getDriver(match.params.id);
             getUserRating(1, 'driver', match.params.id)
             getUserRatingCount('driver', match.params.id)
             getUserRatingAverage('driver', match.params.id)
             getVehicles(1, 0)
         }
     },[match.params.id])


     // useEffect(() => {
     //     if(driverDetails?.driver_data?.vehicle_id) {
     //         getVehicle(driverDetails?.driver_data?.vehicle_id)
     //     }
     // },[driverDetails?.driver_data?.vehicle_id])


        return (
            <div className="userProfile-wrapper">
                <Helmet>
                    <title>Driver Profile</title>
                    <meta name="description" content="Driver Profile" />
                </Helmet>
                <PageTitleBar title={!loading && driverDetails?.first_name ? `${driverDetails.first_name} ${driverDetails.last_name}`: ''} match={match}  />
                {!loading && <RctCard>
                    <div
                        className="d-flex align-items-center py-5 justify-content-center mb-4 mt-2"
                    >
                        <div className="user-profile mt-2">
                            {!loading && driverDetails.avatar ?
                                <img
                                src={driverDetails.avatar}
                                alt="user profile"
                                className="rounded-circle"
                                width="200"
                                height="200"
                            />:
                                <div className='d-flex align-items-center justify-content-center' style={{width: '200px', height: '200px', borderRadius: '100px', backgroundColor: 'lightblue'}} >
                                    <div style={{fontSize: '50px', color: 'white'}}>
                                        {driverDetails?.first_name?.charAt(0)}
                                    </div>
                                </div>}
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
                                    icon={<i className="icon-star"></i>}
                                    label={"Ratings"}
                                />
                            </Tabs>
                        </AppBar>
                        {activeTab === 0 &&
                        <TabContainer>
                            <DriverProfile driver={driverDetails} />
                        </TabContainer>}
                        {activeTab === 1 &&
                        <TabContainer>
                            <DriverTrips driver_id={match.params.id} />
                        </TabContainer>}
                        {activeTab === 2 &&
                        <TabContainer>
                            <DriverRatings auth_id={match.params.id} />
                        </TabContainer>}
                        {/*{activeTab === 2 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <Messages />*/}
                        {/*</TabContainer>}*/}
                        {/*{activeTab === 3 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <Address />*/}
                        {/*</TabContainer>}*/}
                    </div>
                </RctCard>}
            </div>
        );
}

function mapDispatchToProps(dispatch) {
    return {
        getDriver: (auth_id) => dispatch(getDriver(auth_id)),
        getRating: (id) => dispatch(getRating(id)),
        getDriverTrips: (pageNo, authId, spinner, trip_status) => dispatch(getDriverTrips(pageNo, authId, spinner, trip_status)),
        getDriverTripCount: (authId, trip_status) => dispatch(getDriverTripCount(authId, trip_status)),
        getDriverTripCountDisplayAll: (authId) => dispatch(getDriverTripCountDisplayAll(authId)),
        getDriverTripCountDisplayCompleted: (authId) => dispatch(getDriverTripCountDisplayCompleted(authId)),
        getDriverTripCountDisplayCancelled: (authId) => dispatch(getDriverTripCountDisplayCancelled(authId)),
        getVehicles: (page_no, assign, spinner) => dispatch(getVehicles(page_no, assign, spinner)),
        getUserRating: (page_no, user_type, auth_id) => dispatch(getUserRating(page_no,user_type, auth_id)),
        getUserRatingCount: (user_type, auth_id) => dispatch(getUserRatingsCount(user_type, auth_id)),
        getUserRatingAverage: (user_type, auth_id) => dispatch(getUserRatingAverage(user_type, auth_id)),


    };
}

const mapStateToProps = state => ({
    drivers: state.driver.drivers,
    driverDetails: state.driver.driver,
    loadingStatus: state.loading.loadingStatus,
    loading: state.loading.loading,
    vehicle: state.vehicle.vehicle,
});

export default connect(mapStateToProps,mapDispatchToProps)(Driver)
