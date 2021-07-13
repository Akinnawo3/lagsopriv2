import React from 'react';
import { Badge } from 'reactstrap';
import {calculatePostDate} from "Helpers/helpers";


const PassengerProfile = ({passenger})=> {
    return (
        <div className="row" style={{fontSize: '0.8rem'}}>
            <div className="col-sm-6">
                <div className="tab-content px-4">
                    <div className="tab-pane active" id="home">
                        <ul className="list-group">
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>First name</strong></span>{passenger?.first_name}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Last name</strong></span>{passenger?.last_name}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Phone number</strong></span>{passenger?.phone_number}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Email</strong></span>{passenger?.email}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>home Location</strong></span>{passenger?.home_address}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>home Area</strong></span>{passenger?.home_area}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>work Location</strong></span>{passenger?.work_address}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Work Area</strong></span>{passenger?.work_area}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Registration Date</strong></span>{calculatePostDate(passenger.createdAt)}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default PassengerProfile
