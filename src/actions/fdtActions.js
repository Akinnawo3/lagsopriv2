import  axios from 'axios'
import {FDT, SCHEDULE, FDT_DETAILS, FDT_COUNT, SCHEDULE_COUNT, SCHEDULE_DETAILS} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getFdt = (page_no=1, spinner) => async dispatch => {
  try {
  spinner &&  dispatch(startLoading());
  !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.fdt}/v1.1/fdts?trip_type=fdt&component=group&item_per_page=20&page=${page_no}`);
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
    const res = await axios.get(`${api.fdt}/v1.1/fdts?trip_type=fdt&component=group&auth_id=${auth_id}`);
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

export const getFdtCount = () => async dispatch => {
  try {
    const res = await axios.get(`${api.fdt}/v1.1/fdts?trip_type=fdt&component=group-count`);
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

export const getSchedule = (page_no=1, spinner) => async dispatch => {
  try {
    spinner &&  dispatch(startLoading());
    !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.fdt}/v1.1/fdts?trip_type=schedule&component=group&item_per_page=20&page=${page_no}`);
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
    const res = await axios.get(`${api.fdt}/v1.1/fdts?trip_type=schedule&auth_id=${auth_id}`);
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

export const getScheduleCount = () => async dispatch => {
  try {
    const res = await axios.get(`${api.fdt}/v1.1/fdts?trip_type=schedule&component=count`);
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







