import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {AREAS, CANCELLATION_REASONS} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



export const createCR = (reason, type) => async dispatch => {

  const body = {reason, type}
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.cancellationReasons}/v1.1/reasons`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {

      await NotificationManager.success('Reason Created Successfully!');
      await dispatch(getCR());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const getCR = (spinner) => async dispatch => {
  try {
  spinner &&  await dispatch(startLoading());
  !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.cancellationReasons}/v1.1/reasons`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: CANCELLATION_REASONS,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    dispatch(endLoading());
    NotificationManager.error(err.response.data.error);


  }
};

export const updateCR = (id,  reason, type) => async dispatch => {

  const body = {reason, type}
  try {
    await dispatch(startStatusLoading());
    const res = await axios.put(`${api.cancellationReasons}/v1.1/reasons/${id}`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {

      await NotificationManager.success('Reason Updated Successfully!');
      await dispatch(getCR());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};


export const deleteCR = (id, reasons) => async dispatch => {
  try {
    dispatch(startStatusLoading())
   const res = await axios.delete(`${api.cancellationReasons}/v1.1/reasons/${id}`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('Cancellation reason deleted Successfully!');
      const reasonData = reasons.filter(reason => reason._id !== id)
      dispatch({
        type: CANCELLATION_REASONS,
        payload: reasonData
      });
    }
    dispatch(endStatusLoading())
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error('error occurred');
  }
};


