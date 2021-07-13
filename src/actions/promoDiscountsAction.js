import axios from 'axios'
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {PROMO_TYPE} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createPromoDiscount = (promoCode, type, usageLimit, discountPrice, discountPercentage, endDate) => async dispatch => {
  const body = {promoCode, type, usageLimit, discountPrice, discountPercentage, endDate}
  try {
    await dispatch(startLoading());
     await axios.post(`${api.promo}/api/promos/`, body)
     await NotificationManager.success('Promo Created Successfully!');
     await dispatch(getPromoDiscount2());
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getPromoDiscount = () => async dispatch => {
  try {
    await dispatch(startLoading());
    const res = await axios.get(`${api.promo}/api/promos/`)
    dispatch({
      type: PROMO_TYPE,
      payload: res.data
    });
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    NotificationManager.error(err.response.data.message);


  }
};

export const getPromoDiscount2 = () => async dispatch => {
  try {
    const res = await axios.get(`${api.promo}/api/promos/`)
    dispatch({
      type: PROMO_TYPE,
      payload: res.data
    });
  } catch (err) {
    NotificationManager.error(err.response.data.message);


  }
};

export const updatePromoDiscount = (id, promoCode, type, usageLimit, discountPrice, discountPercentage, endDate) => async dispatch => {
  const body = {promoCode, type, usageLimit, discountPrice, discountPercentage, endDate}
  try {
    await dispatch(startStatusLoading())
    await axios.put(`${api.promo}/api/promos/${id}/`, body)
    await NotificationManager.success('Promo Updated Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getPromoDiscount2());
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};

export const deletePromoDiscount = (id) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    await axios.delete(`${api.promo}/api/promos/${id}/`)
    await NotificationManager.success('Promo Deleted Successfully!');
    await dispatch(endStatusLoading())
    await dispatch(getPromoDiscount2());
  } catch (err) {
    await dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.result);
  }
};


