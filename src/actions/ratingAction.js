import  axios from 'axios'
import {PASSENGER_RATING, DRIVER_RATING, RATING, RATING_AVERAGE} from "Actions/types";
import {endLoading, startLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getPassengerRatings = () => async dispatch => {
  try {
    // dispatch(startLoading());
    const res = await axios.get(`${api.rating}/api/avg/ratings/?type=passengers`);
    dispatch({
      type: PASSENGER_RATING,
      payload: res.data
    });
    // dispatch(endLoading());
  } catch (err) {
    // dispatch(endLoading());
    //   NotificationManager.error(err.response.data.result)
  }
};

export const getDriverRatings = () => async dispatch => {
  try {
    // dispatch(startLoading());
    const res = await axios.get(`${api.rating}/api/avg/ratings/?type=drivers`);
    dispatch({
      type: DRIVER_RATING,
      payload: res.data
    });
    // dispatch(endLoading());
  } catch (err) {
    // dispatch(endLoading());
    // NotificationManager.error(err.response.data.result)
  }
};

export const getRating = (id) => async dispatch => {
  try {
    // dispatch(startLoading());
    const res = await axios.get(`${api.rating}/api/ratings/?forId=${id}`);
    dispatch({
      type: RATING,
      payload: res.data
    });
    // dispatch(endLoading());
  } catch (err) {
    // dispatch(endLoading());
    // NotificationManager.error(err.response.data.result)
  }
};

export const getRatingAverage = (id) => async dispatch => {
  try {
    // dispatch(startLoading());
    const res = await axios.get(`${api.rating}/api/avg/${id}/ratings/`);
    dispatch({
      type: RATING_AVERAGE,
      payload: res.data
    });
    // dispatch(endLoading());
  } catch (err) {
    dispatch({
      type: RATING_AVERAGE,
      payload: 0
    });
    // dispatch(endLoading());
    // NotificationManager.error(err.response.data.result)
  }
};







