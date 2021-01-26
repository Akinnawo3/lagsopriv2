import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {connect} from "react-redux";
import Spinner from "../../spinner/Spinner";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {CSVLink} from "react-csv";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import Pagination from "react-js-pagination";
import LinearProgress from "@material-ui/core/LinearProgress";
import {changeVehicleStatus, createVehicles, getVehicles, updateVehicle} from "Actions/vehicleAction";
import Button from "@material-ui/core/Button";
import Upload from "./components/upload";
import { Form, FormGroup, Label, Input, Badge,  Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';



const  ActiveVehicles = ({match, getVehicles, vehicles, loading, changeVehicleStatus, loadingStatus, createVehicles, updateVehicle}) => {
	const [addNewUserModal, setAddNewUserModal] = useState(false)
	const [editUser, setEditUser] = useState(false)
	const [updateId, setUpdateId] = useState(null)
	const [formData, setFormData] = useState({plateNo: '', type: '', model: '', status: 1, desc: ''})
	const [addNewUserModal1, setAddNewUserModal1] = useState(false)
	const [suspendId, setSuspendId] = useState(null)
	const [searchData, setSearchData] = useState('')
	const inputEl = useRef(null);
	const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
	const [excelExport, setExcelExport] = useState([])

	useEffect(()=> {
		getVehicles();
	},[])

	useEffect(()=> {
		if(searchData && vehicles){
			setCurrentPage(1)
			const search = vehicles.filter((user) => user.status === 1).filter(vehicle => {
				return (vehicle.plateNo.toLowerCase().includes(searchData.toLowerCase()))
			});
			setPosts(search)
		} else if(searchData === "") {
			setPosts(vehicles.filter((user) => user.status === 1).sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		}
	},[searchData]);

	useEffect(()=> {
		if(vehicles) {
			setPosts(vehicles.filter((user) => user.status === 1).sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
			let result = vehicles.map(vehicle=> {
				return {
					plateNo: vehicle['plateNo'],
					type: vehicle['type'],
					make: vehicle['make'],
					model: vehicle['model'],
					desc: vehicle['desc'],
				}
			})
			setExcelExport(result)
		}
	},[vehicles])

	const onSuspend = (id) => {
		inputEl.current.open();
		setSuspendId(id)
	}

	const removeSuspendId = ()=> {
		setSuspendId(null)
	}

	const onChangeSearch = (e) =>{
		e.preventDefault();
		setSearchData(e.target.value );
	};

	const paginate = pageNumber => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0);
	};


	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
	const {plateNo, type, model, make, status, desc} = formData

	const opnAddNewUserModal = (e) => {
		e.preventDefault();
		setAddNewUserModal(true)
	}

	const opnAddNewUserModal1 = (e) => {
		e.preventDefault();
		setAddNewUserModal1(true)
	}

	const onAddUpdateUserModalClose1 = () => {
		setAddNewUserModal1(false);
	}

	const opnAddNewUserEditModal = (id) => {
		vehicles.map(vehicle => {
			if(vehicle.id === id){
				setFormData(
					{...formData,
						plateNo: vehicle.plateNo,
						type: vehicle.type,
						model: vehicle.model,
						make: vehicle.make,
						desc: vehicle.desc,
					})
				setUpdateId(vehicle.id)
			}
		})
		setAddNewUserModal(true)
		setEditUser(true)
	}

	const onAddUpdateUserModalClose = () => {
		if(editUser) {
			setFormData(
				{...formData,
					plateNo: '', type: '', model: '', desc: '', make:  ''
				})
		}
		setUpdateId(null)
		setAddNewUserModal(false);
		setEditUser(false);
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		onAddUpdateUserModalClose()
		!editUser ?  await createVehicles(plateNo, type, model, make, status, desc)
			:  await updateVehicle(updateId, plateNo, type, model, make, desc)
	};

	const sampleData = [
		{
			plateNo: 'DVFGR9o',
			type: 'sedan',
			model: '2013',
			make: 'toyota',
			desc: 'A vehicle'
		}
	]

	return (
		<div className="table-wrapper">
			<PageTitleBar title={"Vehicles"} match={match} />
			{loadingStatus &&
			<LinearProgress />
			}
			{loading && <Spinner />}
			{!loading &&
			<RctCollapsibleCard heading="All Vehicles" fullBlock>
				<li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
					<div className="search-wrapper">
						<Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
					</div>
					<IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
						<i className="zmdi zmdi-search"></i>
					</IconButton>
					<MobileSearchForm
						// isOpen={isMobileSearchFormVisible}
						onClose={() => this.setState({ isMobileSearchFormVisible: false })}
					/>
				</li>
				<div className="float-right">
					<CSVLink
						data={excelExport}
						filename={"vehicles.csv"}
						className="btn-sm btn-outline-default mr-10 bg-primary text-white"
						target="_blank"
					>
						<i className="zmdi zmdi-download mr-2"></i>
						Export to Excel
					</CSVLink>
					<CSVLink
						// headers={headers}
						data={sampleData}
						filename={"sampleVehicles.csv"}
						className="btn-sm btn-outline-default mr-10 bg-success text-white"
						target="_blank"
					>
						<i className="zmdi zmdi-download mr-2"></i>

						Sample excel to upload
					</CSVLink>
					<a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>
					<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Vehicle <i className="zmdi zmdi-plus"></i></a>
				</div>
				<div className="table-responsive" style={{minHeight: "50vh"}}>
					<Table>
						<TableHead>
							<TableRow hover>
								<TableCell>Plate No</TableCell>
								<TableCell>Type</TableCell>
								<TableCell>Make</TableCell>
								<TableCell>Model</TableCell>
								<TableCell>status</TableCell>
								<TableCell>Action</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<Fragment>
								{posts && currentPosts.map((vehicle, key) => (
									<TableRow hover key={key}>
										<TableCell>{vehicle.plateNo}</TableCell>
										<TableCell>{vehicle.type}</TableCell>
										<TableCell>{vehicle.make}</TableCell>
										<TableCell>{vehicle.model}</TableCell>
										{vehicle.status == 2 &&
										<TableCell><Badge color="success">Active</Badge></TableCell>
										}
										{vehicle.status == 1 &&
										<TableCell><Badge color="danger">Inactive</Badge></TableCell>
										}
										<TableCell>
											<button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(vehicle.id)}><i className="ti-pencil"></i></button>
											{vehicle.status === 1 &&
											<button type="button" className="rct-link-btn text-success  ml-lg-3" onClick={()=> changeVehicleStatus(vehicle.id, 2)}><i title="activate" className="ti-check"/></button>}
											{vehicle.status === 2 &&
											<button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onSuspend(vehicle.id)}><i title="deactivate" className="ti-close"/></button>}
										</TableCell>
									</TableRow>
								))}
							</Fragment>
						</TableBody>
					</Table>
					{posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Vehicle Found</div>}
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
			</RctCollapsibleCard>
			}
			<Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
				<ModalHeader toggle={() => onAddUpdateUserModalClose()}>
					{editUser ? 'Update Vehicle': 'Add New Vehicle'}
				</ModalHeader>
				<Form onSubmit={onSubmit}>
					<ModalBody>
						<FormGroup>
							<Label for="firstName">Plate No</Label>
							<Input type="text"  name="plateNo" value={plateNo} onChange={onChange}   required/>
						</FormGroup>
						<FormGroup>
							<Label for="lastName">Type</Label>
							<Input type="text"  name="type" value={type} onChange={onChange}  required />
						</FormGroup>
						<FormGroup>
							<Label for="phoneNumber">Make</Label>
							<Input type="text"  name="make" value={make} onChange={onChange}  required />
						</FormGroup>
						<FormGroup>
							<Label for="text">Model</Label>
							<Input type="text" name="model" value={model} onChange={onChange} required />
						</FormGroup>
						<FormGroup>
							<Label for="text">Description</Label>
							<Input type="textarea" name="desc" value={desc} onChange={onChange} required />
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
					</ModalFooter>
				</Form>
			</Modal>
			<Modal isOpen={addNewUserModal1} toggle={() => onAddUpdateUserModalClose1()}>
				<ModalHeader toggle={() => onAddUpdateUserModalClose1()}>
					Upload Admin
				</ModalHeader>
				<ModalBody>
					<Upload oncloseModal={onAddUpdateUserModalClose1} />
				</ModalBody>
			</Modal>
			<DeleteConfirmationDialog
				ref={inputEl}
				title="Are You Sure Want To Deactivate Vehicle?"
				message="Vehicle will be deactivated from the platform again."
				onConfirm={() => {
					changeVehicleStatus(suspendId, 1);
					inputEl.current.close();
				}}
				removeDeleteId={removeSuspendId}
			/>
		</div>
	);

}

function mapDispatchToProps(dispatch) {
	return {
		getVehicles: () => dispatch(getVehicles()),
		changeVehicleStatus: (id, status) => dispatch(changeVehicleStatus(id, status)),
		createVehicles: (plateNo, type, model, make, status, desc) => dispatch(createVehicles(plateNo, type, model, make, status, desc)),
		updateVehicle: (id, plateNo, type, model, make, desc) => dispatch(updateVehicle(id, plateNo, type, model, make, desc)),

	};
}


const mapStateToProps = state => ({
	vehicles: state.vehicle.vehicles,
	loading: state.loading.loading,
	loadingStatus: state.loading.loadingStatus
});

export default connect( mapStateToProps, mapDispatchToProps) (ActiveVehicles);
