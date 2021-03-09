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
import classTypesReducer from "./classTypesReducer";
import bookingTypesReducer from "./bookingTypesReducer";
import promoDiscountReducer from "./promoDiscountReducer";

const reducers = combineReducers({
   settings,
   sidebar: sidebarReducer,
   authUser: authUserReducer,
   driver: driverReducer,
   vehicle: vehicleReducer,
   admins: adminsReducer,
   loading: loadingReducer,
   passenger: passengerReducer,
   classTypes: classTypesReducer,
   bookingTypes: bookingTypesReducer,
   promoDiscounts: promoDiscountReducer
});

export default reducers;
