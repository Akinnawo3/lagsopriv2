import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {TICKET_TYPE, TICKET_TYPE_COUNT, TICKET} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createTicketType = (name, type_user, issues) => async dispatch => {
  const body = {name, type_user, issues}
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.support}/api/v1.1/admin/support/`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('Ticket Created Successfully!');
      await dispatch(getTicketTypes());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getTicketTypes = (page_no=1, spinner) => async dispatch => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.support}/api/v1.1/admin/support/?page_no=${page_no}&no_per_page=20`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: TICKET_TYPE,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    dispatch(endLoading());
    NotificationManager.error('network error, try again later');


  }
};

export const getTicketType = (support_id, spinner) => async dispatch => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.support}/api/v1.1/user/support/${support_id}/`)
    if(res.data.status === 'error') {
      // NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: TICKET,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    dispatch(endLoading());
    NotificationManager.error('network error, try again later');


  }
};



export const updateTicketType = (support_id, name, typeUser, issues) => async dispatch => {
  const body = {name, typeUser, issues}
  try {
    await dispatch(startStatusLoading())
  const res = await axios.put(`${api.support}/api/v1.1/admin/supports/${support_id}/`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('Ticket Updated Successfully!');
      await dispatch(getTicketTypes());
    }
    await dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    console.log(err)
    // NotificationManager.error(err.response.data.result);
  }
};

export const deleteTicketType = (support_id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
   const res = await axios.delete(`${api.support}/api/v1.1/admin/supports/${support_id}/`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('ClassType Deleted Successfully!');
      await dispatch(getTicketTypes())
    }
    await dispatch(endStatusLoading())
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const getTicketTypeCount = () => async dispatch => {
  try {
    const res = await axios.get(`${api.support}/api/v1.1/admin/support/count/`)
    dispatch({
      type: TICKET_TYPE_COUNT,
      payload: res.data.data
    });

  } catch (err) {
  }
};


