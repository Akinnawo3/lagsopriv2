import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";
import { RctCard } from 'Components/RctCard';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {getPassengers} from "Actions/passengerActions";
import PassengerProfile from "Routes/passengers/components/passengerProfile";
import PassengerTripHistory from "Routes/passengers/components/passengerTripHistory";
import Spinner from "../../spinner/Spinner";
import PassengerPaymentHistory from "Routes/passengers/components/passengerPaymentHistory";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

 const Passenger  = ({location, match, getPassengers, passengers, loading}) => {
    const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 0);
    const [passengerDetails, setPassengerDetails] = useState({});

  const  handleChange = (event, value) => {
        setActiveTab(value)
    }

    useEffect(()=> {
        getPassengers()
    },[])

     useEffect(()=> {
         if (passengers && match.params.id){
             passengers.map(passenger=> {
                 if(passenger.id == match.params.id){
                    setPassengerDetails(passenger)
                 }
             })
         }
     },[passengers, match.params.id])


        return (
            <div className="userProfile-wrapper">
                <Helmet>
                    <title>User Profile</title>
                    <meta name="description" content="User Profile" />
                </Helmet>
                {passengerDetails.firstName ?
                    <PageTitleBar title={`${passengerDetails.firstName} ${passengerDetails.lastName}`} match={match}  /> :
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
                            <PassengerTripHistory passengers={passengers}/>
                        </TabContainer>}
                        {activeTab === 2 &&
                        <TabContainer>
                           <PassengerPaymentHistory  passengers={passengers}/>
                        </TabContainer>}
                        {/*{activeTab === 3 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <Address />*/}
                        {/*</TabContainer>}*/}
                    </div>
                </RctCard>
                }
            </div>
        );
}

function mapDispatchToProps(dispatch) {
    return {
        getPassengers: () => dispatch(getPassengers()),
    };
}

const mapStateToProps = state => ({
    passengers: state.passenger.passengers,
    loading: state.loading.loading
});

export default connect(mapStateToProps,mapDispatchToProps)(Passenger)
