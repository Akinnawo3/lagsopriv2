import {USER_COUNT, USERS} from "Actions/types";

const initialState = {
  users: [],
  userCount: 0,
};

function usersReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USERS: {
      return {
        ...state,
        users: payload,
      };
    }
    case USER_COUNT: {
      return {
        ...state,
        userCount: payload,
      };
    }
    default:
      return state
  }

}

export default usersReducer;
