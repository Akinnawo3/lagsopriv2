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
// import IconButton from '@material-ui/core/IconButton';
import StarRatings from 'react-star-ratings';
// api
import api from 'Api';

// page title bar
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';

// intl messages
import IntlMessages from 'Util/IntlMessages';

// rct card box
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import ViewBtn from "Routes/drivers/components/viewBtn";
import UpdateUserForm from "Routes/users/user-management/UpdateUserForm";
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

const data = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const  Passengers = ({match}) => {
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
				<PageTitleBar title={"Passengers"} match={match} />
				<RctCollapsibleCard heading="All Passengers" fullBlock>
					<div className="float-right">
						<a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
						{/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
					</div>
					<div className="table-responsive">
						<Table>
							<TableHead>
								<TableRow hover>
									<TableCell>First Name</TableCell>
									<TableCell>Last Name</TableCell>
									<TableCell>Phone No</TableCell>
									<TableCell>Status</TableCell>
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
											{employee.status === 1 ?
												<TableCell><Badge color="success">Active</Badge></TableCell>
												: <TableCell><Badge color="danger">Inactive</Badge></TableCell>
											}
											{/*<TableCell>*/}
											{/*	<StarRatings*/}
											{/*		rating={2.403}*/}
											{/*		starRatedColor="red"*/}
											{/*		numberOfStars={5}*/}
											{/*		starDimension="18px"*/}
											{/*	/>*/}
											{/*</TableCell>*/}
											<TableCell>
												<ViewBtn />
												{/*<IconButton className="text-danger" aria-label="Add an alarm"><i className="zmdi zmdi-close"></i></IconButton>*/}
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

export default Passengers;
