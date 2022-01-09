import {SWITCH_ENVIRONMENT} from "Actions/types";

const initialState = {
  isTest: false,
};

function environmentReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SWITCH_ENVIRONMENT: {
      return {
        ...state,
        isTest: !state.isTest,
      };
    }
    default:
      return state;
  }
}

export default environmentReducer;
