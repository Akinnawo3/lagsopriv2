import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {USERS, USER_COUNT} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const getUsers = (page_no=1, loading) => async dispatch => {
  try {
   loading && await dispatch(startLoading());
   !loading && dispatch(startStatusLoading())
    const res = await axios.get(`${api.user}/v1.1/admin/users?item_per_page=20&page=${page_no}`)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: USERS,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading())


  }
};

export const getUserCount = () => async dispatch => {
  try {
    const res = await axios.get(`${api.user}/v1.1/admin/users?component=count`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: USER_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0
      });
    }
  } catch (err) {
  }
};

export const deleteUser = (auth_id, users) => async dispatch => {
    try {
        dispatch(startStatusLoading())
        const res = await axios.delete(`${api.user}/v1.1/admin/users/${auth_id}`);
        if(res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
        }else {
            await NotificationManager.success('User deleted Successfully!');
            const userData = users.filter(user => user.auth_id !== auth_id)
            dispatch({
                type: USERS,
                payload:userData
            });
        }
        dispatch(endStatusLoading())
    } catch (err) {
        dispatch(endStatusLoading())
    }
};


export const searchUsers = (searchData) => async dispatch => {
    try {
        dispatch(startStatusLoading())
        const res = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}`)
        if(res.data.status === 'error') {
            NotificationManager.error(res.data.msg);
        }else {
            const res2 = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}&component=count`);
            dispatch({
                type: USER_COUNT,
                payload: res2.data.data.total ? res2.data.data.total : 0
            });
            dispatch({
                type: USERS,
                payload: res.data.data
            });
        }
        dispatch(endStatusLoading())
    } catch (err) {
        dispatch(endStatusLoading())


    }
};


