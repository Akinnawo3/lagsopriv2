import {SUPPORT} from "Actions/types";

const initialState = {
  support: [],
};

function supportReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SUPPORT: {
      return {
        ...state,
        support: payload,
      };
    }
    default:
      return state
  }

}

export default supportReducer;
