import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {SUPPORT_TICKETS, SUPPORT_TICKETS_COUNT, SUPPORT_TICKET_DETAILS} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createSupportTickets = (support_id, for_type, channel, desc, status, assigned_to, for_id) => async dispatch => {
  const body = {support_id, for_type, channel, desc, status, assigned_to, created_by_type: 'admin', for_id}
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.support}/api/v1.1/admin/tickets/`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('SupportTickets Created Successfully!');
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getSupportTickets = (page_no=1, status, spinner) => async dispatch => {
  try {
   spinner &&  dispatch(startLoading());
   !spinner && dispatch(startStatusLoading())
    const res = status ?
        await axios.get(`${api.support}/api/v1.1/admin/tickets/?page_no=${page_no}&no_per_page=20&status=${status}`) :
        await axios.get(`${api.support}/api/v1.1/admin/tickets/?page_no=${page_no}&no_per_page=20`)

    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: SUPPORT_TICKETS,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.message);


  }
};

export const getSupportTicket = (ticket_id, linerProgress) => async dispatch => {
  try {
   !linerProgress &&  dispatch(startLoading());
   linerProgress && dispatch(startStatusLoading())
    const res = await axios.get(`${api.support}/api/v1.1/admin/tickets/${ticket_id}/`)

    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: SUPPORT_TICKET_DETAILS,
        payload: res.data.data
      });
    }
    dispatch(endStatusLoading())
    dispatch(endLoading());
  } catch (err) {
    dispatch(endStatusLoading())
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message);


  }
};

export const getSupportTicketsCount = (status) => async dispatch => {
  try {
    const res = status ? await axios.get(`${api.support}/api/v1.1/admin/tickets/count/?status=${status}`) :
        await axios.get(`${api.support}/api/v1.1/admin/tickets/count/`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: SUPPORT_TICKETS_COUNT,
        payload: res.data.data
      });
    }
  } catch (err) {
    NotificationManager.error(err.response.data.message);


  }
};

export const updateSupportTickets = (ticket_id, status) => async dispatch => {
  const body = {status}
  try {
    await dispatch(startStatusLoading())
  const res =  await axios.put(`${api.support}/api/v1.1/admin/tickets/status_update/${ticket_id}/`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('Ticket Updated Successfully!');
      dispatch(getSupportTicket(ticket_id, true))
    }
    await dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    // NotificationManager.error(err.response.data.result);
  }
};

export const assignSupportTickets = (ticket_id, assigned_to) => async dispatch => {
    const body = {assigned_to}
    try {
        await dispatch(startStatusLoading())
        const res =  await axios.put(`${api.support}/api/v1.1/admin/tickets/${ticket_id}/`, body)
        if(res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
        }else {
            await NotificationManager.success('Ticket Updated Successfully!');
            dispatch(getSupportTicket(ticket_id, true))
        }
        await dispatch(endStatusLoading())
    } catch (err) {
        dispatch(endStatusLoading())
        // NotificationManager.error(err.response.data.result);
    }
};



