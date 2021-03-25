import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {TICKET_TYPE} from "Actions/types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createTicketType = (name) => async dispatch => {
  const body = {name}
  try {
    await dispatch(startLoading());
     await axios.post(`${api.ticket}/apitickets/`, body)
     await NotificationManager.success('Ticket Created Successfully!');
     await dispatch(getTicketTypes2());
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getTicketTypes = () => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.get(`${api.ticket}/apitickets/`)
    dispatch({
      type: TICKET_TYPE,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message);


  }
};

export const getTicketTypes2 = () => async dispatch => {
  try {
    const res = await axios.get(`${api.ticket}/apitickets/`)
    dispatch({
      type: TICKET_TYPE,
      payload: res.data
    });
  } catch (err) {
    NotificationManager.error(err.response.data.message);


  }
};


export const updateTicketType = (id, name) => async dispatch => {
  const body = {name}
  try {
    await dispatch(startStatusLoading())
    await axios.put(`${api.classTypes}/apitickets/${id}/`, body)
    await NotificationManager.success('Ticket Updated Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getTicketTypes2());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteTicketType = (id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    await axios.delete(`${api.classTypes}/apitickets/${id}/`)
    await NotificationManager.success('ClassType Deleted Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getTicketTypes2());
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};


