import {USER_COUNT, USERS, USERS_LOCATION, ACTIVITY_LOGS, ACTIVITY_LOGS_COUNT, DOWNLOADS_BY_AREA} from "Actions/types";

const initialState = {
  users: [],
  userCount: 0,
  userLocation: [],
  downloadsByArea: [],
};

function usersReducer(state = initialState, action) {
  const {type, payload} = action;
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
    case USERS_LOCATION: {
      return {
        ...state,
        userLocation: payload,
      };
    }
    case ACTIVITY_LOGS: {
      return {
        ...state,
        userActivityLog: payload,
      };
    }
    case ACTIVITY_LOGS_COUNT: {
      return {
        ...state,
        AdminActivityLogCount: payload,
      };
    }
    case DOWNLOADS_BY_AREA: {
      return {
        ...state,
        downloadsByArea: payload,
      };
    }
    default:
      return state;
  }
}

export default usersReducer;
