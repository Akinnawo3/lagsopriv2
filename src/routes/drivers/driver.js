import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";
import { RctCard } from 'Components/RctCard';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import Profile from "Routes/users/user-profile-1/component/Profile";
import {getDrivers} from "Actions/driverAction";
import DriverProfile from "Routes/drivers/components/driverProfile";
import DriverRatings from "Routes/drivers/components/driverRatings";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

 const Driver  = ({location, match, getDrivers, drivers}) => {
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
    };
}

const mapStateToProps = state => ({
    drivers: state.driver.drivers,
});

export default connect(mapStateToProps,mapDispatchToProps)(Driver)
