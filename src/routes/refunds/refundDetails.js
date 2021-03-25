import React from 'react';
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";



const RefundDetails = ()=> {

    return (
        <div className="row" style={{fontSize: '0.8rem', minHeight: '90vh'}}>
            <div className="col-sm-6">
                <div className="tab-content">
                    <div className="tab-pane active" id="home">
                        <ul className="list-group">
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Name</strong></span> Mike Dean
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Phone No</strong></span>07034545654
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Email</strong></span>DFKJHH12
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Payment Ref</strong></span>ogogogogoog
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Amt to refund</strong></span>50
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Payment Method</strong></span>card
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>pick up location</strong></span>VI
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Drop off location</strong></span>Lekki
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Date/Time</strong></span>2021-04-04
                            </li>
                            <li className="list-group-item text-right"><span
                                className="pull-left"><strong>Reason fo refund</strong></span>A reason
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );

}

export default RefundDetails
