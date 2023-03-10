/**
 * App Reducers
 */
import {combineReducers} from "redux";
import settings from "./settings";
import sidebarReducer from "./SidebarReducer";
import authUserReducer from "./AuthUserReducer";
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
import emergencyReducer from "./emergencyReducer";
import usersReducer from "./userReducer";
import cancellationReasonReducer from "./cancellationReasonReducer";
import referralReducer from "./referralReducer";
import walletReducer from "./walletReducer";
import paymentReducer from "./paymentReducer";
import customerCareReducer from "./customerCareReducer";
import revenueSplitReducer from "./revenueSplitReducer";
import idVerificationReducer from "./idVerificationReducer";
import environmentReducer from "./environmentReducer";
import notificationReducer from "./notificationReducer";
import geoFenceReducer from "./geoFenceReducer";
import oemReducer from "./oemReducer";
import partnersReducer from "./partnersReducer";
import serviceRequestReducer from "./serviceRequestReducer";

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
  sos: emergencyReducer,
  users: usersReducer,
  cancellationReasons: cancellationReasonReducer,
  referrals: referralReducer,
  wallets: walletReducer,
  payments: paymentReducer,
  customerCare: customerCareReducer,
  revenueSplit: revenueSplitReducer,
  idVerification: idVerificationReducer,
  environment: environmentReducer,
  notification: notificationReducer,
  geoFence: geoFenceReducer,
  oem: oemReducer,
  partners: partnersReducer,
  serviceRequests: serviceRequestReducer,
});

export default reducers;
