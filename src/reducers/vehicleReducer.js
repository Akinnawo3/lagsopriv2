import {
  VEHICLE,
  VEHICLES,
  VEHICLES_COUNT,
  VEHICLES_FEEDBACK,
  VEHICLES_FEEDBACK_COUNT,
  VEHICLES_FEEDBACK_DETAILS,
  VEHICLE_MILEAGE,
  VEHICLES_PERFORMANCE,
  VEHICLES_PERFORMANCE_COUNT,
} from "Actions/types";

const initialState = {
  vehicles: [],
  vehiclesFeedback: [],
  vehicleDetails: {},
  vehicleFeedbackDetails: {},
  vehiclesCount: 0,
  vehiclesFeedbackCount: 0,
  vehicleMileage: 0,
  vehiclesPerformance: [],
  vehiclesPerformanceCount: 0,
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
    case VEHICLES_PERFORMANCE: {
      return {
        ...state,
        vehiclesPerformance: payload,
      };
    }
    case VEHICLES_PERFORMANCE_COUNT: {
      return {
        ...state,
        vehiclesPerformanceCount: payload,
      };
    }
    default:
      return state;
  }
}

export default vehicleReducer;
