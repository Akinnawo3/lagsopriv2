import {DRIVERS} from "Actions/types";


const initialState = {
  drivers: [],
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
    default:
      return state
  }
}

export default driverReducer;
