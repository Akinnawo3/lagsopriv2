import {FDT, FDT_COUNT, FDT_DETAILS, SCHEDULE, SCHEDULE_COUNT, SCHEDULE_DETAILS} from "Actions/types";


const initialState = {
  fdt: [],
  fdtCount: 0,
  scheduleCount: 0,
  schedule: [],
  fdtDetails: {},
  scheduleDetails: {},
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
    case FDT_COUNT: {
      return {
        ...state,
        fdtCount: payload,
      };
    }
    case SCHEDULE: {
      return {
        ...state,
        schedule: payload,
      };
    }
    case SCHEDULE_COUNT: {
      return {
        ...state,
        scheduleCount: payload,
      };
    }
    case FDT_DETAILS: {
      return {
        ...state,
        fdtDetails: payload,
      };
    }
    case SCHEDULE_DETAILS: {
      return {
        ...state,
        scheduleDetails: payload,
      };
    }
    default:
      return state
  }
}

export default fdtReducer;
