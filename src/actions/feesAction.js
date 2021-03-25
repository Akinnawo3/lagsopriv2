import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";
import {FEE_TYPE} from "Actions/types";
import {NotificationManager} from "react-notifications";
import Cookies from 'universal-cookie';
import api from "../environments/environment";

const cookies = new Cookies();

export const createFee = (fee, type, desc, amount) => async dispatch => {

  const body = {fee, type, desc, amount}
  try {
    await dispatch(startLoading());
     await axios.post('http://134.209.16.20:7066/api/feeTypes/', body)
     await NotificationManager.success('Fee Created Successfully!');
     await dispatch(getFees2());
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getFees = () => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.get(`${api.fees}/api/feeTypes/`)
    dispatch({
      type: FEE_TYPE,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    // if (err.response.status === 401) {
    //   console.log('aaaaaaaa')
    //   // console.log(error.response.status, 'ststststst')
    //   // return (<Redirect to={'/login'} />);
    //   cookies.remove('user_id');
    //   // localStorage.removeItem("user_id");
    //   location.replace("/login");
    // }
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message);


  }
};

export const getFees2 = () => async dispatch => {
  try {
    const res = await axios.get(`${api.fees}/api/feeTypes/`)
    dispatch({
      type: FEE_TYPE,
      payload: res.data
    });
  } catch (err) {
    NotificationManager.error(err.response.data.message);


  }
};

export const updateFee = (id, fee, type, desc, amount) => async dispatch => {
  const body = {fee, type, desc, amount}
  try {
    await dispatch(startStatusLoading())
    await axios.put(`${api.fees}/api/feeTypes/${id}/`, body)
    await NotificationManager.success('Fee Updated Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getFees2());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteFee = (id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    await axios.delete(`${api.fees}/api/feeTypes/${id}/`)
    await NotificationManager.success('Fee Deleted Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getFees2());
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};


