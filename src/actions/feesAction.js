import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {FEE_TYPE} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



export const createFee = (name, amount, desc) => async dispatch => {

  const body = {name, amount, desc}
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.fees}/v1.1/fees`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {

      await NotificationManager.success('Fee Created Successfully!');
      await dispatch(getFees());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const getFees = (spinner) => async dispatch => {
  try {
  spinner &&  await dispatch(startLoading());
  !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.fees}/v1.1/fees`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: FEE_TYPE,
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

export const updateFee = (id,  name, amount, desc) => async dispatch => {

  const body = {name, amount, desc}
  try {
    await dispatch(startStatusLoading());
    const res = await axios.put(`${api.fees}/v1.1/fees/${id}`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {

      await NotificationManager.success('Fee Updated Successfully!');
      await dispatch(getFees());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};


export const deleteFee = (id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    await axios.delete(`${api.fees}/api/feeTypes/${id}/`)
    await NotificationManager.success('Fee Deleted Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getFees2());
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};


