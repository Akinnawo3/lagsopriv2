import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {AREAS, AREA_COUNT} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createArea = (area_name) => async dispatch => {
  const body =  {area_name}
  try {
    dispatch(startStatusLoading())
     const res = await axios.post(`${api.area}/api/v1.1/areas/`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('Area Created Successfully!');
      await dispatch(getAreas());
    }
      dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getAreas = (page_no=1, spinner) => async dispatch => {
  try {
  spinner &&  await dispatch(startLoading());
  !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.area}/api/v1.1/areas/?page_no=${page_no}&no_per_page=20`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: AREAS,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.error);


  }
};

export const getAreasCount = () => async dispatch => {
  try {
    const res = await axios.get(`${api.area}/api/v1.1/areas/count`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: AREA_COUNT,
        payload: res.data.data
      });
    }
  } catch (err) {
  }
};

export const updateArea = (id, area_name) => async dispatch => {
  const body =  {area_name}
  try {
    dispatch(startStatusLoading())
    const res = await axios.put(`${api.area}/api/v1.1/areas/${id}/`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('Area Updated Successfully!');
      await dispatch(getAreas());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const deleteArea = (id, areas) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    const res = await axios.delete(`${api.area}/api/v1.1/areas/${id}/`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await NotificationManager.success('Area Updated Successfully!');
     const areaData = areas.filter(area => area.id !== id)
      dispatch({
        type: AREAS,
        payload: areaData
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
