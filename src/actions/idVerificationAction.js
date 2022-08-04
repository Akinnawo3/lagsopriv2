import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {VERIFICATION_RESULT} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const sendVerificationRequest = (body) => async (dispatch) => {
  try {
    await dispatch(startStatusLoading());
    const res = body?.id_type !== "lassra" ? await axios.post(`${api.idVerification}/v1.1/identities/verify`, body) : await axios.post(`${api.idVerification}/v1.1/identities/lassra`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
      dispatch({
        type: VERIFICATION_RESULT,
        payload: res.data,
      });
    } else {
      dispatch({
        type: VERIFICATION_RESULT,
        payload: res.data.data,
      });
      dispatch(endStatusLoading());
      return res.data.data;
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch({
      type: VERIFICATION_RESULT,
      payload: err.response.data.error,
    });
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};
