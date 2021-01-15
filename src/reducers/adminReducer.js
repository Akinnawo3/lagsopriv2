import {ADMINS} from "Actions/types";

const initialState = {
  admins: [],
};

function adminsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADMINS: {
      return {
        ...state,
        admins: payload,
      };
    }
    default:
      return state
  }

}

export default adminsReducer;
