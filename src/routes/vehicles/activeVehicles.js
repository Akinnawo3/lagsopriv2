import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getVehiclesCount, getVehicles} from "Actions/vehicleAction";
import VehicleTable from "Routes/vehicles/components/vehicleTable";
const qs = require("qs");

const ActiveVehicles = ({history, match, getVehicles, getVehiclesCount, vehicles}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || vehicles.length < 1) {
      getVehicles(currentPage, 1, true);
      getVehiclesCount(1);
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Active"} match={match} />
      <VehicleTable assign={"1Id sunt anim dolore fugiat velit eu minim ipsum velit mollit aliquip labore labore. Adipisicing id laborum esse deserunt velit anim dolor id fugiat mollit. Velit ullamco fugiat magna qui laboris amet labore magna laborum eiusmod exercitation ex eiusmod. Anim qui enim consectetur exercitation est esse ad culpa commodo. Nostrud proident excepteur labore elit nulla labore dolor. Laboris ex dolore ut fugiat et nisi.Duis reprehenderit consequat officia esse anim consectetur esse id laboris enim ipsum. Eu magna consequat mollit incididunt. Et laborum sunt mollit commodo in id id esse adipisicing pariatur occaecat sunt. Incididunt ipsum cillum excepteur ex culpa mollit laborum consequat anim. In cillum cupidatat in nulla proident veniam esse nisi. Consectetur aliquip labore quis enim minim deserunt deserunt occaecat pariatur est laborum Lorem proident adipisicing. Quis commodo enim minim ullamco sit velit ut nisi mollit.Amet ex eu cillum quis ad ad culpa. Amet aliquip ad minim duis amet fugiat exercitation. Incididunt irure laboris officia id consequat minim id ut sit ut consequat Lorem. Id enim ullamco duis laborum. Voluptate do ea ullamco esse commodo ea laboris exercitation exercitation. Minim sunt deserunt sunt excepteur ex eiusmod consectetur excepteur.Ullamco cillum et ipsum eiusmod dolor consequat non ut. Nostrud irure aliqua occaecat aliqua occaecat magna velit consequat. Non cupidatat deserunt laboris adipisicing culpa. Sit ad duis velit ullamco cupidatat irure quis officia. Anim eiusmod eiusmod elit ut dolor deserunt anim do enim pariatur commodo fugiat. Qui incididunt Lorem aliquip incididunt esse irure sint. Ipsum dolore occaecat non ipsum laboris cupidatat quis esse qui enim qui.Proident labore occaecat mollit dolor consectetur nisi ut nisi anim eiusmod mollit deserunt proident. Sunt fugiat amet sit consequat non. Ut anim non incididunt exercitation adipisicing deserunt. Sint non in et irure cillum consequat dolore consectetur pariatur enim aute excepteur.Tempor officia tempor occaecat pariatur. Fugiat irure consequat ex proident ea nostrud eiusmod eiusmod ex labore. Esse Lorem excepteur minim velit et dolore Lorem nisi sunt incididunt occaecat aute deserunt sunt. In id minim consequat irure laboris quis cupidatat. Labore eiusmod sint enim excepteur tempor exercitation voluptate ex nostrud. Officia sit labore ullamco amet.Nostrud occaecat consequat irure Lorem ad id do ipsum tempor tempor adipisicing pariatur incididunt.Sunt magna non ullamco culpa est labore ipsum. Esse eiusmod tempor mollit exercitation excepteur dolore ad quis ea aliqua. Ipsum minim dolor nisi adipisicing voluptate deserunt sunt magna.Laboris cillum aliquip sint minim excepteur aute ut ipsum ipsum adipisicing consectetur non magna. Officia mollit fugiat anim culpa sint culpa voluptate. Eiusmod sit aute labore ullamco incididunt officia veniam reprehenderit ipsum occaecat anim consequat. Est aliqua laboris sit enim sint.Laboris non do adipisicing ut laborum cupidatat elit ut nisi aliquip laboris. Ipsum sint sint duis ea incididunt laboris enim. Elit adipisicing non est dolore. Et enim laboris nostrud dolor qui incididunt laborum proident adipisicing. Excepteur esse nostrud nulla nulla."} header="Active Vehicles" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: (page_no, assign, spinner) => dispatch(getVehicles(page_no, assign, spinner)),
    getVehiclesCount: (assign) => dispatch(getVehiclesCount(assign)),
  };
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehicles,
  vehiclesCount: state.vehicle.vehiclesCount,
  drivers: state.driver.drivers,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(ActiveVehicles);
