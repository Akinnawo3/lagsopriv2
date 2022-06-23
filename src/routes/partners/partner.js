import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Helmet } from "react-helmet";
import { RctCard } from 'Components/RctCard';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import PartnerProfile from "Routes/partners/components/partnerProfile";
import {getPartner, getPartnerDriverCount} from "Actions/partnersAction";
import {getFees} from "Actions/feesAction";
import {getCustomerCare} from "Actions/customerCareAction";

// For Tab Content
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

 const Partner  = (props) => {

   const  {
       location,
       match,
       partnerDetails,
       loading,
       getPartner,
       getPartnerDriverCount,
       getCustomerCare
   } = props

    const [activeTab, setActiveTab] = useState(location.state ? location.state.activeTab : 0);

   const  handleChange = (event, value) => {
        setActiveTab(value)
    }

    useEffect(()=> {
         if (match?.params?.id){
             getPartner(match?.params?.id)
             getPartnerDriverCount(match?.params?.id)
             getCustomerCare()
         }
     },[match?.params?.id])


        return (
            <div className="userProfile-wrapper">
                <Helmet>
                    <title>User Profile</title>
                    <meta name="description" content="User Profile" />
                </Helmet>
                    <PageTitleBar title={!loading && partnerDetails?.first_name ? `${partnerDetails?.first_name} ${partnerDetails?.last_name}`: ''} match={match}  />

                {!loading &&
                <RctCard>
                    <div
                        className="d-flex align-items-center py-5 justify-content-center mb-4 mt-2"
                    >
                        {!loading && partnerDetails?.avatar ?
                            <img
                                src={partnerDetails?.avatar}
                                alt="user profile"
                                className="rounded-circle"
                                width="200"
                                height="200"
                            />:
                            <div className='d-flex align-items-center justify-content-center' style={{width: '200px', height: '200px', borderRadius: '100px', backgroundColor: 'lightblue'}} >
                                <div style={{fontSize: '50px', color: 'white'}}>
                                    {partnerDetails?.first_name?.charAt(0)}
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
                                {/*<Tab*/}
                                {/*    icon={<i className="icon-graph"></i>}*/}
                                {/*    label={"Trip History"}*/}
                                {/*/>*/}
                                {/*<Tab*/}
                                {/*    icon={<i className="icon-star"></i>}*/}
                                {/*    label={"Ratings"}*/}
                                {/*/>*/}
                                {/*<Tab*/}
                                {/*    icon={<i className="icon-credit-card"></i>}*/}
                                {/*    label={"Wallet History"}*/}
                                {/*/>*/}
                                {/*<Tab*/}
                                {/*    icon={<i className="icon-credit-card"></i>}*/}
                                {/*    label={"Trip Payment History"}*/}
                                {/*/>*/}
                            </Tabs>
                        </AppBar>
                        {activeTab === 0 &&
                        <TabContainer>
                            <PartnerProfile partnerDetails={partnerDetails} id={match?.params?.id}/>
                        </TabContainer>}
                        {/*{activeTab === 1 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <PassengerTripHistory passenger_id={match.params.id} />*/}
                        {/*</TabContainer>}*/}
                        {/*{activeTab === 2 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <PassengerRatings auth_id={match.params.id} />*/}
                        {/*</TabContainer>}*/}
                        {/*{activeTab === 3 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <Wallets auth_id={match.params.id} wallets={wallets} wallet={wallet} walletsCount={walletsCount} />*/}
                        {/*</TabContainer>}*/}
                        {/*{activeTab === 4 &&*/}
                        {/*<TabContainer>*/}
                        {/*    <PaymentsComponent auth_id={match.params.id} payments={payments}  paymentsCount={paymentsCount} />*/}
                        {/*</TabContainer>}*/}
                    </div>
                </RctCard>
                }
            </div>
        );
}

function mapDispatchToProps(dispatch) {
    return {
        getPartner: (id) => dispatch(getPartner(id)),
        getPartnerDriverCount: (partner_id, start_date, end_date ) => dispatch(getPartnerDriverCount(partner_id, start_date, end_date )),
        getCustomerCare: (spinner) => dispatch(getCustomerCare(spinner)),


    };
}

const mapStateToProps = state => ({
    loading: state.loading.loading,
    partnerDetails: state.partners.partner,
});

export default connect(mapStateToProps,mapDispatchToProps)(Partner)
