import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge } from 'reactstrap';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Spinner from "../../spinner/Spinner";
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";
import {Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {createVehicle, getVehicles} from "Actions/vehicleAction";
import ViewBtn from "Routes/vehicles/components/viewBtn";






const  ActiveVehicles = ({match,getVehicles, vehicles, isLoading, createVehicle}) => {
	const [addNewUserModal, setAddNewUserModal] = useState(false)
	const [editUser, setEditUser] = useState(null)
	const [formData, setFormData] = useState({vehicle_make: "", vehicle_model: "",  plate_number: ""});

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const {
		vehicle_make, vehicle_model,  plate_number
	} = formData;

	const onSubmit = async (e) => {
		e.preventDefault();
		createVehicle(vehicle_make, vehicle_model,  plate_number);
		setFormData({
			vehicle_make: "", vehicle_model: "",  plate_number: ""
		});
		setAddNewUserModal(false)
	};


	useEffect(()=> {
	getVehicles()
	},[])



	const opnAddNewUserModal = (e) => {
		e.preventDefault();
		setAddNewUserModal(true)
	}



	const onAddUpdateUserModalClose = () => {
		setAddNewUserModal(false);
		setEditUser(null);
	}

	return (
			<div className="table-wrapper">
				<PageTitleBar title={"Vehicles"} match={match} />
				{isLoading && <Spinner />}
				{!isLoading &&
				<RctCollapsibleCard heading="All Vehicles" fullBlock>
					<div className="float-right">
						<a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
						<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Vehicle <i className="zmdi zmdi-plus"></i></a>
					</div>
					<div className="table-responsive">
						<Table>
							<TableHead>
								<TableRow hover>
									<TableCell>Vehicle Make</TableCell>
									<TableCell>Vehicle Model</TableCell>
									<TableCell>Plate Number</TableCell>
									<TableCell>Status</TableCell>
									{/*<TableCell>Ratings</TableCell>*/}
									{/*<TableCell>App Status</TableCell>*/}
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<Fragment>
									{vehicles && vehicles.filter(vehicle=> vehicle.status == 1).sort((a, b) => parseFloat(b.id) - parseFloat(a.id)).map((vehicle, key) => (
										<TableRow hover key={key}>
											<TableCell>
												<Media>
													{/*<Media left>*/}
													{/*	<Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />*/}
													{/*</Media>*/}
													<Media body><h5 className="m-0 pt-15">{vehicle.vehicle_make}</h5></Media>
												</Media>
											</TableCell>
											<TableCell>{vehicle.vehicle_model}</TableCell>
											{/*<TableCell>{driver.phoneNo}</TableCell>*/}
											<TableCell>
												{vehicle.plate_number}
											</TableCell>
											{vehicle.status == 1 &&
											<TableCell><Badge color="success">Active</Badge></TableCell>
											}
											{vehicle.status == 2 &&
											<TableCell><Badge color="danger">Inactive</Badge></TableCell>
											}
											<TableCell>
												<ViewBtn vehicle={vehicle} />
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
						add vehicle
					</ModalHeader>
					<Form onSubmit={onSubmit}>
					<ModalBody>

							<FormGroup>
								<Label for="userName">Vehicle Make</Label>
								<Input type="text"  name="vehicle_make" onChange={onChange} value={vehicle_make}  required/>
							</FormGroup>
							<FormGroup>
								<Label for="userName">Vehicle Model</Label>
								<Input type="text"  name="vehicle_model" onChange={onChange} value={vehicle_model} required />
							</FormGroup>
							<FormGroup>
								<Label for="userName">Plate no</Label>
								<Input type="text"  name="plate_number" onChange={onChange} value={plate_number} required />
							</FormGroup>

					</ModalBody>
					<ModalFooter>
							<Button type="submit" variant="contained" className="text-white btn-success">Add</Button>
					</ModalFooter>
				</Form>
				</Modal>
			</div>
		);

}

function mapDispatchToProps(dispatch) {
	return {
		getVehicles: () => dispatch(getVehicles()),
		createVehicle: (vehicle_make, vehicle_model, plate_number) =>
			dispatch(createVehicle(vehicle_make, vehicle_model,  plate_number)),
	};
}

const mapStateToProps = state => ({
	vehicles: state.vehicle.vehicles,
	isLoading: state.vehicle.isLoading,

});

export default connect( mapStateToProps, mapDispatchToProps) (ActiveVehicles);
