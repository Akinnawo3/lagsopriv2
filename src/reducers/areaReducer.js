import {AREA_COUNT, AREAS} from "Actions/types";

const initialState = {
  areas: [],
  areaCount: 0,
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
    case AREA_COUNT: {
      return {
        ...state,
        areaCount: payload,
      };
    }
    default:
      return state
  }

}

export default areasReducer;
