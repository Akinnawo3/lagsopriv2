import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {SUPPORT} from "Actions/types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createSupport = (ticket_id, user_id, user_type, channel, desc, status) => async dispatch => {
  const body = {ticket_id, user_id, user_type, channel, desc, status}
  try {
    await dispatch(startLoading());
     await axios.post(`${api.support}/api/supports/`, body)
     await NotificationManager.success('Support Created Successfully!');
     await dispatch(getSupport2());
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getSupport = () => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.get(`${api.support}/api/supports/`)
    dispatch({
      type: SUPPORT,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message);


  }
};

export const getSupport2 = () => async dispatch => {
  try {
    const res = await axios.get(`${api.support}/api/supports/`)
    dispatch({
      type: SUPPORT,
      payload: res.data
    });
  } catch (err) {
    NotificationManager.error(err.response.data.message);


  }
};


export const updateSupport = (id, status) => async dispatch => {
  const body = {status}
  try {
    await dispatch(startStatusLoading())
    await axios.put(`${api.support}/api/supports/${id}/`, body)
    await NotificationManager.success('Ticket Updated Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getSupport2());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};



