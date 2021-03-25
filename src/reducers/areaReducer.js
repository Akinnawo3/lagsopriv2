import {AREAS} from "Actions/types";

const initialState = {
  areas: [],
};

function areasReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case AREAS: {
      return {
        ...state,
        areas: payload,
      };
    }
    default:
      return state
  }

}

export default areasReducer;
