import {VEHICLE, VEHICLES, VEHICLES_COUNT} from "Actions/types";


const initialState = {
  vehicles: [],
  vehicleDetails: {},
  vehiclesCount: 0,
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
    case VEHICLE: {
      return {
        ...state,
        vehicleDetails: payload,
      };
    }
    case VEHICLES_COUNT: {
      return {
        ...state,
        vehiclesCount: payload,
      };
    }
    default:
      return state
  }
}

export default vehicleReducer;
