import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {ADMINS} from "Actions/types";
import {NotificationManager} from "react-notifications";

export const createAdmin = (password, first, last, email, phone) => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.post('http://212.71.246.199:8000/admin/users/', {username:email, password: 'password'})
    if(res.data) {
      const authId = res.data.auth_id
      const body = {authId, password, first, last, email, phone}
      await axios.post('http://165.22.116.11:8090/api/admin/', body)
      await NotificationManager.success('Admin Created Successfully!');
      await dispatch(getAdmins2());
      dispatch(endLoading());
    }
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getAdmins = () => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.get('http://165.22.116.11:8090/api/admin/')
    dispatch({
      type: ADMINS,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);


  }
};

export const getAdmins2 = () => async dispatch => {
  try {
    const res = await axios.get('http://165.22.116.11:8090/api/admin/')
    dispatch({
      type: ADMINS,
      payload: res.data
    });
  } catch (err) {
    NotificationManager.error(err.response.data.result);


  }
};

export const updateAdmin = (id, first, last, email, phone) => async dispatch => {
  const body = {first, last, email, phone}
  try {
    await dispatch(startStatusLoading())
    await axios.put(`http://165.22.116.11:8090/api/admin/${id}/`, body)
    await NotificationManager.success('Admin Updated Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getAdmins());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteAdmin = (id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    await axios.delete(`http://165.22.116.11:8090/api/admin/${id}/`)
    await NotificationManager.success('Admin Deleted Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getAdmins());
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};


