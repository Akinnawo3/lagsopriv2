import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {PROMO_TYPE, PROMO_COUNT, PROMO_DETAILS, PROMO_USERS, PROMO_USERS_COUNT} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
import {onAddUpdateUserModalClose} from "../routes/promo-discounts/promoDiscount";

export const createPromoDiscount = (body) => async (dispatch) => {
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.wallet}/v1.1/admin/promo-code`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
      await dispatch(endStatusLoading());
    } else {
      await NotificationManager.success("Promo Created Successfully!");
      dispatch({
        type: PROMO_TYPE,
        payload: res.data.data,
      });
      onAddUpdateUserModalClose();
      await dispatch(getPromoDiscount(1));
    }
    await dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getPromoDiscount =
  (page_no = 1) =>
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

export const searchPromo = (searchData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.wallet}/v1.1/admin/promo-code?q=${searchData}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const res2 = await axios.get(`${api.wallet}/v1.1/admin/promo-code?q=${searchData}&component=count`);
      dispatch({
        type: PROMO_COUNT,
        payload: res2.data.data.total ? res2.data.data.total : 0,
      });
      dispatch({
        type: PROMO_TYPE,
        payload: res.data.data,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const updatePromoDiscount = (body, promo_code_id) => async (dispatch) => {
  try {
    await dispatch(startStatusLoading());
    const res = await axios.put(`${api.wallet}/v1.1/admin/promo-code/${promo_code_id}`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
      await dispatch(endStatusLoading());
    } else {
      await NotificationManager.success("Promo Updated Successfully!");
      onAddUpdateUserModalClose();
      await dispatch(getPromoDiscount(1));
    }
    await dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const deletePromoDiscount = (promo_code_id) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.delete(`${api.wallet}/v1.1/admin/promo-code/${promo_code_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Promo Deleted Successfully!");
      await dispatch(getPromoDiscount(1));
      await dispatch(getPromoDiscountCount());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    await dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getPromoUsers =
  (page_no = 1, promo_code_id) =>
  async (dispatch) => {
    try {
      await dispatch(startLoading());
      const res = await axios.get(`${api.wallet}/v1.1/admin/promo-code-users/?promo_code_id=${promo_code_id}&&item_per_page=20&page=${page_no}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PROMO_USERS,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
    } catch (err) {
      dispatch(endLoading());
    }
  };

export const getPromoUsersCount = (promo_code_id) => async (dispatch) => {
  try {
    const res = await axios.get(`${api.wallet}/v1.1/admin/promo-code-users/?promo_code_id=${promo_code_id}&&component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: PROMO_USERS_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0,
      });
    }
  } catch (err) {}
};
