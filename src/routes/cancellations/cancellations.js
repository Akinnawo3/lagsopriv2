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
import Button from "@material-ui/core/Button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,

} from 'reactstrap';
import AddNewDriverForm from "Routes/drivers/components/addNewdriverForm";

// For Basic Table
let id = 0;

function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}


const  Cancellations = ({match}) => {
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
            <PageTitleBar title={"Cancellations"} match={match} />
            <RctCollapsibleCard heading="Cancellations" fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive">
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Trip Id</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>No of cancelled trips</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {employeePayroll && employeePayroll.map((employee, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>
                                            <Media>
                                                {/*<Media left>*/}
                                                {/*	<Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />*/}
                                                {/*</Media>*/}
                                                <Media body><h5 className="m-0 pt-15">AD12</h5></Media>
                                            </Media>
                                        </TableCell>
                                        <TableCell>Mike</TableCell>
                                        <TableCell>Dean</TableCell>
                                        <TableCell>10</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn text-primary"><i className="ti-eye"></i></button>

                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
            </RctCollapsibleCard>
            <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
                <ModalHeader toggle={() => onAddUpdateUserModalClose()}>
                    {editUser === null ?
                        'Add New Driver' : 'Update User'
                    }
                </ModalHeader>
                <ModalBody>
                    {editUser === null ?
                        <AddNewDriverForm
                            addNewUserDetails={addNewUserDetail}
                            onChangeAddNewUserDetails={onChangeAddNewUserDetails}
                        />
                        : <UpdateUserForm user={editUser} onUpdateUserDetail={onUpdateUserDetails} />
                    }
                </ModalBody>
                <ModalFooter>
                    {editUser === null ?
                        <Button variant="contained" className="text-white btn-success">Add</Button>
                        : <Button variant="contained" color="primary" className="text-white" onClick={() => this.updateUser()}>Update</Button>
                    }
                    {' '}
                    <Button variant="contained" className="text-white btn-danger" onClick={() => onAddUpdateUserModalClose()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}

export default Cancellations;
