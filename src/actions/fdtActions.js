import  axios from 'axios'
import {FDT, SCHEDULE, FDT_DETAILS} from "Actions/types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getFdt = () => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.fdt}/api/fdts/`);
    dispatch({
      type: FDT,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
      NotificationManager.error(err.response.data.result)
  }
};

export const getSchedule = () => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.fdt}/api/fdts/?fdtStatus=2`);
    dispatch({
      type: SCHEDULE,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result)
  }
};

export const getFdtDetails = (id) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.fdt}/api/fdt/${id}/`);
    dispatch({
      type: FDT_DETAILS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result)
  }
};






