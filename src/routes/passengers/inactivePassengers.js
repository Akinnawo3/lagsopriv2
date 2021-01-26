import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {connect} from "react-redux";
import {changePassengerStatus, getPassengers} from "Actions/passengerActions";
import Spinner from "../../spinner/Spinner";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {CSVLink} from "react-csv";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import { Input } from 'reactstrap';
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";
import LinearProgress from "@material-ui/core/LinearProgress";



const  InactivePassengers = ({match, getPassengers, passengers, loading, changePassengerStatus, loadingStatus}) => {
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
		getPassengers();
	},[])

	useEffect(()=> {
		if(searchData && passengers){
			setCurrentPage(1)
			const search = passengers.filter((user) => user.phoneNumberStatus === 0).filter(passenger => {
				return (passenger.firstName.toLowerCase().includes(searchData.toLowerCase()) || passenger.lastName.toLowerCase().includes(searchData.toLowerCase()))
			});
			setPosts(search)
		} else if(searchData === "") {
			setPosts(passengers.filter((user) => user.phoneNumberStatus === 0).sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
		}
	},[searchData]);

	useEffect(()=> {
		if(passengers) {
			setPosts(passengers.filter((user) => user.phoneNumberStatus === 0).sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
			let result = passengers.filter((user) => user.phoneNumberStatus === 0).map(passenger=> {
				return {
					firstName: passenger['firstName'],
					lastName: passenger['lastName'],
					phoneNumber: passenger['phoneNumber'],
					email: passenger['email'],
					homeLocation: passenger['homeLocation'],
					homePickupTime: passenger['homePickupTime'],
					workLocation: passenger['workLocation'],
					workPickupTime: passenger['workPickupTime'],
					created:  new Date(passenger['timestamp']).toLocaleString()
				}
			})
			setExcelExport(result)
		}
	},[passengers])

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

	return (
			<div className="table-wrapper">
				<PageTitleBar title={"Passengers"} match={match} />
				{loadingStatus &&
				<LinearProgress />
				}
				{loading && <Spinner />}
				{!loading &&
				<RctCollapsibleCard heading="Inactive Passengers" fullBlock>
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
							filename={"passengers.csv"}
							className="btn-sm btn-outline-default mr-10 bg-primary text-white"
							target="_blank"
						>
							<i className="zmdi zmdi-download mr-2"></i>
							Export to Excel
						</CSVLink>
					</div>
					<div className="table-responsive" style={{minHeight: "50vh"}}>
						<Table>
							<TableHead>
								<TableRow hover>
									<TableCell>First Name</TableCell>
									<TableCell>Last Name</TableCell>
									<TableCell>Phone No</TableCell>
									<TableCell>Status</TableCell>
									<TableCell>Date Created</TableCell>
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<Fragment>
									{posts && currentPosts.map((passenger, key) => (
										<TableRow hover key={key}>
											<TableCell>{passenger.firstName}</TableCell>
											<TableCell>{passenger.lastName}</TableCell>
											<TableCell>{passenger.phoneNumber}</TableCell>
											<TableCell className='d-flex'>
												{passenger.phoneNumberStatus === 0 &&
												<div className="d-flex align-items-center justify-content-center">
													<span
														className={`badge badge-xs badge-danger mr-10 mt-10 position-relative`}>&nbsp;</span>
													<div className="status">
														<span className="d-block">Inactive</span>
														<span className="small">Since 1 hour</span>
													</div>
												</div>
												}
												{passenger.phoneNumberStatus === 1 &&
												<div className="d-flex align-items-center justify-content-center">
													<span
														className={`badge badge-xs badge-success mr-10 mt-10 position-relative`}>&nbsp;</span>
													<div className="status">
														<span className="d-block">Active</span>
														<span className="small">Since 1 hour</span>
													</div>
												</div>
												}
											</TableCell>
											<TableCell>{passenger.timestamp ? new Date(passenger.timestamp).toLocaleString() : ''}</TableCell>
											<TableCell>
												<button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/passengers/${passenger.id}`}><i className="ti-eye"/></Link></button>
												{passenger.phoneNumberStatus === 0 &&
												<button type="button" className="rct-link-btn text-success  ml-lg-3" title="Activate" onClick={()=> changePassengerStatus(passenger.id, 1)}><i className="ti-check"/></button>}
												{passenger.phoneNumberStatus === 1 &&
												<button type="button" className="rct-link-btn ml-lg-3 text-danger" title="Suspend" onClick={() => onSuspend(passenger.id)}><i className="ti-close"/></button>}
											</TableCell>
										</TableRow>
									))}
								</Fragment>
							</TableBody>
						</Table>
						{posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Passenger Found</div>}
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
				<DeleteConfirmationDialog
					ref={inputEl}
					title="Are You Sure Want To Suspend Passenger?"
					message="Passenger will not be able to book ride on the platform again."
					onConfirm={() => {
						changePassengerStatus(suspendId, 0);
						inputEl.current.close();
					}}
					removeDeleteId={removeSuspendId}
				/>
			</div>
		);

}

function mapDispatchToProps(dispatch) {
	return {
		getPassengers: () => dispatch(getPassengers()),
		changePassengerStatus: (id, status) => dispatch(changePassengerStatus(id, status)),
	};
}


const mapStateToProps = state => ({
	passengers: state.passenger.passengers,
	loading: state.loading.loading,
	loadingStatus: state.loading.loadingStatus
});

export default connect( mapStateToProps, mapDispatchToProps) (InactivePassengers);
