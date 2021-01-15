import React, {Fragment} from 'react';
import {Table, Badge} from 'reactstrap';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const PassengerPaymentHistory = ({passengers}) =>{

        return (
            <div className="table-responsive">
                <Table>
                    <TableHead>
                        <TableRow hover>
                            <TableCell>Payment Ref</TableCell>
                            <TableCell>Actual Amt paid</TableCell>
                            <TableCell>Payment Method</TableCell>
                            <TableCell>Date/time</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Fragment>
                            {passengers && passengers.map((employee, key) => (
                                <TableRow hover key={key}>
                                    <TableCell>derg98788r738r33r</TableCell>
                                    <TableCell>₦500</TableCell>
                                    <TableCell>Card</TableCell>
                                    <TableCell>5/12/2020 1:30pm</TableCell>
                                    <TableCell><Badge color="success">Successful</Badge></TableCell>
                                </TableRow>
                            ))}
                        </Fragment>
                    </TableBody>
                </Table>
            </div>
        );
}

export default PassengerPaymentHistory
