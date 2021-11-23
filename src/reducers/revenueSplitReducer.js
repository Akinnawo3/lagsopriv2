import { REVENUE_SPLIT_DATA } from "Actions/types";

const initialState = {
  revenueSplitData: {},
};

function revenueSplitReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REVENUE_SPLIT_DATA: {
      return {
        ...state,
        revenueSplitData: payload,
      };
    }
    default:
      return state;
  }
}

export default revenueSplitReducer;
