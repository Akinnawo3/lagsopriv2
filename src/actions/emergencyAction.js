import  axios from 'axios'
import {SOS} from "Actions/types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getSOS = () => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.sos}/api/sos/`);
    dispatch({
      type: SOS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
      NotificationManager.error(err.response.data.message)
  }
};

export const setSOSNumber = (number) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.post(`${api.sos}/api/numbers/`, {number});
   if(res.data) {
     await NotificationManager.success('Number Added Successfully!');
   }

    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message)
    console.log(err.response.data)
  }
};

export const getSOSNumber = (number) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.post(`${api.sos}/api/numbers/`, {number});
    console.log(res.data, 'uuuu')
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message)
    console.log(err.response.data)
  }
};

