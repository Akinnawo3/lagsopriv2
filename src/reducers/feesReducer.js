import {FEE_TYPE} from "Actions/types";

const initialState = {
  fees: [],
};

function feesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case FEE_TYPE: {
      return {
        ...state,
        fees: payload,
      };
    }
    default:
      return state
  }

}

export default feesReducer;
