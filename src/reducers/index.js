/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import settings from './settings';
import sidebarReducer from './SidebarReducer';
import authUserReducer from './AuthUserReducer';
import driverReducer from "./driverReducer";
import vehicleReducer from "./vehicleReducer";
import adminsReducer from "./adminReducer";
import loadingReducer from "./LoadingReducer";
import passengerReducer from "./passengerReducer";

const reducers = combineReducers({
   settings,
   sidebar: sidebarReducer,
   authUser: authUserReducer,
   driver: driverReducer,
   vehicle: vehicleReducer,
   admins: adminsReducer,
   loading: loadingReducer,
   passenger: passengerReducer,
});

export default reducers;
