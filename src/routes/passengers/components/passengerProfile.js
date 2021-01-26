import React from 'react';
import { Badge } from 'reactstrap';
import PaymentsChart from "Routes/passengers/components/paymentsChart";
import TripsChart from "Routes/passengers/components/tripsChart";



const PassengerProfile = ({passenger})=> {

    return (
        <div className="row">
            <div className="col-sm-6">
                <div className="tab-content px-4">
                    <div className="tab-pane active" id="home">
                        <ul className="list-group">
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>First name</strong></span>{passenger.firstName}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Last name</strong></span>{passenger.lastName}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>phone number</strong></span>{passenger.phoneNumber}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Email</strong></span>{passenger.email}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>home Location</strong></span>{passenger.homeLocation}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>home Pickup Time</strong></span>{passenger.homePickupTime}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>work Location</strong></span>{passenger.workLocation}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>work Pickup Time</strong></span>{passenger.workPickupTime}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>payment Method</strong></span>{passenger.paymentMethod}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Created</strong></span>{passenger.timestamp? new Date(passenger.timestamp).toLocaleString() : ''}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Status</strong></span>
                                {passenger.phoneNumberStatus ===1 && <Badge color="success">Active</Badge>}
                                {passenger.phoneNumberStatus ===0 && <Badge color="danger">Inactive</Badge>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 d-flex flex-column justify-content-between">
                <PaymentsChart />
                <TripsChart />
            </div>

        </div>
    );

}

export default PassengerProfile
