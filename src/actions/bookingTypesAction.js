import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {BOOKING_TYPE} from "Actions/types";
import {NotificationManager} from "react-notifications";

export const createBookingType = (trip_name, trip_description) => async dispatch => {
  const body = {trip_name, trip_description}
  try {
    await dispatch(startLoading());
     await axios.post('http://134.209.16.20:7091/api/tripTypes/', body)
     await NotificationManager.success('BookingType Created Successfully!');
     await dispatch(getBookingTypes2());
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getBookingTypes = () => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.get('http://134.209.16.20:7091/api/tripTypes/')
    dispatch({
      type: BOOKING_TYPE,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message);


  }
};

export const getBookingTypes2 = () => async dispatch => {
  try {
    const res = await axios.get('http://134.209.16.20:7091/api/tripTypes/')
    dispatch({
      type: BOOKING_TYPE,
      payload: res.data
    });
  } catch (err) {
    NotificationManager.error(err.response.data.message);


  }
};

export const updateBookingType = (id, trip_name, trip_description) => async dispatch => {
  const body = {trip_name, trip_description}
  try {
    await dispatch(startStatusLoading())
    await axios.put(`http://134.209.16.20:7091/api/tripTypes/${id}/`, body)
    await NotificationManager.success('BookingType Updated Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getBookingTypes2());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteBookingType = (id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    await axios.delete(`http://134.209.16.20:7091/api/tripTypes/${id}/`)
    await NotificationManager.success('BookingType Deleted Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getBookingTypes2());
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};


