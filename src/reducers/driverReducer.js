import {DRIVER, DRIVERS, DRIVERS_COUNT} from "Actions/types";


const initialState = {
  drivers: [],
  driver: {},
  driversCount: 0
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
    default:
      return state
  }
}

export default driverReducer;
