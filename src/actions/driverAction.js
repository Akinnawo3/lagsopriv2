import  axios from 'axios'
import {DRIVERS} from "Actions/types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getDrivers = () => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.drivers}/api/driver/`);
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
    const res = await axios.get(`${api.drivers}/api/driver/`);
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
   const res = await axios.post(`${api.auth}/admin/users/`, {username:email, password: 'password'})
    if(res.data) {
      const authId = res.data.auth_id
      const body = {authId, first, last, email, phone, licenseNo, stateOfOrigin, eyeGlasses, lasdriId, bloodGroup, education}
      await axios.post(`${api.drivers}/api/driver/`, body)
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
    await axios.put(`${api.drivers}/api/driver/${id}/`, body)
    await NotificationManager.success('Driver Updated Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};

export const  changeDriverStatus= (id, status, emailAddress, driverName) => async dispatch => {
  const body = {status}
  // console.log(status, emailAddress, driverName, 'ppppppp')
  try {
    dispatch(startStatusLoading())
    await axios.put(`${api.drivers}/api/driver/${id}/`, body)
    await NotificationManager.success('Driver Updated Successfully!');
    await dispatch(getDrivers2());
    if(status == 1) {
      const mail = {emailAddress: emailAddress, mail: `Dear ${driverName},
            Your request to join LagosRide has been accepted. You can go ahead to make payments for the 10% of the cost of vehicle to start earning.
            Make payments, and go back to your account profile to upload your payment receipt.
            Thank you for choosing LagosRide.`, subject: 'driver accepted', typeEmail: 'gmail'}
      await axios.post('http://212.71.246.199:7004/api/me/mail/', mail)
    }
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteDriver = (id) => async dispatch => {
  try {
    await axios.delete(`${api.drivers}/api/driver/${id}/`)
    await NotificationManager.success('Driver Deleted Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};


