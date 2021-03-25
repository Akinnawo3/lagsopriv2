import React, { useState, useEffect, Fragment } from 'react';
import { connect } from "react-redux";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import StarRatings from 'react-star-ratings';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import Spinner from "../../spinner/Spinner";
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import ViewBtn from "Routes/drivers/components/viewBtn";
import Button from "@material-ui/core/Button";
import {createDrivers, getDrivers, getDrivers2} from "Actions/driverAction";
import Upload from "Routes/drivers/components/upload";
import { CSVLink } from "react-csv";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import Pagination from "react-js-pagination";
import state from "Assets/data/state/state";
import bloodgroup from "Assets/data/bloodgroup/bloodgroup";
import {getVehicles} from "Actions/vehicleAction";
import LinearProgress from "@material-ui/core/LinearProgress";


const  VerifiedDrivers = ({match,getDrivers, drivers, createDrivers, isLoading, getVehicles, vehicles, getDrivers2, loadingStatus}) => {
	const [addNewUserModal, setAddNewUserModal] = useState(false)
	const [addNewUserModal1, setAddNewUserModal1] = useState(false)
	const [editUser, setEditUser] = useState(null)
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		residentialAddress: "",
		email: "",
		phoneNo: "",
		lasdriId: "",
		education: '',
		dateOfBirth: '',
		eyeGlass: '',
		bloodGroup: '',
		licenseNumber: '',
		NIN: ''
	});
	const [searchData, setSearchData] = useState('')
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
	const [excelExport, setExcelExport] = useState([])

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const {
		firstName,
		lastName,
		residentialAddress,
		email,
		phoneNo,
		lasdriId,
		stateOfOrigin,
		education,
		eyeGlass,
		bloodGroup,
		licenseNumber,
		NIN,
	} = formData;

	const onSubmit = async (e) => {
		e.preventDefault();
		await createDrivers( firstName, lastName, email, '+234' + phoneNo.substr(1) , licenseNumber, stateOfOrigin, eyeGlass, lasdriId, bloodGroup, education);
		setFormData({
			firstName: "",
			lastname: "",
			residentialAddress: "",
			email: "",
			phoneNo: "",
			lasdriId: "",
			stateOfOrigin: '',
			education: '',
			eyeGlass: '',
			bloodGroup: '',
			licenseNumber: '',
			NIN: ''
		});
		setAddNewUserModal(false)
	};


	useEffect(()=> {
		getDrivers();
		getVehicles();
	},[])

	const paginate = pageNumber => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0);
	};

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

	const onChangeSearch = (e) =>{
		e.preventDefault();
		setSearchData(e.target.value );
	};

	useEffect(()=> {
		if(searchData && drivers){
			setCurrentPage(1)
			const search = drivers.filter(driver => {
				return (driver.firstName.toLowerCase().includes(searchData.toLowerCase()) || driver.lastName.toLowerCase().includes(searchData.toLowerCase()))
			});
			setPosts(search)
		} else if(searchData === "") {
			setPosts(drivers.filter((user) => user.status === 1).sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		}
	},[searchData]);

	useEffect(()=> {
		if(drivers) {
			setPosts(drivers.filter((user) => user.status === 1).sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
			let result = drivers.map(driver=> {
				return {
					firstName: driver['firstName'],
					lastName: driver['lastName'],
					phoneNumber: driver['phoneNumber'],
					email: driver['email'],
					bloodGroup: driver['bloodGroup'],
					bankName:driver['bankName'],
					accountName: driver['accountName'],
					accountNo: driver['accountNo'],
					dateOfBirth: driver['dateOfBirth'],
					disability: driver['disability'],
					education:driver['education'],
					eyeGlasses: driver['eyeGlasses'],
					facialMark: driver['facialMark'],
					rating: driver['rating'],
					stateOfOrigin: driver['stateOfOrigin']
				}
			})
			setExcelExport(result)
		}
	},[drivers])

	const sampleData = [
		{
			firstName: 'John',
			lastName: 'Deo',
			email: 'jofvbdssqehsfdddwedhpdsddndeo@gmail.com',
			phoneNumber: "11232314320345678989"
		},
		{
			firstName: 'Johnd',
			lastName: 'Deo',
			email: 'jowwwhasaxfwsddwddwsddsddndeo@gmail.com',
			phoneNumber: "2222252345678989"
		}
	]

	return (
		<div className="table-wrapper">
			<PageTitleBar title={"Drivers"} match={match} />
			{loadingStatus &&
			<LinearProgress />
			}
			{isLoading && <Spinner />}
			{!isLoading &&
			<RctCollapsibleCard heading="Accepted Drivers" fullBlock style={{minHeight: "70vh", background: 'red'}}>
				<li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
					<div className="search-wrapper">
						<Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
					</div>
					<IconButton mini="true" className="search-icon-btn">
						<i className="zmdi zmdi-search"></i>
					</IconButton>
					<MobileSearchForm
						onClose={() => this.setState({ isMobileSearchFormVisible: false })}
					/>
				</li>
				<div className="float-right">
					<CSVLink
						data={excelExport}
						filename={"drivers.csv"}
						className="btn-sm btn-outline-default mr-10 bg-primary text-white"
						target="_blank"
					>
						<i className="zmdi zmdi-download mr-2"></i>
						Export to Excel
					</CSVLink>
					<CSVLink
						data={sampleData}
						filename={"sampleDrivers.csv"}
						className="btn-sm btn-outline-default mr-10 bg-success text-white"
						target="_blank"
					>
						<i className="zmdi zmdi-download mr-2"></i>

						Sample excel to upload
					</CSVLink>
					<a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>

					{/*<a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>*/}
					<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New Driver <i className="zmdi zmdi-plus"></i></a>
				</div>
				<div className="table-responsive" style={{minHeight: "50vh"}}>
					<Table>
						<TableHead>
							<TableRow hover>
								<TableCell>First Name</TableCell>
								<TableCell>Last Name</TableCell>
								<TableCell>Status</TableCell>
								<TableCell>Ratings</TableCell>
								<TableCell>Vehicle</TableCell>
								<TableCell>App Status</TableCell>
								<TableCell>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<Fragment>
								{posts && currentPosts.map((driver, key) => (
									<TableRow hover key={key}>
										<TableCell>{driver.firstName}</TableCell>
										<TableCell>{driver.lastName}</TableCell>
										{driver.status == 1 &&
										<TableCell><Badge color="primary">Accepted</Badge></TableCell>
										}
										{driver.status == 0 &&
										<TableCell><Badge color="warning">Pending</Badge></TableCell>
										}
										{driver.status == 3 &&
										<TableCell><Badge color="danger">Inactive</Badge></TableCell>
										}
										{driver.status == 2 &&
										<TableCell><Badge color="success">Approved</Badge></TableCell>
										}
										<TableCell>
											<StarRatings
												rating={driver.rating}
												starRatedColor="red"
												numberOfStars={5}
												starDimension="18px"
											/>
										</TableCell>
										{vehicles && vehicles.map(vehicle => {
											if(driver.vehicleId  == vehicle.id) {
												return <TableCell key={vehicle.id}>{vehicle.plateNo}</TableCell>
											}
										})}
										{!driver.vehicleId && <TableCell></TableCell>}
										{driver.appStatus == 0 &&
										<TableCell><Badge color="danger">Offline</Badge></TableCell>
										}
										{driver.appStatus == 1 &&
										<TableCell><Badge color="success">Online</Badge></TableCell>
										}
										<TableCell>
											<ViewBtn driver={driver}  vehicles={vehicles} getDrivers2={getDrivers2}/>
										</TableCell>
									</TableRow>
								))}
							</Fragment>
						</TableBody>
					</Table>
					{posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Driver Found</div>}
				</div>
				<div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
					{posts.length > 0 &&
					<Pagination
						activePage={currentPage}
						itemClass="page-item"
						linkClass="page-link"
						itemsCountPerPage={postsPerPage}
						totalItemsCount={posts.length}
						onChange={paginate}
					/>}
				</div>
			</RctCollapsibleCard>}
			<Modal
				isOpen={addNewUserModal}
				toggle={() => onAddUpdateUserModalClose()}>
				<ModalHeader toggle={() => onAddUpdateUserModalClose()}>
					Add New Driver
				</ModalHeader>
				<Form onSubmit={onSubmit}>
					<ModalBody>

						<div className="row">
							<div className="col-sm-6">
								<FormGroup>
									<Label for="firstName">First Name</Label>
									<Input type="text"  name="firstName" onChange={onChange} value={firstName}  required/>
								</FormGroup>
								<FormGroup>
									<Label for="lastName">Last Name</Label>
									<Input type="text"  name="lastName" onChange={onChange} value={lastName} required />
								</FormGroup>
								<FormGroup>
									<Label for="phoneNo">Phone no</Label>
									<Input type="number"  name="phoneNo" onChange={onChange} value={phoneNo} required />
								</FormGroup>
								<FormGroup>
									<Label for="email">Email</Label>
									<Input type="email" name="email" onChange={onChange} value={email} required />
								</FormGroup>
								<FormGroup>
									<Label for="residentialAddress">Residential Address</Label>
									<Input type="text" name="residentialAddress" onChange={onChange} value={residentialAddress} required />
								</FormGroup>
								<FormGroup>
									<Label for="lasdriId">LASDRI ID</Label>
									<Input type="text" name="lasdriId" onChange={onChange} value={lasdriId} required />
								</FormGroup>
							</div>
							<div className="col-sm-6">
								<FormGroup>
									<Label for="stateOfOrigin">State of Origin</Label>
									<Input type="select"  name="stateOfOrigin" onChange={onChange} value={stateOfOrigin}  required>
										<option value="">select</option>
										{state.map(stateData => (
											<option key={stateData} value={stateData}>{stateData}</option>
										))}
									</Input>

								</FormGroup>
								<FormGroup>
									<Label for="education">Education</Label>
									<Input type="select"  name="education" onChange={onChange} value={education} required>
										<option value="">select</option>
										<option value="SSCE">SSCE</option>
										<option value="BSC">BSC</option>
										<option value="PHD">PHD</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="eyeGlass">Eye Glass</Label>
									<Input type="select"  name="eyeGlass" onChange={onChange} value={eyeGlass} required>
										<option value="">select</option>
										<option value="yes">Yes</option>
										<option value="No">No</option>
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="bloodGroup">Blood Group</Label>
									<Input type="select" name="bloodGroup" onChange={onChange} value={bloodGroup} required>
										<option value="">select</option>
										{bloodgroup.map(blood=> (
											<option key={blood} value={blood}>{blood}</option>
										))}
									</Input>
								</FormGroup>
								<FormGroup>
									<Label for="licenseNumber">license Number</Label>
									<Input type="text" name="licenseNumber" onChange={onChange} value={licenseNumber} required />

								</FormGroup>
								<FormGroup>
									<Label for="NIN">NIN</Label>
									<Input type="text" name="NIN" onChange={onChange} value={NIN} required />

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
			</Modal>
		</div>
	);

}

function mapDispatchToProps(dispatch) {
	return {
		getDrivers: () => dispatch(getDrivers()),
		getDrivers2: () => dispatch(getDrivers2()),
		createDrivers: (first, last, email, phone, licenseNo, stateOfOrigin, eyeGlasses, lasdriId, bloodGroup, education) =>
			dispatch(createDrivers(first, last, email, phone, licenseNo, stateOfOrigin, eyeGlasses, lasdriId, bloodGroup, education)),
		getVehicles: () => dispatch(getVehicles()),
	};
}


const mapStateToProps = state => ({
	drivers: state.driver.drivers,
	isLoading: state.loading.loading,
	vehicles: state.vehicle.vehicles,
	loadingStatus: state.loading.loadingStatus
});

export default connect( mapStateToProps, mapDispatchToProps) (VerifiedDrivers);
