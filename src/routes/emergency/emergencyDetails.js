import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getSOSDetails} from "Actions/emergencyAction";
import {connect} from "react-redux";
import {calculatePostDate} from "Helpers/helpers";
import {Link} from "react-router-dom";



const EmergencyDetails = ({match, loading, sosDetails, getSOSDetails, sosUserDetails})=> {

    useEffect(() => {
      if(match.params.id){
          getSOSDetails(match.params.id, true)
      }
    },[match.params.id])


    return (
        <div style={{minHeight: '90vh'}}>
            <Helmet>
                <title>Driver Profile</title>
                <meta name="description" content="Driver Profile" />
            </Helmet>
            <PageTitleBar title={'Emergency details'} match={match}  />
            {!loading &&
            <div className="row" style={{fontSize: '0.8rem'}}>
                <div className="col-sm-6">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Name</strong></span>
                                    <Link
                                        to={sosDetails?.type === 'driver' ? `/admin/drivers/${sosUserDetails.auth_id}` : `/admin/passengers/${sosUserDetails?.auth_id}`}>{sosUserDetails?.first_name} {sosUserDetails?.last_name}</Link>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>User Type</strong></span>{sosDetails?.type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>User Phone number</strong></span>{sosDetails.user_phone_number}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Trip Id</strong></span>
                                    <Link to={`/admin/trips/${sosDetails?.trip_id}`}>{sosDetails.trip_id}</Link>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Address</strong></span>{sosDetails?.address}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Latitude</strong></span>{sosDetails?.latitude}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Longitude</strong></span>{sosDetails?.longitude}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Date/Time</strong></span>{calculatePostDate(sosDetails?.timestamp)}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            }
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getSOSDetails: (sos_id, spinner) => dispatch(getSOSDetails(sos_id, spinner)),
    };
}

const mapStateToProps = state => ({
    sosDetails: state.sos.sosDetails,
    sosUserDetails: state.sos.sosUserDetails,
    loading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (EmergencyDetails)
