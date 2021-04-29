import  axios from 'axios'
import {PASSENGERS, PASSENGER} from "Actions/types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";



  export const getPassengers = () => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.passengers}/api/passenger/`);
    dispatch({
      type: PASSENGERS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
      NotificationManager.error(err.response.data.result)
  }
};


export const  changePassengerStatus= (id, phoneNumberStatus) => async dispatch => {
  const body = {phoneNumberStatus}
  try {
    dispatch(startStatusLoading())
    await axios.put(`${api.passengers}/api/passenger/${id}/`, body)
    await dispatch(endStatusLoading())
    await NotificationManager.success('Passenger Updated Successfully!');
    await dispatch(getPassengers());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const getPassengerByAuthId = (authId) => async dispatch => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.passengers}/api/get/auth/${authId}/`);
    dispatch({
      type: PASSENGER,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    // NotificationManager.error(err.response.data.result)
  }
};



