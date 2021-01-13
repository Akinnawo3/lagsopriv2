import {
  VEHICLE_BY_USER,
  VEHICLE_MODAL_CREATE,
  VEHICLE_MODAL_DELETE,
  DELETE_VEHICLE,
  CLOSE_MODAL_DELETE_VEHICLE,
  LOADING_VEHICLE,
  VEHICLE_ERROR,
  SEARCH_VEHICLE,
  REMOVE_VEHICLE_ERROR,
  VEHICLE_MODAL_UPDATE,
  VEHICLE_BY_ALL,
  VEHICLE_BY_ME,
  VEHICLES_MONTH_QUERY
} from "Actions/types";

const initialState = {
  vehicles: null,
  vehicle: null,
  VehicleModalCreate: false,
  VehicleModalUpdate: false,
  VehicleModalDelete: false,
  DeleteID: null,
  DeleteRes: null,
  isLoading: false,
  error: null,
  vehicleId: null,
  vehiclesAll: null,
  vehiclesMe: null,
  vehicleMonthQuery: null
};

function vehicleReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case VEHICLE_BY_USER: {
      return {
        ...state,
        vehicle: null,
        error: null,
        vehicles: payload,
        isLoading: false,
        VehicleModalUpdate: false,
      };
    }

    case VEHICLE_BY_ALL: {
      return {
        ...state,
        vehicle: null,
        error: null,
        vehiclesAll: payload,
        isLoading: false,
        VehicleModalUpdate: false,
      };
    }

    case VEHICLE_BY_ME: {
      return {
        ...state,
        vehicle: null,
        error: null,
        vehiclesMe: payload,
        isLoading: false,
        VehicleModalUpdate: false,
      };
    }
    case SEARCH_VEHICLE: {
      return {
        ...state,
        vehicles: null,
        error: null,
        vehicle: payload,
        isLoading: false

      };
    }
    case  VEHICLE_MODAL_CREATE: {
      return {
        ...state,
        VehicleModalCreate: !state.VehicleModalCreate
      };
    }
    case  VEHICLE_MODAL_DELETE: {
      return {
        ...state,
        VehicleModalDelete: !state.VehicleModalDelete,
        DeleteID: payload
      };
    }
    case   DELETE_VEHICLE: {
      return {
        ...state,
        DeleteRes: payload
      };
    }

    case  VEHICLE_MODAL_UPDATE: {
      return {
        ...state,
        vehicleId: payload,
        VehicleModalUpdate: !state.VehicleModalUpdate
      };
    }
    case   CLOSE_MODAL_DELETE_VEHICLE: {
      return {
        ...state,
        VehicleModalDelete: false
      };
    }
    case LOADING_VEHICLE: {
      return {
        ...state,
        isLoading: true
      };
    }
    case VEHICLE_ERROR: {
      return {
        ...state,
        vehicles: null,
        vehicle: null,
        error: payload,
        isLoading: false
      };
    }
    case REMOVE_VEHICLE_ERROR: {
      return {
        ...state,
        error: null,

      };
    }
    case VEHICLES_MONTH_QUERY: {
      return {
        ...state,
        vehicleMonthQuery: payload,

      };
    }
    default:
      return state
  }
}

export default vehicleReducer;
