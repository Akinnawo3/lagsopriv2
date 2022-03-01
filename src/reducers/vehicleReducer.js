import {VEHICLE, VEHICLES, VEHICLES_COUNT, VEHICLES_FEEDBACK, VEHICLES_FEEDBACK_COUNT} from "Actions/types";


const initialState = {
  vehicles: [],
  vehiclesFeedback: [],
  vehicleDetails: {},
  vehiclesCount: 0,
  vehiclesFeedbackCount: 0,
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
    case VEHICLES_FEEDBACK: {
      return {
        ...state,
        vehiclesFeedback: payload,
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
    case VEHICLES_FEEDBACK_COUNT: {
      return {
        ...state,
        vehiclesFeedbackCount: payload,
      };
    }
    default:
      return state
  }
}

export default vehicleReducer;
