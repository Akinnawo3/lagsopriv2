import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {USERS, USER_COUNT, USERS_LOCATION, ACTIVITY_LOGS, ACTIVITY_LOGS_COUNT, DOWNLOADS_BY_AREA, DRIVERS_LOCATION, DOWNLOADS_BY_DATE} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
import {sendMessage} from "./messagesAction";
import {onUserDetailsResetModalClose} from "../routes/users/users";
export const getUsers =
  (page_no = 1, loading) =>
  async (dispatch) => {
    try {
      loading && (await dispatch(startLoading()));
      !loading && dispatch(startStatusLoading());
      const res = await axios.get(`${api.user}/v1.1/admin/users?item_per_page=20&page=${page_no}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: USERS,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endLoading());
      dispatch(endStatusLoading());
    }
  };

export const getUserCount = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api.user}/v1.1/admin/users?component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: USER_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0,
      });
    }
  } catch (err) {}
};

export const ResetUserDetails = (body, emailData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.user}/v1.1/admin/users`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("User Detail Updated Successfully!");
      await dispatch(sendMessage(emailData));
      onUserDetailsResetModalClose();
      await dispatch(getUsers(1, false));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const changeKycStatus = (auth_id, kyc_status) => async (dispatch) => {
  console.log(typeof kyc_status);
  const body = {auth_id, kyc_status};
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.user}/v1.1/admin/user-kyc-status`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("User KYC status Updated Successfully!");
      await dispatch(getUsers(1, false));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const deleteUser = (auth_id, users) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.delete(`${api.user}/v1.1/admin/users/${auth_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("User deleted Successfully!");
      const userData = users.filter((user) => user.auth_id !== auth_id);
      dispatch({
        type: USERS,
        payload: userData,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const searchUsers = (searchData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const res2 = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}&component=count`);
      dispatch({
        type: USER_COUNT,
        payload: res2.data.data.total ? res2.data.data.total : 0,
      });
      dispatch({
        type: USERS,
        payload: res.data.data,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const getUsersLocation = (longitude, latitude) => async (dispatch) => {
  try {
    const res = await axios.get(`${api.user}/v1.1/admin/user-location/?latitude=${latitude}&longitude=${longitude}&user_type=rider`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: USERS_LOCATION,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const searchUserLocation = (data) => async (dispatch) => {
  try {
    dispatch({
      type: USERS_LOCATION,
      payload: [data],
    });
  } catch (err) {}
};

export const searchDriverLocation = (data) => async (dispatch) => {
  try {
    dispatch({
      type: DRIVERS_LOCATION,
      payload: [data],
    });
  } catch (err) {}
};

export const getAdminLogs =
  (page_no = 1, loading) =>
  async (dispatch) => {
    try {
      loading && (await dispatch(startLoading()));
      !loading && dispatch(startStatusLoading());
      const res = await axios.get(`${api.user}/v1.1/admin/logs/?item_per_page=20&page=${page_no}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: ACTIVITY_LOGS,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endLoading());
      dispatch(endStatusLoading());
    }
  };

export const getAdminLogsCount = (loading) => async (dispatch) => {
  try {
    loading && (await dispatch(startLoading()));
    !loading && dispatch(startStatusLoading());
    const res = await axios.get(`${api.user}/v1.1/admin/logs/?component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: ACTIVITY_LOGS_COUNT,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
  }
};

// export const getDownloadsByArea = (spinner) => async (dispatch) => {
//   try {
//     spinner && (await dispatch(startLoading()));
//     !spinner && dispatch(startStatusLoading());
//     const res = await axios.get(`${api.user}/v1.1/admin/download-stat?component=area`);
//     if (res.data.status === "error") {
//       NotificationManager.error(res.data.msg);
//     } else {
//       dispatch({
//         type: DOWNLOADS_BY_AREA,
//         payload: res.data.data,
//       });
//     }
//     dispatch(endLoading());
//     dispatch(endStatusLoading());
//   } catch (err) {
//     dispatch(endLoading());
//     dispatch(endStatusLoading());
//     NotificationManager.error(err.response.data.error);
//   }
// };

export const getDownloadsByArea = (spinner) => async (dispatch) => {
  try {
    spinner && (await dispatch(startLoading()));
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.area}/v1.1/areas?component=lga-group`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: DOWNLOADS_BY_AREA,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const getDownloadsByDate =
  (spinner, start_date, end_date, date_type = "monthly") =>
  async (dispatch) => {
    try {
      spinner && (await dispatch(startLoading()));
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(`${api.user}/v1.1/admin/download-stat?component=date&start_date=${start_date}&end_date=${end_date}&date_type=${date_type}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: DOWNLOADS_BY_DATE,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endLoading());
      dispatch(endStatusLoading());
      NotificationManager.error(err.response.data.error);
    }
  };
