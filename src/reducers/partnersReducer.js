import {PARTNERS, PARTNERS_COUNT} from "Actions/types";

const initialState = {
  partners: [],
  partnersCount: 0,
};

function partnersReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PARTNERS: {
      return {
        ...state,
        partners: payload,
      };
    }
    case PARTNERS_COUNT: {
      return {
        ...state,
        partnersCount: payload,
      };
    }
    default:
      return state
  }

}

export default partnersReducer;
