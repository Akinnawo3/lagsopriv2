import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {AREAS} from "Actions/types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createArea = (localGovtName, areaName) => async dispatch => {
  const body =  {localGovtName, areaName}
  try {
    await dispatch(startLoading());
      await axios.post(`${api.area}/api/areas/`, body)
      await NotificationManager.success('Area Created Successfully!');
      await dispatch(getArea2());
      dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getAreas = () => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.get(`${api.area}/api/areas/`)
    dispatch({
      type: AREAS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);


  }
};

export const getArea2 = () => async dispatch => {
  try {
    const res = await axios.get(`${api.area}/api/areas/`)
    dispatch({
      type: AREAS,
      payload: res.data
    });
  } catch (err) {
    NotificationManager.error(err.response.data.result);


  }
};

export const updateArea = (id, localGovtName, areaName) => async dispatch => {
  const body = {localGovtName, areaName}

  try {
    await dispatch(startStatusLoading())
    await axios.put(`${api.area}/api/area/${id}/`, body)
    await NotificationManager.success('Area Updated Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getArea2());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteArea = (id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    await axios.delete(`${api.area}/api/area/${id}/`)
    await NotificationManager.success('Area Deleted Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getArea2());
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};


