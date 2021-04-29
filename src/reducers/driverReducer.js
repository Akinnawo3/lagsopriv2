import {DRIVER, DRIVERS} from "Actions/types";


const initialState = {
  drivers: [],
  driver: {},
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
    default:
      return state
  }
}

export default driverReducer;
