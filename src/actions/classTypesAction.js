import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {CLASS_TYPE} from "Actions/types";
import {NotificationManager} from "react-notifications";

export const createClassType = (class_name, class_description) => async dispatch => {
  const body = {class_name, class_description}
  try {
    await dispatch(startLoading());
     await axios.post('http://134.209.16.20:7090/api/classTypes/', body)
     await NotificationManager.success('ClassType Created Successfully!');
     await dispatch(getClassTypes2());
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getClassTypes = () => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.get('http://134.209.16.20:7090/api/classTypes/')
    dispatch({
      type: CLASS_TYPE,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message);


  }
};

export const getClassTypes2 = () => async dispatch => {
  try {
    const res = await axios.get('http://134.209.16.20:7090/api/classTypes/')
    dispatch({
      type: CLASS_TYPE,
      payload: res.data
    });
  } catch (err) {
    NotificationManager.error(err.response.data.message);


  }
};

export const updateClassType = (id, class_name, class_description) => async dispatch => {
  const body = {class_name, class_description}
  try {
    await dispatch(startStatusLoading())
    await axios.put(`http://134.209.16.20:7090/api/classTypes/${id}/`, body)
    await NotificationManager.success('ClassTYpe Updated Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getClassTypes2());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteClassType = (id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    await axios.delete(`http://134.209.16.20:7090/api/classTypes/${id}/`)
    await NotificationManager.success('ClassType Deleted Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getClassTypes2());
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};


