import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {VERIFICATION_RESULT} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const sendVerificationRequest = (id_type, id_value, first_name, last_name) => async (dispatch) => {
  const body = {id_type, id_value, first_name, last_name};
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.idVerification}/v1.1/identities/verify`, body);
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
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};
