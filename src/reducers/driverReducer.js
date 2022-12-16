import { DRIVER, DRIVER_LOCATION, DRIVERS, DRIVERS_COUNT, DRIVERS_LOCATION, DRIVER_PAYOUT, DRIVER_PAYOUT_COUNT } from "Actions/types";

const initialState = {
  drivers: [],
  driver: {},
  driversCount: 0,
  driversLocation: [],
  driverLocation: [],
  driverPayout: [],
  driverPayoutCount: 0,
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
    case DRIVER_PAYOUT: {
      return {
        ...state,
        driverPayout: payload,
      };
    }
    case DRIVER_PAYOUT_COUNT: {
      return {
        ...state,
        driverPayoutCount: payload,
      };
    }
    default:
      return state;
  }
}

export default driverReducer;
