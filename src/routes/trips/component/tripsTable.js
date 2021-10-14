/**
 * TripsTable
 */
import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Media, Badge } from 'reactstrap';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {connect} from "react-redux";
import {getTripCount, getTrips, searchTrip} from "Actions/tripAction";
import {Link} from "react-router-dom";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import SearchComponent from "Components/SearchComponent/SearchComponent";


const  TripsTable = ({ trips, getTrips, isLoading,  tripCount, status, header, searchTrips, getTripCount}) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(20);



	const paginate = async (pageNumber) => {
			await 	setCurrentPage(pageNumber);
			await 	getTrips(pageNumber, status);
			window.scrollTo(0, 0);
	};

	const getPreviousData = () => {
		getTrips(1, status)
	}

	const getSearchData = (searchData) => {
		searchTrips(searchData, status)
	}

	const handleCount = () => {
		getTripCount(status)
	}

	return (
			<div>
				<RctCollapsibleCard heading={header} fullBlock style={{minHeight: "70vh"}}>
					<li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
						<SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} placeHolder={'Trip Id'} />
					</li>
					{/*<div className="float-right">*/}
					{/*	{!isLoading && drivers.length > 0 &&*/}
					{/*	<CSVLink*/}
					{/*		data={excelExport}*/}
					{/*		filename={"drivers.csv"}*/}
					{/*		className="btn-sm btn-outline-default mr-10 bg-primary text-white"*/}
					{/*		target="_blank"*/}
					{/*	>*/}
					{/*		<i className="zmdi zmdi-download mr-2"></i>*/}
					{/*		Export to Excel*/}
					{/*	</CSVLink>*/}
					{/*	}*/}
					{/*</div>*/}
				{!isLoading && trips.length > 0 &&
				<div>
					<div className="table-responsive" style={{minHeight: "50vh"}}>
						<Table>
							<TableHead>
								<TableRow hover>
									<TableCell>Trip Id</TableCell>
									<TableCell>Date / Time</TableCell>
									<TableCell>Class</TableCell>
									<TableCell>Type</TableCell>
									<TableCell>Status</TableCell>
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<Fragment>
									{trips.length > 0 && trips.map((trip) => (
										<TableRow hover key={trip.trip_id}>
											<TableCell>
												<Media>
													<Media body><h5 className="m-0 pt-15">{trip.trip_id}</h5></Media>
												</Media>
											</TableCell>
											<TableCell>
												{new Date(trip.createdAt).toDateString()} {new Date(trip.createdAt).toLocaleTimeString()}
											</TableCell>
											<TableCell>
												{trip.ride_class}
											</TableCell>
											<TableCell>
												{trip.ride_type}
											</TableCell>
											<TableCell><Badge
												color={trip.ride_status === 'completed' ? "success" : trip.ride_status === 'cancel' ? 'danger' : trip.ride_status === 'waiting' ? 'warning' : 'secondary'}>
												{trip.ride_status === 'on_trip' ? 'current' : trip.ride_status === 'on_pickup' ? 'enroute': trip?.ride_status === 'cancel' ? 'cancelled' : trip.ride_status}
											</Badge></TableCell>
											<TableCell>
												<button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/trips/${trip.trip_id}`}><i className="ti-eye"/></Link></button>
											</TableCell>
										</TableRow>
									))}
								</Fragment>
							</TableBody>
						</Table>
					</div>
					<div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
						<Pagination
							activePage={currentPage}
							itemClass="page-item"
							linkClass="page-link"
							itemsCountPerPage={postsPerPage}
							totalItemsCount={tripCount}
							onChange={paginate}
						/>
					</div>
				</div>}
				{trips.length === 0 && !isLoading && <EmptyData />}
				</RctCollapsibleCard>
			</div>
		);

}

function mapDispatchToProps(dispatch) {
	return {
		getTrips: (pageNo, status, spinner) => dispatch(getTrips(pageNo, status, spinner)),
		getTripCount: (status) => dispatch(getTripCount(status)),
		searchTrips: (trip_id, status) => dispatch(searchTrip(trip_id, status))
	};
}


const mapStateToProps = state => ({
	trips: state.trips.trips,
	tripCount: state.trips.tripCount,
	isLoading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (TripsTable);
