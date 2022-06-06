import {SERVICE_REQUESTS, SERVICE_REQUEST_COUNT, SERVICE_REQUEST} from "Actions/types";

const initialState = {
  serviceRequests: [],
  serviceRequestsCount: 0,
  serviceRequest: "",
};

function serviceRequestReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SERVICE_REQUESTS: {
      return {
        ...state,
        serviceRequests: payload,
      };
    }
    case SERVICE_REQUEST_COUNT: {
      return {
        ...state,
        serviceRequestsCount: payload,
      };
    }
    case SERVICE_REQUEST: {
      return {
        ...state,
        serviceRequest: payload,
      };
    }
    default:
      return state;
  }
}

export default serviceRequestReducer;
