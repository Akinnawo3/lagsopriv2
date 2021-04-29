import {FDT, FDT_DETAILS, SCHEDULE} from "Actions/types";


const initialState = {
  fdt: [],
  schedule: [],
  fdtDetails: {},
};

function fdtReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FDT: {
      return {
        ...state,
        fdt: payload,
      };
    }
    case SCHEDULE: {
      return {
        ...state,
        schedule: payload,
      };
    }
    case FDT_DETAILS: {
      return {
        ...state,
        fdtDetails: payload,
      };
    }
    default:
      return state
  }
}

export default fdtReducer;
