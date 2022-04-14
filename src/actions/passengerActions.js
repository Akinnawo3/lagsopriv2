import  axios from 'axios'
import {PASSENGERS, PASSENGER, PASSENGER_COUNT} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getPassengers = (page_no=1, spinner, start_date = "", end_date = "") => async dispatch => {
  try {
   spinner && dispatch(startLoading());
   !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=rider&item_per_page=20&page=${page_no}&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: PASSENGERS,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading())
      NotificationManager.error(err.response.data.result)
  }
};

export const getPassengerCount = (start_date = "", end_date = "") => async dispatch => {
  try {
    const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=rider&component=count&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: PASSENGER_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0
      });
    }
  } catch (err) {
  }
};



export const getPassenger = (auth_id) => async dispatch => {
  try {
    dispatch(startLoading())
    const res = await axios.get(`${api.user}/v1.1/admin/users/${auth_id}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: PASSENGER,
        payload: res.data.data
      });
    }
    dispatch(endLoading())
  } catch (err) {
    dispatch(endLoading())
  }
};


export const searchPassengers = (searchData) => async dispatch => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=rider&q=${searchData}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      const res2 = await axios.get(`${api.user}/v1.1/admin/users?user_type=rider&component=count&q=${searchData}`);
      dispatch({
        type: PASSENGER_COUNT,
        payload: res2.data.data.total ? res2.data.data.total : 0
      });
      dispatch({
        type: PASSENGERS,
        payload: res.data.data
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result)
  }
};


