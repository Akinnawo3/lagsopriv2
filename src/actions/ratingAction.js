import  axios from 'axios'
import {RATINGS, RATING_COUNT, RATING, RATING_USER, RATING_COUNT_USER, RATING_USER_AVERAGE} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getRatings = (page_no, user_type, spinner) => async dispatch => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.rating}/v1.1/ratings?item_per_page=20&page=${page_no}&user_type=${user_type}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: RATINGS,
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

export const getRatingsCount = (user_type) => async dispatch => {
  try {
    const res = await axios.get(`${api.rating}/v1.1/ratings?user_type=${user_type}&component=count`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: RATING_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0
      });
    }
  } catch (err) {
  }
};

export const getRating = (rating_id, spinner) => async dispatch => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.rating}/v1.1/ratings/${rating_id}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: RATING,
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

export const getUserRating = (page_no, user_type, auth_id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    const res = await axios.get(`${api.rating}/v1.1/ratings?user_type=${user_type}&auth_id=${auth_id}&item_per_page=20&page=${page_no}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: RATING_USER,
        payload: res.data.data
      });
    }
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
  }
};

export const getUserRatingAverage = (user_type, auth_id) => async dispatch => {
  try {
    const res = await axios.get(`${api.rating}/v1.1/ratings?user_type=${user_type}&auth_id=${auth_id}&component=avg`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: RATING_USER_AVERAGE,
        payload: res.data.data.avg ? res.data.data.avg : 0
      });
    }
  } catch (err) {
  }
};

export const getUserRatingsCount = (user_type, auth_id) => async dispatch => {
  try {
    const res = await axios.get(`${api.rating}/v1.1/ratings?user_type=${user_type}&component=count&auth_id=${auth_id}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: RATING_COUNT_USER,
        payload: res.data.data.total ? res.data.data.total : 0
      });
    }
  } catch (err) {
  }
};

