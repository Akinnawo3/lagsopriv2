import {ADMIN_COUNT, ADMINS} from "Actions/types";

const initialState = {
  admins: [],
  adminCount: 0,
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
    case ADMIN_COUNT: {
      return {
        ...state,
        adminCount: payload,
      };
    }
    default:
      return state
  }

}

export default adminsReducer;
