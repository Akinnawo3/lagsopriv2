import  axios from 'axios'
import {TRIPS, TRIP_COUNT, DRIVER_TRIPS, TRIP_COUNT_DRIVER} from "Actions/types";
import {endLoading, startLoading} from "Actions/loadingAction";
import api from "../environments/environment";



  export const getTrips = (pageNo) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.trip}/trip/getTrips?item_per_page=10&page=${pageNo}`);
    dispatch({
      type: TRIPS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getTripsByStatus = (pageNo, status) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.trip}/trip/getTrips?item_per_page=10&page=${pageNo}&trip_status=${status}`);
    dispatch({
      type: TRIPS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getTripCount = () => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.trip}/trip/getTripCounts`);
    dispatch({
      type: TRIP_COUNT,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getTripCountByStatus = (status) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.trip}/trip/getTripCounts?trip_status=${status}`);
    dispatch({
      type: TRIP_COUNT,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};


export const getDriverTrips = (pageNo, authId) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.trip}/trip/getTrips?item_per_page=10&page=${pageNo}&driver_auth_id=${authId}`);
    dispatch({
      type: DRIVER_TRIPS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getDriverTripCount = (authId) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.trip}/trip/getTripCounts?driver_auth_id=${authId}`);
    dispatch({
      type: TRIP_COUNT_DRIVER,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getPassengerTrips = (pageNo, authId) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.trip}/trip/getTrips?item_per_page=10&page=${pageNo}&rider_auth_id=${authId}`);
    dispatch({
      type: DRIVER_TRIPS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getPassengerTripCount = (authId) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.trip}/trip/getTripCounts?rider_auth_id=${authId}`);
    dispatch({
      type: TRIP_COUNT_DRIVER,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

