import {DRIVER, DRIVER_LOCATION, DRIVERS, DRIVERS_COUNT, DRIVERS_LOCATION} from "Actions/types";


const initialState = {
  drivers: [],
  driver: {},
  driversCount: 0,
  driversLocation: [],
  driverLocation: []
};

function driverReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case DRIVERS: {
      return {
        ...state,
        drivers: payload,
      };
    }
    case DRIVER: {
      return {
        ...state,
        driver: payload,
      };
    }
    case DRIVERS_COUNT: {
      return {
        ...state,
        driversCount: payload,
      };
    }
    case DRIVERS_LOCATION: {
      return {
        ...state,
        driversLocation: payload,
      };
    }
    case DRIVER_LOCATION: {
      return {
        ...state,
        driverLocation: payload,
      };
    }
    default:
      return state
  }
}

export default driverReducer;
