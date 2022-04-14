import  axios from 'axios'
import {FDT, SCHEDULE, FDT_DETAILS, FDT_COUNT, SCHEDULE_COUNT, SCHEDULE_DETAILS} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getFdt = (page_no=1, spinner, start_date = '', end_date = '') => async dispatch => {
  try {
  spinner &&  dispatch(startLoading());
  !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.fdt}/v1.1/fdts?ride_type=fdt&component=group&item_per_page=20&page=${page_no}&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: FDT,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    dispatch(endLoading());
      NotificationManager.error(err.response.data.result)
  }
};

export const getFdtDetails = (auth_id) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.fdt}/v1.1/fdts?ride_type=fdt&component=group&auth_id=${auth_id}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: FDT_DETAILS,
        payload: res.data.data.length > 0 ?  res.data.data[0] : {}
      });
    }
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result)
  }
};

export const getFdtCount = (start_date= '', end_date = '') => async dispatch => {
  try {
    const res = await axios.get(`${api.fdt}/v1.1/fdts?ride_type=fdt&component=group-count&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: FDT_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0
      });
    }
  } catch (err) {
    NotificationManager.error(err.response.data.result)
  }
};

export const exportFdt = (start_date = '', end_date = '') => async dispatch => {
  dispatch(startStatusLoading())
  try {
    const res = await axios.get(`${api.fdt}/v1.1/fdts?ride_type=fdt&component=export&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      NotificationManager.success('Excel file sent to your email successfully');
    }
    dispatch(endStatusLoading())
  } catch (err) {
    NotificationManager.error(err.response.data.result)
    dispatch(endStatusLoading())
  }
};

export const exportSchedule = (start_date = '', end_date = '') => async dispatch => {
  dispatch(startStatusLoading())
  try {
    const res = await axios.get(`${api.fdt}/v1.1/fdts?ride_type=schedule&component=export&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      NotificationManager.success('Excel file sent to your email successfully');
    }
    dispatch(endStatusLoading())
  } catch (err) {
    NotificationManager.error(err.response.data.result)
    dispatch(endStatusLoading())
  }
};

export const getSchedule = (page_no=1, spinner, start_date = '', end_date = '') => async dispatch => {
  try {
    spinner &&  dispatch(startLoading());
    !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.fdt}/v1.1/fdts?ride_type=schedule&component=group&item_per_page=20&page=${page_no}&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: SCHEDULE,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result)
  }
};

export const getScheduleDetails = (auth_id) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.fdt}/v1.1/fdts?ride_type=schedule&auth_id=${auth_id}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: SCHEDULE_DETAILS,
        payload: res.data.data.length > 0 ?  res.data.data[0] : {}
      });
    }
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result)
  }
};

export const getScheduleCount = (start_date = '', end_date = '') => async dispatch => {
  try {
    const res = await axios.get(`${api.fdt}/v1.1/fdts?ride_type=schedule&component=count&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: SCHEDULE_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0
      });
    }
  } catch (err) {
    NotificationManager.error(err.response.data.result)
  }
};







