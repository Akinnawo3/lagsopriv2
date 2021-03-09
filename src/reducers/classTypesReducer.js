import {CLASS_TYPE} from "Actions/types";

const initialState = {
  classTypes: [],
};

function classTypesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CLASS_TYPE: {
      return {
        ...state,
        classTypes: payload,
      };
    }
    default:
      return state
  }

}

export default classTypesReducer;
