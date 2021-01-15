import  axios from 'axios'
import {VEHICLES} from "Actions/types";
import {isLoading, isStatusLoading} from "Actions/loadingAction";
import {NotificationManager} from "react-notifications";



export const getVehicles = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get('http://167.172.57.163:7063/api/vehicles/');
    dispatch({
      type: VEHICLES,
      payload: res.data
    });
    dispatch(isLoading());
  } catch (err) {
    dispatch(isLoading());
    NotificationManager.error(err.response.data.result)
  }
};

export const createVehicles = (plateNo, type, model, make, status, desc) => async dispatch => {
  const body = {verified: 1, plateNo, type, model, make, status, desc}
  try {
    await axios.post('http://167.172.57.163:7063/api/vehicles/', body)
    await NotificationManager.success('Driver Created Successfully!');
    await dispatch(getVehicles());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};

export const updateVehicle = (id, plateNo, type, model, make, desc) => async dispatch => {
  const body = {plateNo, type, model, make, desc}
  try {
    await axios.put(`http://167.172.57.163:7063/api/vehicles/${id}/`, body)
    await NotificationManager.success('Driver Updated Successfully!');
    await dispatch(getVehicles());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};

export const  changeVehicleStatus= (id, status) => async dispatch => {
  const body = {status}
  try {
    dispatch(isStatusLoading())
    await axios.put(`http://167.172.57.163:7063/api/vehicles/${id}/`, body)
    dispatch(isStatusLoading())
    await NotificationManager.success('Vehicle Updated Successfully!');
    await dispatch(getVehicles());
  } catch (err) {
    dispatch(isStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteVehicle = (id) => async dispatch => {
  try {
    await axios.delete(`http://167.172.57.163:7063/api/vehicles/${id}/`)
    await NotificationManager.success('Driver Deleted Successfully!');
    await dispatch(getDrivers());
  } catch (err) {
    NotificationManager.error(err.response.data.result);
  }
};


