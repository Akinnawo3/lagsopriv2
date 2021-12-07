import axios from "axios";
import api from "../environments/environment";
import {NotificationManager} from "react-notifications";
import {endStatusLoading, startStatusLoading} from "./loadingAction";

export const sendMessage = (body) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.messageSending}/v1.1/messages/send`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Signin details sent!");
    }
    dispatch(endStatusLoading());
  } catch (e) {
    console.log(e);
    dispatch(endStatusLoading());
    NotificationManager.error("wahala error");
  }
};