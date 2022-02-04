import {NOTIFICATION, UPDATE_COUNTER, CLEAR_COUNTER} from "Actions/types";

const initialState = {
  notifications: [],
  counter: false,
};

function notificationReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case NOTIFICATION: {
      return {
        ...state,
        notifications: payload,
      };
    }
    case UPDATE_COUNTER: {
      return {
        ...state,
        counter: !Array.isArray(payload),
      };
    }
    default:
      return state;
  }
}

export default notificationReducer;
