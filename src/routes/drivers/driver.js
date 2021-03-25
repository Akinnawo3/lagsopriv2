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
import {changeDriverStatus, getDrivers} from "Actions/driverAction";
import DriverProfile from "Routes/drivers/components/driverProfile";
import DriverRatings from "Routes/drivers/components/driverRatings";
import LinearProgress from "@material-ui/core/LinearProgress";
import {Badge } from 'reactstrap';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

 const Driver  = ({location, match, getDrivers, drivers, changeDriverStatus, loadingStatus}) => {
    const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 0);
    const [driverDetails, setDriverDetails] = useState({});

  const  handleChange = (event, value) => {
        setActiveTab(value)
    }

    useEffect(()=> {
        getDrivers()
    },[])

     useEffect(()=> {
         if (drivers && match.params.id){
             drivers.map(driver=> {
                 if(driver.id == match.params.id){
                    setDriverDetails(driver)
                 }
             })
         }
     },[drivers, match.params.id])


        return (
            <div className="userProfile-wrapper">
                {loadingStatus &&
                <LinearProgress />
                }
                <Helmet>
                    <title>User Profile</title>
                    <meta name="description" content="User Profile" />
                </Helmet>
                <PageTitleBar title={`${driverDetails.firstName} ${driverDetails.lastName}`} match={match}  />
                <RctCard>
                    <div
                        className="d-flex align-items-center py-5 justify-content-center mb-4 mt-2"
                    >
                        <div className="user-profile mt-2">
                            <img
                                src={require('Assets/avatars/user-15.jpg')}
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
                        {/*{activeTab === 2 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <Messages />*/}
                        {/*</TabContainer>}*/}
                        {/*{activeTab === 3 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <Address />*/}
                        {/*</TabContainer>}*/}
                    </div>
                </RctCard>
            </div>
        );
}

function mapDispatchToProps(dispatch) {
    return {
        getDrivers: () => dispatch(getDrivers()),
        changeDriverStatus: (id, status) => dispatch(changeDriverStatus(id, status)),
    };
}

const mapStateToProps = state => ({
    drivers: state.driver.drivers,
    loadingStatus: state.loading.loadingStatus
});

export default connect(mapStateToProps,mapDispatchToProps)(Driver)
