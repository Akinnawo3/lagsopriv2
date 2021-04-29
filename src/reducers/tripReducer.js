import {DRIVER_TRIPS, TRIP_COUNT, TRIP_COUNT_DRIVER, TRIPS} from "Actions/types";


const initialState = {
  trips: [],
  tripCount: null,
  driverTrips: [],
  tripCountDriver: null,
};

function tripReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TRIPS: {
      return {
        ...state,
        trips: payload,
      };
    }
    case TRIP_COUNT: {
      return {
        ...state,
        tripCount: payload,
      };
    }
    case DRIVER_TRIPS: {
      return {
        ...state,
        driverTrips: payload,
      };
    }
    case TRIP_COUNT_DRIVER: {
      return {
        ...state,
        tripCountDriver: payload,
      };
    }
    default:
      return state
  }
}

export default tripReducer;
