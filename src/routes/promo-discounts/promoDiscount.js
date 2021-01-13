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

const  PromoDiscounts = ({match, getAdmins, admins}) => {
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
            <PageTitleBar title={"Promo & Discounts"} match={match} />
            <RctCollapsibleCard heading="Promo & Discounts" fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New Promo <i className="zmdi zmdi-plus"></i></a>

                    {/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
                </div>
                <div className="table-responsive">
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Name</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Code</TableCell>
                                <TableCell>User Limit</TableCell>
                                <TableCell>Usage Limit</TableCell>
                                <TableCell>Expire Date</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {employeePayroll && employeePayroll.map((employee, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>Awoof Ride</TableCell>
                                        <TableCell>Flat</TableCell>
                                        <TableCell>AWO123</TableCell>
                                        <TableCell>100</TableCell>
                                        <TableCell>1</TableCell>
                                        <TableCell>12-01-2023</TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
            </RctCollapsibleCard>
            <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
                <ModalHeader toggle={() => onAddUpdateUserModalClose()}>
                    Add New Promo or Discount
                </ModalHeader>
                <Form>
                    <ModalBody>
                                <FormGroup>
                                    <Label for="userName">Name</Label>
                                    <Input type="text"  name="firstname"   required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="userName">Type</Label>
                                    <Input type="select"  name="lastname"  required>
                                        <option>Select Type</option>
                                        <option>Flat</option>
                                        <option>Percentile</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="userName">Code</Label>
                                    <Input type="text"  name="phoneno"  required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="userEmail">User Limit</Label>
                                    <Input type="number" name="email" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="userEmail">Usage Limit</Label>
                                    <Input type="number" name="email" required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="userEmail">Expire Date</Label>
                                    <Input type="date" name="email" required />
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

export default connect( mapStateToProps, mapDispatchToProps) (PromoDiscounts);
