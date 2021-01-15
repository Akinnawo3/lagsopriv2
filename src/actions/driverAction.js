import  axios from 'axios'
import {DRIVERS} from "Actions/types";
import {isLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";



  export const getDrivers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get('http://212.71.246.199:7050/api/driver/');
    dispatch({
      type: DRIVERS,
      payload: res.data
    });
    dispatch(isLoading());
  } catch (err) {
    dispatch(isLoading());
      NotificationManager.error(err.response.data.result)
  }
};

export const createDrivers = (first, last, email, phone, licenseNo, stateOfOrigin, eyeGlasses, lasdriId, bloodGroup, education) => async dispatch => {
  const authId = Math.floor(Math.random() * 100)
  const body = {authId, first, last, email, phone, licenseNo, stateOfOrigin, eyeGlasses, lasdriId, bloodGroup, education}
  try {
    await axios.post('http://212.71.246.199:7050/api/driver/', body)
    await NotificationManager.success('Driver Created Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};

export const updateDriver = (id, first, last, email, phone) => async dispatch => {
  const body = {first, last, email, phone}
  try {
    await axios.put(`http://212.71.246.199:7050/api/driver/${id}/`, body)
    await NotificationManager.success('Driver Updated Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};

export const  changeDriverStatus= (id, status) => async dispatch => {
  const body = {status}
  try {
    await axios.put(`http://212.71.246.199:7050/api/driver/${id}/`, body)
    await NotificationManager.success('Driver Updated Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteDriver = (id) => async dispatch => {
  try {
    await axios.delete(`http://212.71.246.199:7050/api/driver/${id}/`)
    await NotificationManager.success('Driver Deleted Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};


