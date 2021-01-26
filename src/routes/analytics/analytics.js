import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge } from 'reactstrap';
import api from 'Api';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {getAdmins} from "Actions/adminAction";
import {connect} from "react-redux";
import StarRatings from "react-star-ratings";




const  Analytics = ({match}) => {

    return (
        <div className="table-wrapper">
            {/*<PageTitleBar title={"Support"} match={match} />*/}
            {/*<RctCollapsibleCard heading="Support" fullBlock>*/}
            <div className="float-right">
                {/*<a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>*/}
            </div>
            <div className="table-responsive">
                <div className="d-flex align-items-center justify-content-center" style={{height: '80vh'}}>
                    Page Under Construction
                </div>
            </div>
            {/*</RctCollapsibleCard>*/}
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getAdmins: () => dispatch(getAdmins()),
    };
}

const mapStateToProps = state => ({
    admins: state.admins.admins,
    isLoading: state.admins.isLoading,



});

export default connect( mapStateToProps, mapDispatchToProps) (Analytics);
