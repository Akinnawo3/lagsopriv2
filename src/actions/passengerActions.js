import  axios from 'axios'
import {PASSENGERS} from "Actions/types";
import {isLoading, isStatusLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";



  export const getPassengers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get('http://212.71.246.199:7070/api/passenger/');
    dispatch({
      type: PASSENGERS,
      payload: res.data
    });
    dispatch(isLoading());
  } catch (err) {
    dispatch(isLoading());
      NotificationManager.error(err.response.data.result)
  }
};


export const  changePassengerStatus= (id, phoneNumberStatus) => async dispatch => {
  const body = {phoneNumberStatus}
  try {
    dispatch(isStatusLoading())
    await axios.put(`http://212.71.246.199:7070/api/passenger/${id}/`, body)
    await dispatch(isStatusLoading())
    await NotificationManager.success('Driver Updated Successfully!');
    await dispatch(getPassengers());
  } catch (err) {
    dispatch(isStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};




