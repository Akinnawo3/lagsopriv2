import {USER_COUNT, USERS, USERS_LOCATION, ACTIVITY_LOGS, ACTIVITY_LOGS_COUNT, DOWNLOADS_BY_AREA, DOWNLOADS_BY_DATE} from "Actions/types";

const initialState = {
  users: [],
  userCount: 0,
  userLocation: [],
  downloadsByArea: [],
  downloadsByDate: new Array(12).fill(0),
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
      // let copiedchartDatauio = chartData.slice();
      // chartData.map((item, itemIndex) => {
      //   downloadsByDate.map((downloadsData, downloadsDataIndex) => {
      //     if (downloadsData.date_value === itemIndex + 1) {
      //       copiedchartData[itemIndex] = downloadsData.total;
      //     }
      //   });
      //   date_value;
      // });
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
      let copiedData = state.downloadsByDate.slice();
      if (payload.length > 0) {
        payload.map((item) => {
          copiedData[item.date_value - 1] = item.total;
        });
      }
      return {
        ...state,
        downloadsByDate: copiedData,
      };
    }
    default:
      return state;
  }
}

export default usersReducer;
