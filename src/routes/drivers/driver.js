import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Helmet } from "react-helmet";
import { RctCard } from 'Components/RctCard';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {changeDriverStatus, getDriverByAuthId, getDrivers} from "Actions/driverAction";
import DriverProfile from "Routes/drivers/components/driverProfile";
import DriverRatings from "Routes/drivers/components/driverRatings";
import LinearProgress from "@material-ui/core/LinearProgress";
import {getRating, getRatingAverage} from "Actions/ratingAction";
import Spinner from "../../spinner/Spinner";
import DriverTrips from "Routes/drivers/components/driverTrips";
import {getDriverTripCount, getDriverTrips} from "Actions/tripAction";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

 const Driver  = ({location, match, getDrivers, changeDriverStatus, loadingStatus, getRating, getRatingAverage, getDriverByAuthId, driverDetails, loading,  getTrips, getTripCount}) => {
    const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 0);
     const [currentPage, setCurrentPage] = useState(1);
     const [postsPerPage] = useState(10);

  const  handleChange = (event, value) => {
        setActiveTab(value)
    }

     useEffect(()=> {
         if (match.params.id){
             getDriverByAuthId(match.params.id)
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
                    <title>Driver Profile</title>
                    <meta name="description" content="Driver Profile" />
                </Helmet>
                <PageTitleBar title={!loading ? `${driverDetails.firstName} ${driverDetails.lastName}`: ''} match={match}  />
                {loading && <Spinner />}
                {!loading && <RctCard>
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

                            {driverDetails.status == 1 &&
                            <div className="mt-4" style={{textAlign: 'center'}}>Status: Accepted</div>
                            }
                            {driverDetails.status == 0 &&
                            <div className="mt-4" style={{textAlign: 'center'}}>Status: Pending</div>
                            }
                            {driverDetails.status == 3 &&
                            <div className="mt-4" style={{textAlign: 'center'}}>Status: Inactive</div>
                            }
                            {driverDetails.status == 2 &&
                            <div className="mt-4" style={{textAlign: 'center'}}>Status: Approved</div>
                            }

                            {driverDetails.status == 0 &&
                            <div style={{textAlign: 'center'}}>
                                <Button disabled={loadingStatus} onClick={()=> {changeDriverStatus(driverDetails.id, '1')}} className="bg-primary mt-3 text-white">Accept</Button>
                            </div>}
                            {driverDetails.status == 1 &&
                            <div style={{textAlign: 'center'}}>
                                <Button disabled={loadingStatus} onClick={()=> {changeDriverStatus(driverDetails.id, '2')}} className="bg-success mt-3 text-white">Approve</Button>
                            </div>}
                            {driverDetails.status == 2 &&
                            <div style={{textAlign: 'center'}}>
                                <Button disabled={loadingStatus} onClick={()=> {changeDriverStatus(driverDetails.id, '3')}} className="bg-danger mt-3 text-white">Suspend</Button>
                            </div>}
                            {driverDetails.status == 3 &&
                            <div style={{textAlign: 'center'}}>
                                <Button disabled={loadingStatus} onClick={()=> {changeDriverStatus(driverDetails.id, '1')}} className="bg-warning mt-3 text-white">Reactivate</Button>
                            </div>}

                        </div>

                        {/*<div className="user-info">*/}
                        {/*    <span className="user-name ml-4">Lucile Beck</span>*/}
                        {/*    /!*<i className="zmdi zmdi-chevron-down dropdown-icon mx-4"></i>*!/*/}
                        {/*</div>*/}
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
                                    icon={<i className="icon-star"></i>}
                                    label={"Ratings"}
                                />
                                <Tab
                                    icon={<i className="icon-graph"></i>}
                                    label={"Trip History"}
                                />
                                {/*<Tab*/}
                                {/*    icon={<i className="ti-comment-alt"></i>}*/}
                                {/*    label={<IntlMessages id="widgets.messages" />}*/}
                                {/*/>*/}
                                {/*<Tab*/}
                                {/*    icon={<i className="ti-home"></i>}*/}
                                {/*    label={<IntlMessages id="components.address" />}*/}
                                {/*/>*/}
                            </Tabs>
                        </AppBar>
                        {activeTab === 0 &&
                        <TabContainer>
                            <DriverProfile driver={driverDetails} />
                        </TabContainer>}
                        {activeTab === 1 &&
                        <TabContainer>
                            <DriverRatings driver={driverDetails} />
                        </TabContainer>}
                        {activeTab === 2 &&
                        <TabContainer>
                            <DriverTrips currentPage={currentPage} postsPerPage={postsPerPage} paginate={paginate} />
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
        getDrivers: () => dispatch(getDrivers()),
        getDriverByAuthId: (id) => dispatch(getDriverByAuthId(id)),
        changeDriverStatus: (id, status) => dispatch(changeDriverStatus(id, status)),
        getRating: (id) => dispatch(getRating(id)),
        getRatingAverage: (id) => dispatch(getRatingAverage(id)),
        getTrips: (pageNo, authId) => dispatch(getDriverTrips(pageNo, authId)),
        getTripCount: (authId) => dispatch(getDriverTripCount(authId)),
    };
}

const mapStateToProps = state => ({
    drivers: state.driver.drivers,
    driverDetails: state.driver.driver,
    loadingStatus: state.loading.loadingStatus,
    trips: state.trips.driverTrips,
    tripCount: state.trips.tripCountDriver,
    loading: state.loading.loading
});

export default connect(mapStateToProps,mapDispatchToProps)(Driver)
