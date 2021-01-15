/**
 * Basic Table
 */
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge } from 'reactstrap';
import api from 'Api';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';




const  Payments = ({match}) => {
    const [employeePayroll, setEmployeePayroll] = useState(null)
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [editUser, setEditUser] = useState(null)
    const [addNewUserDetail, setAddNewUserDetail] = useState({
        id: '',
        name: '',
        avatar: '',
        type: '',
        emailAddress: '',
        status: 'Active',
        lastSeen: '',
        accountType: '',
        badgeClass: 'badge-success',
        dateCreated: 'Just Now',
        checked: false
    })

    useEffect(()=> {
        getEmployeePayrolls();
    },[])



    // get employee payrols
    const getEmployeePayrolls = () => {
        api.get('employeePayrols.js')
            .then((response) => {
                setEmployeePayroll(response.data)
            })
            .catch(error => {
                // error handling
            })
    }

    const opnAddNewUserModal = (e) => {
        e.preventDefault();
        setAddNewUserModal(true)
    }

    const onChangeAddNewUserDetails = (key, value) => {
        setAddNewUserDetail({...addNewUserDetail, [key]: value})
    }

    const onUpdateUserDetails = (key, value) => {
        setEditUser({...editUser, [key]: value})
    }

    const onAddUpdateUserModalClose = () => {
        setAddNewUserModal(false);
        setEditUser(null);
    }


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Payments"} match={match} />
            <RctCollapsibleCard heading="Payments" fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive">
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Name</TableCell>
                                <TableCell>Phone No</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Payment Ref</TableCell>
                                <TableCell>Normal Amt</TableCell>
                                <TableCell>Discount Amt</TableCell>
                                <TableCell>Actual Amt paid</TableCell>
                                <TableCell>Payment Method</TableCell>
                                <TableCell>Date/time</TableCell>
                                <TableCell>Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {employeePayroll && employeePayroll.map((employee, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>Mike Dean</TableCell>
                                        <TableCell>07032838025</TableCell>
                                        <TableCell>zeno@gmail.com</TableCell>
                                        <TableCell>derg98788r738r33r</TableCell>
                                        <TableCell>₦500</TableCell>
                                        <TableCell>₦100</TableCell>
                                        <TableCell>₦400</TableCell>
                                        <TableCell>Card</TableCell>
                                        <TableCell>5/12/2020 1:30pm</TableCell>
                                        <TableCell><Badge color="success">Successful</Badge></TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
            </RctCollapsibleCard>
        </div>
    );

}

export default Payments;
