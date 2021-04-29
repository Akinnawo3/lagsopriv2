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
import feesReducer from "./feesReducer";
import areasReducer from "./areaReducer";
import ticketTypesReducer from "./ticketTypesReducer";
import supportReducer from "./supportReducer";
import ratingReducer from "./ratingReducer";
import fdtReducer from "./fdtReducer";
import tripReducer from "./tripReducer";
import sosReducer from "./sosReducer";

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
   promoDiscounts: promoDiscountReducer,
   fees: feesReducer,
   areas: areasReducer,
   ticketTypes: ticketTypesReducer,
   support: supportReducer,
   rating: ratingReducer,
   fdt: fdtReducer,
   trips: tripReducer,
   sos: sosReducer,
});

export default reducers;
