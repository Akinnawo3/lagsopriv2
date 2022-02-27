/**
 * Google Map
 */
import React, {useEffect, useState} from "react";
import {Input, FormGroup, Label} from "reactstrap";
import {connect} from "react-redux";
import {getDriverLocation} from "Actions/driverAction";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import api from "../../environments/environment";
import GoogleMapComponent1 from "Components/Maps/GoogleMapComponent1";
import {getUsersLocation, searchDriverLocation, searchUserLocation} from "Actions/userAction";
import {getDriversLocation} from "Actions/driverAction";
import {getTripCountMovingDrivers, getTripCountMovingUsers, getTripCountWaitingDrivers, getTripCountWaitingUsers} from "Actions/tripAction";
import DownloadsChart from "./component/downloadsChart";
import DownloadsTable from "./component/downloadsTable";
import {NotificationManager} from "react-notifications";

const GoogleMapComponent = ({
  match,
  userLocation,
  getUsersLocation,
  getDriversLocation,
  driversLocation,
  getTripCountMovingUsers,
  getTripCountWaitingUsers,
  tripCountWaitingUsers,
  tripCountMovingUsers,
  getTripCountMovingDrivers,
  getTripCountWaitingDrivers,
  tripCountWaitingDrivers,
  tripCountMovingDrivers,
  searchUserLocation,
  searchDriverLocation,
}) => {
  const [center, setCenter] = useState({ lat: 6.4478954861952404, lng: 3.4742776645841493});
  const [center2, setCenter2] = useState({ lat: 6.4478954861952404, lng: 3.4742776645841493});

  const [type, setType] = useState('driver');
  const [searchData, setSearchData] = useState("");
  const [searchedUser, setSearchedUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [focused, setFocused] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);


  useEffect(() => {
    getUsersLocation(center2.lng, center2.lat);
    getDriversLocation(center.lng, center.lat);
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
      const res = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}&user_type=${type}`);
      setSearchedUser(res.data.data);
      setIsShow(true);
      setLoading(false);
    } catch (e) {}
  };

  const handleOption = (user) => {
    setSearchData(`${user.first_name} ${user.last_name}`);
    console.log(user?.location?.coordinates)
    if(user?.location?.coordinates && user?.location?.coordinates[0] !== 0 && user?.location?.coordinates[1] !== 0) {
      if(type === 'rider') {
        searchUserLocation(user)
        setCenter2({lat: user?.location?.coordinates[1], lng: user?.location?.coordinates[0]})

      }else {
        searchDriverLocation(user)
        setCenter({lat: user?.location?.coordinates[1], lng: user?.location?.coordinates[0]})
      }
    } else {
      NotificationManager.error('user coordinate is invalid');
    }
    setIsShow(false);
  };

  return (
    <div>
      <PageTitleBar title="Map" match={match} />
      <FormGroup>
        <Label  htmlFor="browser">Search User on Map</Label>
        <div className='d-flex w-50'>
          <Input  type="select"   required style={{width: '120px'}} value={type} onChange={(e) =>setType(e.target.value)}>
            {/*<option value="">All</option>*/}
            <option value="driver">Driver</option>
            <option value="rider">Rider</option>
          </Input>
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
              style={{width: '50%', marginLeft: '-30px'}}
          />
        </div>

        {loading && (
            <div className="page-loader d-flex justify-content-center mb-30 mt-30">
              <CircularProgress size={24} />
            </div>
        )}
        {!loading && searchedUser?.length > 0 && isShow && (
            <div className="pr-4 w-100">
              <div className="bg-white" style={{border: "1px solid #EBEDF2", maxHeight: "200px", overflow: "auto", zIndex: 1, width: "102%"}}>
                {searchedUser?.length > 0 &&
                searchedUser.map((user, index) => (
                    <option onClick={() => handleOption(user)} key={user.auth_id} className="p-2 custom-dropdown" style={{width: "100%", cursor: 'pointer'}}>
                      {user.first_name} {user.last_name}
                    </option>
                ))}
              </div>
            </div>
        )}
      </FormGroup>
      <div className="row">
        <div className="col-sm-12 col-md-6 w-xs-half-block">
          <GoogleMapComponent1 getUsersLocation={getDriversLocation} userLocation={driversLocation} waiting={tripCountWaitingDrivers} moving={tripCountMovingDrivers} title={"Drivers Map"} center={center} setCenter={setCenter} />
        </div>
        <div className="col-sm-12 col-md-6 w-xs-half-block">
          <GoogleMapComponent1 getUsersLocation={getUsersLocation} userLocation={userLocation} waiting={tripCountWaitingUsers} moving={tripCountMovingUsers} title={"Riders Map"} center={center2} setCenter={setCenter2} />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-8 w-xs-half-block">
          <DownloadsChart />
        </div>
        <div className="col-sm-12 col-md-4 w-xs-half-block" style={{maxHeight: 540, overflowY: "scroll"}}>
          <DownloadsTable />
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getUsersLocation: (lon, lat) => dispatch(getUsersLocation(lon, lat)),
    searchUserLocation: (data) => dispatch(searchUserLocation(data)),
    searchDriverLocation: (data) => dispatch(searchDriverLocation(data)),
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
