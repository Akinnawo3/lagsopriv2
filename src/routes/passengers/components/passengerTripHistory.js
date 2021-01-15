import React, {Fragment} from 'react';
import {Table, Badge} from 'reactstrap';
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

const PassengerTripHistory = ({passengers}) =>{

        return (
            <div className="table-responsive">
                <Table>
                    <TableHead>
                        <TableRow hover>
                            <TableCell>Trip Id</TableCell>
                            <TableCell>Pick Up</TableCell>
                            <TableCell>Drop Off</TableCell>
                            <TableCell>Booking Date/Time</TableCell>
                            <TableCell>Class</TableCell>
                            <TableCell>Type</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <Fragment>
                            {passengers && passengers.map((employee, key) => (
                                <TableRow hover key={key}>
                                    <TableCell>AD12</TableCell>
                                    <TableCell>Ajah</TableCell>
                                    <TableCell>
                                        Lekki
                                    </TableCell>
                                    <TableCell>
                                        5/12/2020 1:30pm
                                    </TableCell>
                                    <TableCell>
                                        A
                                    </TableCell>
                                    <TableCell>
                                        FDT
                                    </TableCell>
                                        <TableCell><Badge color="success">Completed</Badge></TableCell>
                                </TableRow>
                            ))}
                        </Fragment>
                    </TableBody>
                </Table>
            </div>
        );
}

export default PassengerTripHistory
