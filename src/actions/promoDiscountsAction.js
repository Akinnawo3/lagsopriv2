import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {PROMO_TYPE, PROMO_COUNT, PROMO_DETAILS} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createPromoDiscount = (body) => async (dispatch) => {
  try {
    await dispatch(startStatusLoading());
    await axios.post(`${api.wallet}/v1.1/admin/promo-code`, body);
    await NotificationManager.success("Promo Created Successfully!");
    await dispatch(getPromoDiscount(1));
    await dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getPromoDiscount =
  (page_no = 1, searchData="") =>
  async (dispatch) => {
    try {
      await dispatch(startLoading());
      const res = await axios.get(`${api.wallet}/v1.1/admin/promo-code/?item_per_page=20&page=${page_no}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PROMO_TYPE,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
    } catch (err) {
      dispatch(endLoading());
    }
  };
export const getPromoDiscountDetails = (promo_code_id) => async (dispatch) => {
  try {
    await dispatch(startLoading());
    const res = await axios.get(`${api.wallet}/v1.1/admin/promo-code/${promo_code_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: PROMO_DETAILS,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getPromoDiscountCount = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api.wallet}/v1.1/admin/promo-code/?component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: PROMO_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0,
      });
    }
  } catch (err) {}
};

export const updatePromoDiscount = (body, promo_code_id) => async (dispatch) => {
  try {
    await dispatch(startStatusLoading());
    await axios.put(`${api.wallet}/v1.1/admin/promo-code/${promo_code_id}`, body);
    await NotificationManager.success("Promo Updated Successfully!");
    await dispatch(getPromoDiscount(1));
    await dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const deletePromoDiscount = (promo_code_id) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    await axios.delete(`${api.wallet}/v1.1/admin/promo-code/${promo_code_id}`);
    await NotificationManager.success("Promo Deleted Successfully!");
    await dispatch(endStatusLoading());
    await dispatch(getPromoDiscount(1));
    await dispatch(getPromoDiscountCount());
  } catch (err) {
    await dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};
