import {VEHICLE, VEHICLES, VEHICLES_COUNT, VEHICLES_FEEDBACK, VEHICLES_FEEDBACK_COUNT, VEHICLES_FEEDBACK_DETAILS, VEHICLE_MILEAGE} from "Actions/types";

const initialState = {
  vehicles: [],
  vehiclesFeedback: [],
  vehicleDetails: {},
  vehicleFeedbackDetails: {},
  vehiclesCount: 0,
  vehiclesFeedbackCount: 0,
  vehicleMileage: 0,
};

function vehicleReducer(state = initialState, action) {
  const {type, payload} = action;
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
    case VEHICLE_MILEAGE: {
      return {
        ...state,
        vehicleMileage: payload,
      };
    }
    case VEHICLES_FEEDBACK_DETAILS: {
      return {
        ...state,
        vehicleFeedbackDetails: payload,
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
      return state;
  }
}

export default vehicleReducer;
