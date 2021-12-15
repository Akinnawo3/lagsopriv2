import axios from "axios";
import {SOS, SOS_COUNT, SOS_DETAILS, SOS_USER_DETAILS, SOS_NUMBERS} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const getSOS = (page_no, spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.sos}/v1.1/sos/?page=${page_no}&item_per_page=20`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: SOS,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const getSOSDetails = (sos_id, spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.sos}/v1.1/sos/?sos_id=${sos_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      if (res?.data?.data?.user_id) {
        const res2 = await axios.get(`${api.user}/v1.1/admin/users/${res.data.data.user_id}`);
        dispatch({
          type: SOS_USER_DETAILS,
          payload: res2.data.data,
        });
      }
      dispatch({
        type: SOS_DETAILS,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
export const setSOSNumber = (phone_number) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.sos}/v1.1/admin/recipient-contact`, {
      phone_number,
    });
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await dispatch(getSOSNumber());
      await NotificationManager.success("Number Added Successfully!");
    }

    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
    console.log(err.response.data);
  }
};

export const setSOSEmail = (email) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.sos}/v1.1/admin/recipient-contact`, {
      email,
    });
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await dispatch(getSOSNumber());
      await NotificationManager.success("Email Added Successfully!");
    }

    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
    console.log(err.response.data);
  }
};

export const getSOSCount = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api.sos}/v1.1/sos/?component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: SOS_COUNT,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const changeSOStatus = (sos_id, status) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.sos}/v1.1/sos/status`, {
      sos_id,
      status,
    });
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await dispatch(getSOSDetails(sos_id));
      await NotificationManager.success("SOS Status Updated Successfully!");
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
    console.log(err.response.data);
  }
};

export const assignSOSToAdmin = (email) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.sos}/v1.1/sos/assign`, {
      email,
    });
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("SOS Assigned Successfully!");
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
    console.log(err.response.data);
  }
};

export const getSOSNumber = (spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.sos}/v1.1/admin/recipient-contact`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: SOS_NUMBERS,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const deleteSOSNumber = (phone_number) => async (dispatch) => {
  console.log(phone_number);
  try {
    dispatch(startStatusLoading());
    const res = await axios.delete(`${api.sos}/v1.1/admin/recipient-contact/${phone_number}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await dispatch(getSOSNumber());
      await NotificationManager.success("Number Deleted Successfully!");
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
export const deleteSOSEmail = (email) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.delete(`${api.sos}/v1.1/admin/recipient-contact/${email}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await dispatch(getSOSNumber());
      await NotificationManager.success("Number Deleted Successfully!");
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
