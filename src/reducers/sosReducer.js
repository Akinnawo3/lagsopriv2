import {FDT, FDT_DETAILS, SCHEDULE, SOS} from "Actions/types";


const initialState = {
  sos: [],
};

function sosReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SOS: {
      return {
        ...state,
        sos: payload,
      };
    }
    default:
      return state
  }
}

export default sosReducer;
