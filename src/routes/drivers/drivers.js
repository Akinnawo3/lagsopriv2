/**
 * Basic Table
 */
import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
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
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Spinner from "../../spinner/Spinner";

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
import {createDriver, getDrivers, toggleDriverModalCreate} from "Actions/driverAction";

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

const  Drivers = ({match,getDrivers, drivers, createDriver, isLoading}) => {
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
	const [formData, setFormData] = useState({
		firstname: "", lastname: "", residentialaddress: "", email: "", phoneno: ""
	});



	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });


	const {
		firstname, lastname, residentialaddress, email, phoneno
	} = formData;

	const onSubmit = async (e) => {
		e.preventDefault();
		createDriver( firstname, lastname, residentialaddress, email, phoneno);
		setFormData({
			firstname: "", lastname: "", residentialaddress: "", email: "", phoneno: "", status: "0", pin: "", bankname: "", accountname: "", accountnumber: "", zone: "", area: "", route: "", geofencedarea: "", appstatus: ""
		});
		setAddNewUserModal(false)
	};


	useEffect(()=> {
	getDrivers()
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
				<PageTitleBar title={"Drivers"} match={match} />
				<RctCollapsibleCard heading="All Drivers" fullBlock>
					<div className="float-right">
						<a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
						<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>
					</div>
					{isLoading && <Spinner />}
					{!isLoading &&
					<div className="table-responsive">
						<Table>
							<TableHead>
								<TableRow hover>
									<TableCell>First Name</TableCell>
									<TableCell>Last Name</TableCell>
									<TableCell>Phone No</TableCell>
									<TableCell>Status</TableCell>
									<TableCell>Ratings</TableCell>
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<Fragment>
									{drivers && drivers.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((driver, key) => (
										<TableRow hover key={key}>
											<TableCell>
												<Media>
													{/*<Media left>*/}
													{/*	<Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />*/}
													{/*</Media>*/}
													<Media body><h5 className="m-0 pt-15">{driver.firstName}</h5></Media>
												</Media>
											</TableCell>
											<TableCell>{driver.lastName}</TableCell>
											<TableCell>{driver.phoneNo}</TableCell>
											{driver.status === 1 ?
												<TableCell><Badge color="success">Active</Badge></TableCell>
												: <TableCell><Badge color="warning">Pending</Badge></TableCell>
											}
											<TableCell>
												<StarRatings
													rating={0}
													starRatedColor="red"
													numberOfStars={5}
													starDimension="18px"
												/>
											</TableCell>
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
					}
				</RctCollapsibleCard>
				<Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
					<ModalHeader toggle={() => onAddUpdateUserModalClose()}>
						{editUser === null ?
							'Add New Driver' : 'Update User'
						}
					</ModalHeader>
					<Form onSubmit={onSubmit}>
					<ModalBody>

							<FormGroup>
								<Label for="userName">First Name</Label>
								<Input type="text"  name="firstname" onChange={onChange} value={firstname}  required/>
							</FormGroup>
							<FormGroup>
								<Label for="userName">Last Name</Label>
								<Input type="text"  name="lastname" onChange={onChange} value={lastname} required />
							</FormGroup>
							<FormGroup>
								<Label for="userName">Phone no</Label>
								<Input type="text"  name="phoneno" onChange={onChange} value={phoneno} required />
							</FormGroup>
							<FormGroup>
								<Label for="userEmail">Email</Label>
								<Input type="email" name="email" onChange={onChange} value={email} required />
							</FormGroup>
							<FormGroup>
								<Label for="userName">Residential Address</Label>
								<Input type="text" name="residentialaddress" onChange={onChange} value={residentialaddress} required />

							</FormGroup>

					</ModalBody>
					<ModalFooter>
							<Button type="submit" variant="contained" className="text-white btn-success">Add</Button>
							{/*: <Button variant="contained" color="primary" className="text-white" onClick={() => this.updateUser()}>Update</Button>*/}

						{' '}
						{/*<Button variant="contained" className="text-white btn-danger" onClick={() => onAddUpdateUserModalClose()}>Cancel</Button>*/}
					</ModalFooter>
				</Form>
				</Modal>
			</div>
		);

}

function mapDispatchToProps(dispatch) {
	return {
		getDrivers: () => dispatch(getDrivers()),
		toggleDriverModalCreate: () => dispatch(toggleDriverModalCreate()),
		createDriver: (firstname, lastname, residentialaddress, email, phoneno) =>
			dispatch(createDriver(firstname, lastname, residentialaddress, email, phoneno)),

	};
}


const mapStateToProps = state => ({
	driverModalCreate: state.driver.DriverModalCreate,
	drivers: state.driver.drivers,
	driver: state.driver.driver,
	error: state.driver.error,
	isLoading: state.driver.isLoading,



});

export default connect( mapStateToProps, mapDispatchToProps) (Drivers);
