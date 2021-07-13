import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {getDrivers, getDriversCount} from "Actions/driverAction";
import DriverTable from "Routes/drivers/components/driverTable";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";


const  ActiveDrivers = ({getDrivers, match, getDriversCount}) => {

	useEffect(()=> {
		getDrivers(2, 1, true);
		getDriversCount(2)
	},[])


	return (
		<div className="table-wrapper">
			<PageTitleBar title={"Approved Drivers"} match={match} />
			<DriverTable status={2} header='Approved Drivers' />
		</div>
	);

}

function mapDispatchToProps(dispatch) {
	return {
		getDrivers: (status, page_no, spinner) => dispatch(getDrivers(status, page_no, spinner)),
		getDriversCount: (status) => dispatch(getDriversCount(status)),
	};
}


const mapStateToProps = state => ({
	drivers: state.driver.drivers,
	driversCount: state.driver.driversCount,
});

export default connect( mapStateToProps, mapDispatchToProps) (ActiveDrivers);
