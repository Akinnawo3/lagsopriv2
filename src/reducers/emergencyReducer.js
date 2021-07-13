import {SOS, SOS_COUNT, SOS_DETAILS, SOS_NUMBERS, SOS_USER_DETAILS} from "Actions/types";


const initialState = {
  sos: [],
  sosDetails: {},
  sosUserDetails: {},
  sosCount: 0,
  sosNumbers: [],
};

function emergencyReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SOS: {
      return {
        ...state,
        sos: payload,
      };
    }
    case SOS_DETAILS: {
      return {
        ...state,
        sosDetails: payload,
      };
    }
    case SOS_USER_DETAILS: {
      return {
        ...state,
        sosUserDetails: payload,
      };
    }
    case SOS_NUMBERS: {
      return {
        ...state,
        sosNumbers: payload,
      };
    }
    case SOS_COUNT: {
      return {
        ...state,
        sosCount: payload,
      };
    }
    default:
      return state
  }
}

export default emergencyReducer;
