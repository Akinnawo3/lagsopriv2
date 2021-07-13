import React, {useState, useEffect, Fragment} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import {connect} from "react-redux";
import {getPassengerCount, getPassengers, searchPassengers} from "Actions/passengerActions";
import {CSVLink} from "react-csv";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import Pagination from "react-js-pagination";
import {Link} from "react-router-dom";
import {calculatePostDate} from "Helpers/helpers";
import EmptyData from "Components/EmptyData/EmptyData";
import SearchComponent from "Components/SearchComponent/SearchComponent";



const  Passengers = ({match, getPassengers, passengers, loading, passengerCount, getPassengerCount, searchPassenger}) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [excelExport, setExcelExport] = useState([])

	useEffect(()=> {
		getPassengers(1, true);
		getPassengerCount()
	},[])



	useEffect(()=> {
		if(passengers) {
			let result = passengers.map(passenger=> {
				return {
					FirstName: passenger['first_name'],
					LastName: passenger['last_name'],
					PhoneNumber: passenger['phone_number'],
					Email: passenger['email'],
					HomeLocation: passenger['home_address'],
					WorkLocation: passenger['work_address'],
					Registration_Date:  new Date(passenger['createdAt']).toLocaleString()
				}
			})
			setExcelExport(result)
		}
	},[passengers])


	const paginate = pageNumber => {
		setCurrentPage(pageNumber);
		getPassengers(pageNumber)
		window.scrollTo(0, 0);
	};


	return (
			<div className="table-wrapper">
				<PageTitleBar title={"Passengers"} match={match} />
				<RctCollapsibleCard heading="All Passengers" fullBlock>
					<li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
						<SearchComponent setCurrentPage={setCurrentPage} getSearchedData={searchPassenger} getPreviousData={getPassengers} getCount={getPassengerCount} />
						<IconButton mini="true" className="search-icon-btn">
							<i className="zmdi zmdi-search"></i>
						</IconButton>
						<MobileSearchForm
							// isOpen={isMobileSearchFormVisible}
							// onClose={() => this.setState({ isMobileSearchFormVisible: false })}
						/>
					</li>
					<div className="float-right">
						{!loading && passengers.length > 0 &&
						<CSVLink
							data={excelExport}
							filename={"passengers.csv"}
							className="btn-sm btn-outline-default mr-10 bg-primary text-white"
							target="_blank"
						>
							<i className="zmdi zmdi-download mr-2"></i>
							Export to Excel
						</CSVLink>
						}
					</div>
					{!loading && passengers.length > 0 &&
						<>
					<div className="table-responsive" style={{minHeight: "50vh"}}>
						<Table>
							<TableHead>
								<TableRow hover>
									<TableCell>First Name</TableCell>
									<TableCell>Last Name</TableCell>
									<TableCell>Phone No</TableCell>
									<TableCell>Date / Time of Registration</TableCell>
									<TableCell>Action</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								<Fragment>
									{passengers.map((passenger, key) => (
										<TableRow hover key={key}>
											<TableCell>{passenger.first_name}</TableCell>
											<TableCell>{passenger.last_name}</TableCell>
											<TableCell>{passenger.phone_number}</TableCell>
											<TableCell>{calculatePostDate(passenger.createdAt)}</TableCell>
											<TableCell>
												<button type="button" className="rct-link-btn text-primary" title="view details"><Link to={`/admin/passengers/${passenger.auth_id}`}><i className="ti-eye"/></Link></button>
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
							itemsCountPerPage={20}
							totalItemsCount={passengerCount}
							onChange={paginate}
						/>
					</div>
						</>
					}
					{!loading && passengers.length < 1 && <EmptyData />}
				</RctCollapsibleCard>
			</div>
		);

}

function mapDispatchToProps(dispatch) {
	return {
		getPassengers: (page_no, spinner) => dispatch(getPassengers(page_no, spinner)),
		getPassengerCount: () => dispatch(getPassengerCount()),
		searchPassenger: (searchData) => dispatch(searchPassengers(searchData)),

	};
}


const mapStateToProps = state => ({
	passengers: state.passenger.passengers,
	passengerCount: state.passenger.passengerCount,
	loading: state.loading.loading,
	loadingStatus: state.loading.loadingStatus
});

export default connect( mapStateToProps, mapDispatchToProps) (Passengers);
