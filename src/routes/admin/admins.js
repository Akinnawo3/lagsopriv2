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
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from "@material-ui/core/Button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,

} from 'reactstrap';
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {getAdmins} from "Actions/adminAction";
import {connect} from "react-redux";

// For Basic Table
let id = 0;

function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const  Admins = ({match, getAdmins, admins}) => {
    const [employeePayroll, setEmployeePayroll] = useState(null)
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [editUser, setEditUser] = useState(false)
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
    const inputEl = useRef(null);

    useEffect(()=> {
        getEmployeePayrolls();
        getAdmins();
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

    const opnAddNewUserEditModal = (e) => {
        e.preventDefault();
        setAddNewUserModal(true)
        setEditUser(true)
    }

    const onChangeAddNewUserDetails = (key, value) => {
        setAddNewUserDetail({...addNewUserDetail, [key]: value})
    }

    const onUpdateUserDetails = (key, value) => {
        setEditUser({...editUser, [key]: value})
    }

    const onAddUpdateUserModalClose = () => {
        setAddNewUserModal(false);
        setEditUser(false);
    }

    const onDelete = (data) => {
        inputEl.current.open();
    }


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Admins"} match={match} />
            <RctCollapsibleCard heading="Admins" fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New Admin <i className="zmdi zmdi-plus"></i></a>

                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive">
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Phone No</TableCell>
                                {/*<TableCell>Status</TableCell>*/}
                                {/*<TableCell>Date Created</TableCell>*/}

                                {/*<TableCell>Ratings</TableCell>*/}
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
                                                <Media body><h5 className="m-0 pt-15">{employee.employeeName}</h5></Media>
                                            </Media>
                                        </TableCell>
                                        <TableCell>Deo</TableCell>
                                        <TableCell>07032838025</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(e)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete()}><i className="ti-close"></i></button>
                                            {/*<button type="button" className="rct-link-btn"><i className="ti-eye"></i></button>*/}
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
                    {editUser ? 'Update Admin': 'Create New Admin'}
                </ModalHeader>
                <Form>
                    <ModalBody>
                                <FormGroup>
                                    <Label for="userName">First Name</Label>
                                    <Input type="text"  name="firstname"   required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="userName">Last Name</Label>
                                    <Input type="text"  name="lastname"  required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="userName">Phone no</Label>
                                    <Input type="text"  name="phoneno"  required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="userEmail">Email</Label>
                                    <Input type="email" name="email" required />
                                </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>

            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure Want To Delete?"
                message="This will delete user permanently."
                onConfirm={() => this.deleteUserPermanently()}
            />
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

export default connect( mapStateToProps, mapDispatchToProps) (Admins);
