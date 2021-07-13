import React, {useEffect} from 'react';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import {connect} from "react-redux";
import {getVehicles, getVehiclesCount} from "Actions/vehicleAction";
import VehicleTable from "Routes/vehicles/components/vehicleTable";



const  ActiveVehicles = ({match, getVehicles, getVehiclesCount}) => {
	useEffect(()=> {
		getVehicles(1, 1, true);
		getVehiclesCount(1);
	},[])

	return (
		<div className="table-wrapper">
			<PageTitleBar title={"Vehicles"} match={match} />
			<VehicleTable assign={1} header='Active Vehicles' />
		</div>
	);

}

function mapDispatchToProps(dispatch) {
	return {
		getVehicles: (page_no, assign, spinner) => dispatch(getVehicles(page_no, assign, spinner)),
		getVehiclesCount: (assign) => dispatch(getVehiclesCount(assign)),
	};
}


const mapStateToProps = state => ({
	vehicles: state.vehicle.vehicles,
	vehiclesCount: state.vehicle.vehiclesCount,
	drivers: state.driver.drivers,
	loading: state.loading.loading,
	loadingStatus: state.loading.loadingStatus
});

export default connect( mapStateToProps, mapDispatchToProps) (ActiveVehicles);
