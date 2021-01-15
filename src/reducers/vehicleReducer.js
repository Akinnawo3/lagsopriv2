import {VEHICLES} from "Actions/types";


const initialState = {
  vehicles: [],
};

function vehicleReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case VEHICLES: {
      return {
        ...state,
        vehicles: payload,
      };
    }
    default:
      return state
  }
}

export default vehicleReducer;
