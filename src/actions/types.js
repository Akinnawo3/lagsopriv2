/**
 * App Redux Action Types
 */
export const COLLAPSED_SIDEBAR = "COLLAPSED_SIDEBAR";
export const DARK_MODE = "DARK_MODE";
export const BOXED_LAYOUT = "BOXED_LAYOUT";
export const RTL_LAYOUT = "RTL_LAYOUT";
export const MINI_SIDEBAR = "MINI_SIDEBAR";
export const SEARCH_FORM_ENABLE = "SEARCH_FORM_ENABLE";
export const CHANGE_THEME_COLOR = "CHANGE_THEME_COLOR";
export const TOGGLE_SIDEBAR_IMAGE = "TOGGLE_SIDEBAR_IMAGE";
export const SET_SIDEBAR_IMAGE = "SET_SIDEBAR_IMAGE";
export const SET_LANGUAGE = "SET_LANGUAGE";
export const START_USER_TOUR = "START_USER_TOUR";
export const STOP_USER_TOUR = "STOP_USER_TOUR";
export const TOGGLE_DARK_SIDENAV = "TOGGLE_DARK_SIDENAV";

// Agency Sidebar
export const AGENCY_TOGGLE_MENU = "AGENCY_TOGGLE_MENU";
export const CHANGE_AGENCY_LAYOUT_BG = "CHANGE_AGENCY_LAYOUT_BG";

// sidebar
export const TOGGLE_MENU = "TOGGLE_MENU";

// Auth Actions
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";
// export const SIGNUP_USER = 'SIGNUP_USER';
// export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
// export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
//

//driver
export const DRIVERS = "DRIVERS";
export const DRIVER = "DRIVER";
export const DRIVERS_COUNT = "DRIVERS_COUNT";
export const DRIVERS_LOCATION = "DRIVERS_LOCATION";
export const DRIVER_LOCATION = "DRIVER_LOCATION";

//vehicle
export const VEHICLES = "VEHICLES";
export const VEHICLES_COUNT = "VEHICLES_COUNT";
export const VEHICLE = "VEHICLE";
export const VEHICLES_FEEDBACK = "VEHICLES_FEEDBACK";
export const VEHICLES_FEEDBACK_COUNT = "VEHICLES_FEEDBACK_COUNT";

//Admins
export const ADMINS = "ADMINS";
export const ADMIN_COUNT = "ADMIN_COUNT";

//loading
export const LOADING_START = "LOADING_START";
export const LOADING_END = "LOADING_END";
export const LOADING_STATUS_START = "LOADING_STATUS_START";
export const LOADING_STATUS_END = "LOADING_STATUS_END";

export const PASSENGERS = "PASSENGERS";
export const PASSENGER = "PASSENGER";
export const PASSENGER_COUNT = "PASSENGER_COUNT";

//class Types
export const CLASS_TYPE = "CLASS_TYPE";

//Booking Type
export const BOOKING_TYPE = "BOOKING_TYPE";

//Promo
export const PROMO_TYPE = "PROMO_TYPE";
export const PROMO_COUNT = "PROMO_COUNT";
export const PROMO_DETAILS = "PROMO_DETAILS";
export const PROMO_USERS = "PROMO_USERS";
export const PROMO_USERS_COUNT = "PROMO_USERS_COUNT";

//referral
export const REFERRAL = "REFERRAL";
export const REFERRAL_COUNT = "REFERRAL_COUNT";
export const REFERRAL_PAYMENT_DETAILS = "REFERRAL_PAYMENT_DETAILS";

//Fee type

export const FEE_TYPE = "FEE_TYPE";

export const AREAS = "AREAS";
export const AREA_COUNT = "AREA_COUNT";
export const DOWNLOADS_BY_AREA = "DOWNLOADS_BY_AREA";
export const DOWNLOADS_BY_DATE = "DOWNLOADS_BY_DATE";

export const CANCELLATION_REASONS = "CANCELLATION_REASONS";

export const TICKET_TYPE = "TICKET_TYPE";
export const TICKET = "TICKET";
export const TICKET_TYPE_COUNT = "TICKET_TYPE_COUNT";
export const SUPPORT_TICKETS = "SUPPORT_TICKETS";
export const SUPPORT_TICKETS_COUNT = "SUPPORT_TICKETS_COUNT";
export const SUPPORT_TICKET_DETAILS = "SUPPORT_TICKET_DETAILS";

