import React from 'react';



const DriverProfile = ({driver})=> {

    return (
        <div className="row">
            <div className="col-sm-9">
                <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <ul className="list-group">
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>First name</strong></span>{driver.firstName? driver.firstName: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Last name</strong></span>{driver.lastName? driver.lastName: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>phone number</strong></span>{driver.phoneNo? '0' + driver.phoneNo.substr(4): 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Residential Address</strong></span>{driver.residentialAddress? driver.residentialAddress: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Email</strong></span>{driver.email? driver.email: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>State of Origin</strong></span>{driver.stateOfOrigin? driver.stateOfOrigin: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Date of birth</strong></span>{driver.dateOfBirth? driver.dateOfBirth: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Eye Glass</strong></span>{driver.eyeGlasses? driver.eyeGlasses: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Blood Group</strong></span>{driver.bloodGroup? driver.bloodGroup: 'not available'}
                            </li>
                            {(driver.facialMark && driver.facialMark == 0) && <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Facial Marks</strong></span>{driver.facialMark == 0? 'Yes': 'not available'}
                            </li>}
                            {(driver.facialMark && driver.facialMark == 1) && <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Facial Marks</strong></span>{driver.facialMark == 1? 'No': 'not available'}
                            </li>}
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Disability</strong></span>{driver.disability? driver.disability: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>license Number</strong></span>{driver.licenseNo? driver.licenseNo: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>NIN</strong></span>{driver.nin? driver.nin: 'not available'}
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>LASDRI ID</strong></span>{driver.lasdriId? driver.lasdriId: 'not available'}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default DriverProfile
