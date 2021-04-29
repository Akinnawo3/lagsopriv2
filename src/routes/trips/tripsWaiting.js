/**
 * Trips
 */
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge } from 'reactstrap';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {connect} from "react-redux";
import {getTripCount, getTripCountByStatus, getTrips, getTripsByStatus} from "Actions/tripAction";
import Spinner from "../../spinner/Spinner";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";


const  TripsWaiting = ({match, trips, getTrips, isLoading, getTripCount, tripCount}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

useEffect(()=> {
	getTrips(1, 'waiting');
	getTripCount('waiting')
	},[])


	const paginate = pageNumber => {
		setCurrentPage(pageNumber);
		getTrips(pageNumber);
		window.scrollTo(0, 0);
	};


	return (
			<div className="table-wrapper">
				<PageTitleBar title={"Trips"} match={match} />
				{isLoading && <Spinner />}
				{!isLoading && <RctCollapsibleCard heading="Waiting Trips" fullBlock>
					<div className="float-right">
						<a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
						{/*<a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Add New Driver <i className="zmdi zmdi-plus"></i></a>*/}
					</div>
					<div className="table-responsive">
						<Table>
							<TableHead>
								<TableRow hover>
									<TableCell>Trip Id</TableCell>
									<TableCell>Date/Time</TableCell>
									<TableCell>Class</TableCell>
									<TableCell>Status</TableCell>
									{/*<TableCell>Ratings</TableCell>*/}
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<Fragment>
									{trips.length > 0 && trips.map((trip) => (
										<TableRow hover key={trip._id}>
											<TableCell>
												<Media>
													{/*<Media left>*/}
													{/*	<Media object src={employee.employeeAvatar} alt="User Profile 1" className="rounded-circle mr-20" width="40" height="40" />*/}
													{/*</Media>*/}
													<Media body><h5 className="m-0 pt-15">{trip._id}</h5></Media>
												</Media>
											</TableCell>
											<TableCell>
												{new Date(trip.createdAt).toDateString()} {new Date(trip.createdAt).toLocaleTimeString()}
											</TableCell>
											<TableCell>
												{trip.ride_class}
											</TableCell>
											<TableCell><Badge color="warning">{trip.ride_status}</Badge></TableCell>
											<TableCell>
												<button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/trips/${trip._id}`}><i className="ti-eye"/></Link></button>

												{/*<ViewBtn />*/}
												{/*<IconButton className="text-primary" title="View Trip Details"><i className="ti-eye"><Link to={`/admin/trips/${trip._id}`}><i className="ti-eye"/></Link></i></IconButton>*/}
											</TableCell>
										</TableRow>
									))}
								</Fragment>
							</TableBody>
						</Table>
					</div>
					<div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
						{trips.length > 0 && tripCount?.total &&
						<Pagination
							activePage={currentPage}
							itemClass="page-item"
							linkClass="page-link"
							itemsCountPerPage={postsPerPage}
							totalItemsCount={tripCount?.total}
							onChange={paginate}
						/>}
					</div>
				</RctCollapsibleCard>}
			</div>
		);

}

function mapDispatchToProps(dispatch) {
	return {
		getTrips: (pageNo, status) => dispatch(getTripsByStatus(pageNo, status)),
		getTripCount: (status) => dispatch(getTripCountByStatus(status)),
	};
}


const mapStateToProps = state => ({
	trips: state.trips.trips,
	tripCount: state.trips.tripCount,
	isLoading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (TripsWaiting);
