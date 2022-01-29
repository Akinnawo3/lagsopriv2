import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NOTIFICATION} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const getNotifications = (spinner, page, userType) => async (dispatch) => {
  try {
    spinner && (await dispatch(startLoading()));
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.socket}/v1.1/notifications`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: NOTIFICATION,
        payload: res.data.data ? res.data.data : [],
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    dispatch(endLoading());
    NotificationManager.error(err.response.data.error);
  }
};
