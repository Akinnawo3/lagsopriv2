import {USER_COUNT, USERS, USERS_LOCATION, ACTIVITY_LOGS, ACTIVITY_LOGS_COUNT, DOWNLOADS_BY_AREA, DOWNLOADS_BY_DATE} from "Actions/types";

const initialState = {
  users: [],
  userCount: 0,
  userLocation: [],
  downloadsByArea: [],
  downloadsByDate: [],
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
    case DOWNLOADS_BY_DATE: {
      return {
        ...state,
        downloadsByDate: payload,
      };
    }
    default:
      return state;
  }
}

export default usersReducer;
