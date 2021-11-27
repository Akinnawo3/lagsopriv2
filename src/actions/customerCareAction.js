import axios from "axios";
import {
  endLoading,
  endStatusLoading,
  startLoading,
  startStatusLoading,
} from "./loadingAction";
import { CUSTOMER_CARE } from "./types";
import { NotificationManager } from "react-notifications";
import api from "../environments/environment";

export const createCustomerCare = (customer_care_line) => async (dispatch) => {
  const body = { customer_care_line };
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.customerCare}/v1.1/settings`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Number added Successfully!");
      await dispatch(getCustomerCare());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const getCustomerCare = (spinner) => async (dispatch) => {
  try {
    spinner && (await dispatch(startLoading()));
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.customerCare}/v1.1/settings`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: CUSTOMER_CARE,
        payload: res.data.data ? res.data.data : [],
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    dispatch(endLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const createWaitingTime = (waiting_time) => async (dispatch) => {
  const body = { waiting_time };
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.customerCare}/v1.1/settings`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Time added Successfully!");
      await dispatch(getCustomerCare());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const createVerificationFee = (verification_fee) => async (dispatch) => {
  const body = { verification_fee };
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.customerCare}/v1.1/settings`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Fee added Successfully!");
      await dispatch(getCustomerCare());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const createSocialDriverFee = (soc_driver_fee) => async (dispatch) => {
  const body = { soc_driver_fee };
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.customerCare}/v1.1/settings`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Fee added Successfully!");
      await dispatch(getCustomerCare());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};
export const createCommercialDriverFee =
  (com_driver_fee) => async (dispatch) => {
    const body = { com_driver_fee };
    try {
      await dispatch(startStatusLoading());
      const res = await axios.post(`${api.customerCare}/v1.1/settings`, body);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        await NotificationManager.success("Fee added Successfully!");
        await dispatch(getCustomerCare());
      }
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endStatusLoading());
      NotificationManager.error(err.response.data.error);
    }
  };
export const createReferralBonus = (referral_bonus) => async (dispatch) => {
  const body = { referral_bonus };
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.customerCare}/v1.1/settings`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Fee added Successfully!");
      await dispatch(getCustomerCare());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};
