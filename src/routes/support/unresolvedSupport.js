/**
 * Tickets
 */
import React, { useState, useEffect, Fragment } from 'react';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {connect} from "react-redux";
import {getSupportTickets, getSupportTicketsCount} from "Actions/supportAction";
import SupportTable from "Routes/support/components/supportTable";



const  UnresolvedSupport = ({match, getSupportTickets, getSupportTicketsCount}) => {

    useEffect(()=> {
        getSupportTickets(1, 5, true);
        getSupportTicketsCount(5)
    },[])



    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Tickets"} match={match} />
            <SupportTable support_type={5} header={'Unresolved Tickets'} />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getSupportTickets: (page_no, status, spinner) => dispatch(getSupportTickets(page_no, status, spinner)),
        getSupportTicketsCount: (status) => dispatch(getSupportTicketsCount(status)),
    };
}

const mapStateToProps = state => ({
    support: state.support.support,
    supportCount: state.support.supportCount,
    ticketTypes: state.ticketTypes.ticketTypes,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(UnresolvedSupport);
