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
        counter: payload === [] ? false : true,
      };
    }
    // case CLEAR_COUNTER: {
    //   return {
    //     ...state,
    //     counter: 0,
    //   };
    // }
    default:
      return state;
  }
}

export default notificationReducer;
