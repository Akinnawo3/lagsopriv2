/**
 * Google Map
 */
import React, {useEffect, useState} from "react";
import GoogleMap from "google-map-react";
import {Input, FormGroup} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import {getDriverLocation} from "Actions/driverAction";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import api from "../../environments/environment";
import GoogleMapComponent1 from "Components/Maps/GoogleMapComponent1";
// import GoogleMapComponentUser from "../../components/Maps/GoogleMapComponentUsers";
import {getUsersLocation} from "Actions/userAction";
import {getDriversLocation} from "Actions/driverAction";
import {getTripCountMovingDrivers, getTripCountMovingUsers, getTripCountWaitingDrivers, getTripCountWaitingUsers} from "Actions/tripAction";
import DownloadsChart from "./component/downloadsChart";
import DownloadsTable from "./component/downloadsTable";

const GoogleMapComponent = ({
  match,
  userLocation,
  getUsersLocation,
  getDriversLocation,
  getDriverLocation,
  driverLocation,
  driversLocation,
  getTripCountMovingUsers,
  getTripCountWaitingUsers,
  tripCountWaitingUsers,
  tripCountMovingUsers,
  getTripCountMovingDrivers,
  getTripCountWaitingDrivers,
  tripCountWaitingDrivers,
  tripCountMovingDrivers,
}) => {
  const [center, setCenter] = useState([6.4478954861952404, 3.4742776645841493]);
  const [zoom, setZoom] = useState(16);
  const [searchData, setSearchData] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  useEffect(() => {
    if (driverLocation.length > 0) {
      setCenter([driverLocation[0]?.lat, driverLocation[0]?.lng]);
    }
  }, [driverLocation[0]?.lat, driverLocation[0]?.lng]);

  const [center2] = useState([6.4478954861952404, 3.4742776645841493]);

  useEffect(() => {
    getUsersLocation(center2[1], center2[0]);
    getDriversLocation(center2[1], center2[0]);
    getTripCountMovingUsers();
    getTripCountWaitingUsers();
    getTripCountMovingDrivers();
    getTripCountWaitingDrivers();
  }, []);

  const MAP_OPTIONS = {
    panControl: false,
    mapTypeControl: false,
  };

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearchData(e.target.value);
  };

  useEffect(() => {
    if (focused && searchData.length > 2) {
      const delayDebounceFn = setTimeout(() => {
        searchUser();
      }, 2000);
      return () => clearTimeout(delayDebounceFn);
    } else {
      setIsShow(false);
    }
  }, [searchData]);

  const searchUser = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}&user_type=driver`);
      setSearchedUser(res.data.data);
      setIsShow(true);
      setLoading(false);
    } catch (e) {}
  };

  const handleOption = (user) => {
    setSearchData(`${user.first_name} ${user.last_name}`);
    getDriverLocation(user);
    setIsShow(false);
  };

  // console.log(driverLocation, 'oooooooooo')

  const AnyReactComponent = ({text, cord}) => (
    <div>
      <div className="tooltipo">
        <i className="zmdi zmdi-car text-danger zoom" style={{fontSize: "30px"}} />
        <div className="tooltiptexto">
          <div>Name: {cord.name}</div>
          <div>Plate No: {cord.plate_no}</div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <PageTitleBar title="Map" match={match} />
      <div className="row">
        <div className="col-sm-12 col-md-6 w-xs-half-block">
          <GoogleMapComponent1 getUsersLocation={getDriversLocation} userLocation={driversLocation} waiting={tripCountWaitingDrivers} moving={tripCountMovingDrivers} title={"Drivers Map"} />
        </div>
        <div className="col-sm-12 col-md-6 w-xs-half-block">
          <GoogleMapComponent1 getUsersLocation={getUsersLocation} userLocation={userLocation} waiting={tripCountWaitingUsers} moving={tripCountMovingUsers} title={"Riders Map"} />

          {/*<GoogleMapComponentUser getUsersLocation={getUsersLocation} userLocation={userLocation} waiting={tripCountWaitingUsers} moving={tripCountMovingUsers} />*/}
        </div>
      </div>

      {/* <div className="map-wrapper">
        <Helmet>
          <title>Map</title>
          <meta name="description" content="Driver Location on Map" />
        </Helmet>
        <RctCollapsibleCard heading="Google Maps">
          <FormGroup>
            <Label  htmlFor="browser">Search Driver on Map</Label>
            <Input
              onFocus={onFocus}
              onBlur={onBlur}
              type="search"
              className="search-input-lg"
              name="searchData"
              value={searchData}
              onChange={onChangeSearch}
              placeholder="Search.. name, email, phone number"
              autoComplete="off"
              required
            />
            {loading && (
              <div className="page-loader d-flex justify-content-center mb-30 mt-30">
                <CircularProgress size={24} />
              </div>
            )}
            {!loading && searchedUser?.length > 0 && isShow && (
              <div className="pr-4 w-100">
                <div className="bg-white" style={{border: "1px solid #EBEDF2", maxHeight: "200px", overflow: "auto", zIndex: 9999999999999999999999999999999999999999, width: "102%"}}>
                  {searchedUser?.length > 0 &&
                    searchedUser.map((user) => (
                      <option onClick={() => handleOption(user)} key={user.auth_id} className="p-2 custom-dropdown" style={{width: "100%"}}>
                        {user.first_name} {user.last_name}
                      </option>
                    ))}
                </div>
              </div>
            )}
          </FormGroup>
          <SelectSearch autoComplete="on" search={true} options={options} placeholder="Search Vehicle" onChange={onChangeSearch}  />

          <GoogleMap
            bootstrapURLKeys={{key: "AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0"}}
            yesIWantToUseGoogleMapApiInternals={true}
            center={center}
            zoom={zoom}
            style={{position: "relative", width: "100%", height: "70vh"}}
            options={MAP_OPTIONS}
            hoverDistance={40 / 2}
            onClick={_onClick}
          >
            {driverLocation.map((m, index) => (
              <AnyReactComponent lat={m.lat} lng={m.lng} key={index} text={m.plate_no} cord={m} />
            ))}
          </GoogleMap>
        </RctCollapsibleCard>
      </div> */}
      {/* //downloads chart and table row */}
      <div className="row">
        <div className="col-sm-12 col-md-8 w-xs-half-block">
          <DownloadsChart />
        </div>
        <div className="col-sm-12 col-md-4 w-xs-half-block" style={{maxHeight: 450, overflowY: "scroll"}}>
          <DownloadsTable />
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getUsersLocation: (lon, lat) => dispatch(getUsersLocation(lon, lat)),
    getDriversLocation: (lon, lat) => dispatch(getDriversLocation(lon, lat)),
    getTripCountMovingUsers: () => dispatch(getTripCountMovingUsers()),
    getTripCountWaitingUsers: () => dispatch(getTripCountWaitingUsers()),
    getTripCountMovingDrivers: () => dispatch(getTripCountMovingDrivers()),
    getTripCountWaitingDrivers: () => dispatch(getTripCountWaitingDrivers()),
    getDriverLocation: (driverData, VehicleData) => dispatch(getDriverLocation(driverData, VehicleData)),
  };
}

const mapStateToProps = (state) => ({
  userLocation: state.users.userLocation,
  driverLocation: state.driver.driverLocation,
  driversLocation: state.driver.driversLocation,
  tripCountMovingUsers: state.trips.tripCountMovingUsers,
  tripCountWaitingUsers: state.trips.tripCountWaitingUsers,
  tripCountMovingDrivers: state.trips.tripCountMovingDrivers,
  tripCountWaitingDrivers: state.trips.tripCountWaitingDrivers,
});

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMapComponent);
