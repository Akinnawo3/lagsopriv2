import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {SUPPORT_TICKETS, SUPPORT_TICKETS_COUNT, SUPPORT_TICKET_DETAILS, CONTACT_US, CONTACT_US_COUNT, CONTACT_US_DETAILS} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";


export const createSupportTickets = (support_id, channel, comment, status, assigned_to, auth_id) => async dispatch => {
  const body = {support_id, channel, comment, status, assigned_to, auth_id}
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.support}/v1.1/supports/issue-log`, body)
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

export const getSupportTickets = (page=1, status='', spinner) => async dispatch => {
  try {
   spinner &&  dispatch(startLoading());
   !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.support}/v1.1/supports/issue-log/?page=${page}&item_per_page=20&status=${status}`)

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

export const getSupportTicket = (issue_id, linerProgress) => async dispatch => {
  try {
   !linerProgress &&  dispatch(startLoading());
   linerProgress && dispatch(startStatusLoading())
    const res = await axios.get(`${api.support}/v1.1/supports/issue-log/${issue_id}`)

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
    const res = await axios.get(`${api.support}/v1.1/supports/issue-log/?component=count&&status=${status}`)

    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: SUPPORT_TICKETS_COUNT,
        payload: res.data.data?.total
      });
    }
  } catch (err) {
    NotificationManager.error(err.response.data.message);


  }
};

export const updateSupportTickets = (issue_id, status) => async dispatch => {
  const body = {status}
  try {
    await dispatch(startStatusLoading())
  const res =  await axios.put(`${api.support}/v1.1/supports/issue-log/${issue_id}`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('Ticket Updated Successfully!');
      dispatch(getSupportTicket(issue_id, true))
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

export const getContactUs = (spinner, page=1) => async dispatch => {
    try {
        spinner &&  dispatch(startLoading());
        !spinner && dispatch(startStatusLoading())
        const res = await axios.get(`${api.support}/v1.1/contacts/?page=${page}&item_per_page=20`)
        if(res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
        }else {
            dispatch({
                type: CONTACT_US,
                payload: res.data.data
            });
        }
        dispatch(endLoading());
        dispatch(endStatusLoading())
    } catch (err) {
        dispatch(endLoading());
        dispatch(endStatusLoading())


    }
};

export const getContactUsCount = () => async dispatch => {
    try {
        const res = await axios.get(`${api.support}/v1.1/contacts/?component=count`)
        if(res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
        }else {
            dispatch({
                type: CONTACT_US_COUNT,
                payload: res.data?.data[0].total ? res.data.data[0].total : 0
            });
        }
    } catch (err) {



    }
};

export const getContactUsDetails = (id) => async dispatch => {
    try {
          dispatch(startLoading());
        const res = await axios.get(`${api.support}/v1.1/contacts/${id}`)
        if(res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
        }else {
            dispatch({
                type: CONTACT_US_DETAILS,
                payload: res.data.data
            });
        }
        dispatch(endLoading());
    } catch (err) {
        dispatch(endLoading());
    }
};




