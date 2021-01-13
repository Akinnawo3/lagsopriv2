import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge } from 'reactstrap';
import StarRatings from 'react-star-ratings';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Spinner from "../../spinner/Spinner";
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import ViewBtn from "Routes/drivers/components/viewBtn";
import Button from "@material-ui/core/Button";
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {createDriver, getDrivers, toggleDriverModalCreate} from "Actions/driverAction";
import {getVehicles} from "Actions/vehicleAction";
import Upload from "Routes/drivers/components/upload";
import { CSVLink } from "react-csv";
import { saveAs } from 'file-saver';
import {Link} from "react-router-dom";
// import DownloadLink from "react-download-link";
// import chargeSample from '../../assets/csv/drivers.xlsx';






const  Drivers = ({match,getDrivers, drivers, createDriver, isLoading, getVehicles, vehicles}) => {
	const [addNewUserModal, setAddNewUserModal] = useState(false)
	const [addNewUserModal1, setAddNewUserModal1] = useState(false)
	const [editUser, setEditUser] = useState(null)
	const [downloadDrivr, setDownloadDrivr] = useState([])
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
			firstname: "", lastname: "", residentialaddress: "", email: "", phoneno: ""
		});
		setAddNewUserModal(false)
	};


	useEffect(()=> {
	getDrivers();
	getVehicles()
	},[])


	const opnAddNewUserModal = (e) => {
		e.preventDefault();
		setAddNewUserModal(true)
	}

	const opnAddNewUserModal1 = (e) => {
		e.preventDefault();
		setAddNewUserModal1(true)
	}

	const onAddUpdateUserModalClose = () => {
		setAddNewUserModal(false);
		setEditUser(null);
	}
	const onAddUpdateUserModalClose1 = () => {
		setAddNewUserModal1(false);
	}

	const newDriver = drivers.map(driver=> {
		if(driver) {
			delete driver.timestamp
			delete driver.updateTimestamp
			delete driver.acceptTimestamp
			delete driver.approvedTimestamp
		}
		return driver
	})

	const onFileSave = ()=> {
		saveAs("/files/about-1.png", "image.png");
	}

	return (
			<div className="table-wrapper">
				<PageTitleBar title={"Drivers"} match={match} />
				{isLoading && <Spinner />}
				{!isLoading &&
				<RctCollapsibleCard heading="All Drivers" fullBlock>
					<div className="float-right">
						<CSVLink
							// headers={headers}
							data={newDriver}
							filename={"my-file.csv"}
							className="btn-sm btn-outline-default mr-10"
							target="_blank"
						>
							Export to Excel
						</CSVLink>
						{/*<DownloadLink*/}
						{/*	label="Save"*/}
						{/*	filename="myfile.xlsx"*/}
						{/*	exportFile={() => "src/assets/csv/drivers.xlsx"}*/}
						{/*/>*/}
						{/*<Button><a href={chargeSample} download="your file name">Download</a></Button>*/}
						<a onClick={onFileSave}>download </a>
						{/*<a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>*/}
						{/*<Link to="/files/about-1.png" target="_blank" download>Download</Link>*/}
						{/*<a href={'Assets/img/about-1.png'} target="_blank" rel="noopener noreferrer" download="My_File.png">*/}
						{/*	<Button>*/}
						{/*		<i className="fas fa-download"/>*/}
						{/*		Download File*/}
						{/*	</Button>*/}
						{/*</a>*/}

						<a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10">Upload <i className="fa fa-upload" aria-hidden="true"></i></a>
						<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>
					</div>
					<div className="table-responsive">
						<Table>
							<TableHead>
								<TableRow hover>
									<TableCell>First Name</TableCell>
									<TableCell>Last Name</TableCell>
									{/*<TableCell>Phone No</TableCell>*/}
									<TableCell>Status</TableCell>
									<TableCell>Ratings</TableCell>
									<TableCell>App Status</TableCell>
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
											{/*<TableCell>{driver.phoneNo}</TableCell>*/}
											{driver.status == 1 &&
												<TableCell><Badge color="success">Active</Badge></TableCell>
											}
											{driver.status == 0 &&
												 <TableCell><Badge color="warning">Pending</Badge></TableCell>
											}
											{driver.status == 4 &&
											<TableCell><Badge color="danger">Inactive</Badge></TableCell>
											}
											{driver.status == 2 &&
											<TableCell><Badge color="primary">Verified</Badge></TableCell>
											}
											<TableCell>
												<StarRatings
													rating={0}
													starRatedColor="red"
													numberOfStars={5}
													starDimension="18px"
												/>
											</TableCell>
											{driver.appStatus == 0 &&
											<TableCell><Badge color="danger">Offline</Badge></TableCell>
											}
											{driver.appStatus == 1 &&
											<TableCell><Badge color="success">Online</Badge></TableCell>
											}
											<TableCell>
												<ViewBtn driver={driver} vehicles={vehicles} />
												{/*<IconButton className="text-danger" aria-label="Add an alarm"><i className="zmdi zmdi-close"></i></IconButton>*/}
											</TableCell>
										</TableRow>
									))}
								</Fragment>
							</TableBody>
						</Table>
					</div>
				</RctCollapsibleCard>}
				<Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
					<ModalHeader toggle={() => onAddUpdateUserModalClose()}>
							Add New Driver
					</ModalHeader>
					<Form onSubmit={onSubmit}>
					<ModalBody>

							<div className="row">
								<div className="col-sm-6">
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
									<FormGroup>
										<Label for="userName">LASDRI ID</Label>
										<Input type="text" name="residentialaddress" onChange={onChange} value={residentialaddress} required />

									</FormGroup>
								</div>
								<div className="col-sm-6">
									<FormGroup>
										<Label for="userName">State of Origin</Label>
										<Input type="text"  name="firstname" onChange={onChange} value={firstname}  required/>
									</FormGroup>
									<FormGroup>
										<Label for="userName">Date of birth</Label>
										<Input type="text"  name="lastname" onChange={onChange} value={lastname} required />
									</FormGroup>
									<FormGroup>
										<Label for="userName">Eye Glass</Label>
										<Input type="text"  name="phoneno" onChange={onChange} value={phoneno} required />
									</FormGroup>
									<FormGroup>
										<Label for="userEmail">Blood Group</Label>
										<Input type="email" name="email" onChange={onChange} value={email} required />
									</FormGroup>
									<FormGroup>
										<Label for="userName">license Number</Label>
										<Input type="text" name="residentialaddress" onChange={onChange} value={residentialaddress} required />

									</FormGroup>
									<FormGroup>
										<Label for="userName">NIN</Label>
										<Input type="text" name="residentialaddress" onChange={onChange} value={residentialaddress} required />

									</FormGroup>
								</div>
							</div>

					</ModalBody>
					<ModalFooter>
							<Button type="submit" variant="contained" className="text-white btn-success">Add</Button>
					</ModalFooter>
				</Form>
				</Modal>
				<Modal isOpen={addNewUserModal1} toggle={() => onAddUpdateUserModalClose1()}>
					<ModalHeader toggle={() => onAddUpdateUserModalClose1()}>
						Upload Drivers
					</ModalHeader>
						<ModalBody>
							<Upload oncloseModal={onAddUpdateUserModalClose1} />
						</ModalBody>
						{/*<ModalFooter>*/}
						{/*	<Button type="submit" variant="contained" className="text-white btn-success">Add</Button>*/}
						{/*</ModalFooter>*/}
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
		getVehicles: () => dispatch(getVehicles()),

	};
}


const mapStateToProps = state => ({
	driverModalCreate: state.driver.DriverModalCreate,
	drivers: state.driver.drivers,
	driver: state.driver.driver,
	error: state.driver.error,
	isLoading: state.driver.isLoading,
	vehicles: state.vehicle.vehicles,



});

export default connect( mapStateToProps, mapDispatchToProps) (Drivers);