export const RATINGS = "RATINGS";
export const RATING_COUNT = "RATING_COUNT";
export const RATING = "RATING";
export const RATING_USER = "RATING_USER";
export const RATING_COUNT_USER = "RATING_COUNT_USER";
export const RATING_USER_AVERAGE = "RATING_USER_AVERAGE";
export const FDT = "FDT";
export const SCHEDULE = "SCHEDULE";
export const FDT_DETAILS = "FDT_DETAILS";
export const SCHEDULE_DETAILS = "SCHEDULE_DETAILS";
export const FDT_COUNT = "FDT_COUNT";
export const SCHEDULE_COUNT = "SCHEDULE_COUNT";
export const TRIPS = "TRIPS";
export const TRIP = "TRIP";
export const TRIP_COUNT_DRIVER_ALL = "TRIP_COUNT_DRIVER_ALL";
export const TRIP_COUNT_DRIVER_COMPLETED = "RIP_COUNT_DRIVER_COMPLETED";
export const TRIP_COUNT_DRIVER_CANCELLED = "TRIP_COUNT_DRIVER_CANCELLED";
export const TRIP_COUNT = "TRIP_COUNT";
export const DRIVER_TRIPS = "DRIVER_TRIPS";
export const TRIP_COUNT_DRIVER = "TRIP_COUNT_DRIVER";
export const TRIP_COUNT_PASSENGER_COMPLETED = "TRIP_COUNT_PASSENGER_COMPLETED";
export const TRIP_COUNT_PASSENGER_ALL = "TRIP_COUNT_PASSENGER_ALL";
export const TRIP_COUNT_PASSENGER_CANCELLED = "TRIP_COUNT_PASSENGER_CANCELLED";
export const TRIP_COUNT_PASSENGER = "TRIP_COUNT_PASSENGER";
export const PASSENGER_TRIPS = "PASSENGER_TRIPS";
export const TRIP_COUNT_WAITING_USERS = "TRIP_COUNT_WAITING_USERS";
export const TRIP_COUNT_MOVING_USERS = "TRIP_COUNT_MOVING_USERS";
export const TRIP_COUNT_WAITING_DRIVERS = "TRIP_COUNT_WAITING_DRIVERS";
export const TRIP_COUNT_MOVING_DRIVERS = "TRIP_COUNT_MOVING_DRIVERS";
export const ACTUAL_LOCATION = "ACTUAL_LOCATION_FROM_COORDINATES";

export const SOS = "SOS";
export const SOS_COUNT = "SOS_COUNT";
export const SOS_DETAILS = "SOS_DETAILS";
export const SOS_USER_DETAILS = "SOS_USER_DETAILS";
export const SOS_NUMBERS = "SOS_NUMBERS";

//users
export const USERS = "USERS";
export const USER_COUNT = "USER_COUNT";
export const USERS_LOCATION = "USERS_LOCATION";
export const ACTIVITY_LOGS = "ACTIVITY_LOGS";
export const ACTIVITY_LOGS_COUNT = "ACTIVITY_LOGS_COUNT";

//wallets
export const WALLETS = "WALLETS";
export const WALLETS_COUNT = "WALLETS_COUNT";
export const WALLET = "WALLET";
export const WALLETS_TRANSACTIONS = "WALLETS_TRANSACTIONS";
export const WALLETS_TRANSACTIONS_COUNT = "WALLETS_TRANSACTIONS_COUNT";
export const PAYMENTS = "PAYMENTS";
export const PAYMENTS_COUNT = "PAYMENTS_COUNT";
export const PAYMENT = "PAYMENT";
export const PAYMENTS_SERVICE = "PAYMENTS_SERVICE";
export const PAYMENT_SERVICE_DETAILS = "PAYMENT_SERVICE_DETAILS";
export const PAYMENTS_SERVICE_COUNT = "PAYMENTS_SERVICE_COUNT";
export const PAYMENTS_SERVICE_BALANCE = "PAYMENTS_SERVICE_BALANCE";
export const PAYMENTS_SERVICE_BALANCE_INDIVIDUAL = "PAYMENTS_SERVICE_BALANCE_INDIVIDUAL";
export const FINANCE_WALLET = "FINANCE_WALLET"
export const FINANCE_TRIP = "FINANCE_TRIP"
export const FINANCE_SERVICE = "FINANCE_SERVICE"

export const CONTACT_US = "CONTACT_US";
export const CONTACT_US_COUNT = "CONTACT_US_COUNT";
export const CONTACT_US_DETAILS = "CONTACT_US_DETAILS";

export const CUSTOMER_CARE = "CUSTOMER_CARE";

//revenue split

export const REVENUE_SPLIT_DATA = "REVENUE_SPLIT_DATA";
export const DRIVER_REVENUE_SPLIT = "DRIVER_REVENUE_SPLIT";
export const CHART_REVENUE_DATA = "CHART_REVENUE_DATA";

//ID verificaion
export const VERIFICATION_RESULT = "VERIFICATION_RESULT";

//Environment

export const SWITCH_ENVIRONMENT = "SWITCH_ENVIRONMENT";

//notifications
export const NOTIFICATION = "NOTIFICATION";
export const UPDATE_COUNTER = "UPDATE_COUNTER";
export const CLEAR_COUNTER = "CLEAR_COUNTER";

//geo-fencing
export const GEOFENCES = "GEOFENCES";
export const FENCES_COUNT = "FENCES_COUNT";

//oem
export const OEMS = "OEMS";
export const OEMS_COUNT = "OEMS_COUNT";
export const OEMS_VEHICLES = "OEMS_VEHICLES";
