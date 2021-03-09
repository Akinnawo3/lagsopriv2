import  axios from 'axios'
import {DRIVERS} from "Actions/types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";



  export const getDrivers = () => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get('http://134.209.16.20:7050/api/driver/');
    dispatch({
      type: DRIVERS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
      NotificationManager.error(err.response.data.result)
  }
};

export const getDrivers2 = () => async dispatch => {
  try {
    // dispatch(startStatusLoading)
    const res = await axios.get('http://134.209.16.20:7050/api/driver/');
    dispatch({
      type: DRIVERS,
      payload: res.data
    });
    // dispatch(endStatusLoading())
  } catch (err) {
    // dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result)
  }
};

export const createDrivers = (first, last, email, phone, licenseNo, stateOfOrigin, eyeGlasses, lasdriId, bloodGroup, education) => async dispatch => {
  try {
   const res = await axios.post('http://212.71.246.199:8000/admin/users/', {username:email, password: 'password'})
    if(res.data) {
      const authId = res.data.auth_id
      const body = {authId, first, last, email, phone, licenseNo, stateOfOrigin, eyeGlasses, lasdriId, bloodGroup, education}
      await axios.post('http://134.209.16.20:7050/api/driver/', body)
      await NotificationManager.success('Driver Created Successfully!');
      await dispatch(getDrivers());
    }

  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};

export const updateDriver = (id, first, last, email, phone) => async dispatch => {
  const body = {first, last, email, phone}
  try {
    await axios.put(`http://134.209.16.20:7050/api/driver/${id}/`, body)
    await NotificationManager.success('Driver Updated Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};

export const  changeDriverStatus= (id, status) => async dispatch => {
  const body = {status}
  try {
    dispatch(startStatusLoading())
    await axios.put(`http://134.209.16.20:7050/api/driver/${id}/`, body)
    await NotificationManager.success('Driver Updated Successfully!');
    await dispatch(getDrivers2());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteDriver = (id) => async dispatch => {
  try {
    await axios.delete(`http://134.209.16.20:7050/api/driver/${id}/`)
    await NotificationManager.success('Driver Deleted Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};


