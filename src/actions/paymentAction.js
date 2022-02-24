import axios from "axios";
import {PAYMENTS_COUNT, PAYMENTS, PAYMENT, SOS_USER_DETAILS, PAYMENTS_SERVICE, PAYMENTS_SERVICE_COUNT, PAYMENTS_SERVICE_BALANCE, PAYMENT_SERVICE_DETAILS} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";

export const getPayments =
  (page_no, status = "", auth_id = "", loading) =>
  async (dispatch) => {
    try {
      loading && dispatch(startLoading());
      !loading && dispatch(startStatusLoading());
      const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions?item_per_page=20&page=${page_no}&status=${status}&rider_id=${auth_id}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PAYMENTS,
          payload: res.data.data,
        });
      }
      loading && dispatch(endLoading());
      !loading && dispatch(endStatusLoading());
    } catch (err) {
      loading && dispatch(endLoading());
      !loading && dispatch(endStatusLoading());
    }
  };

export const getPaymentsCount =
  (status = "", auth_id = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions?component=count&status=${status}&rider_id=${auth_id}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PAYMENTS_COUNT,
          payload: res.data.data.total ? res.data.data.total : 0,
        });
      }
    } catch (err) {}
  };

export const getPaymentDetails = (payment_id) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions/${payment_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      if (res?.data?.data?.rider_id) {
        const res2 = await axios.get(`${api.user}/v1.1/admin/users/${res.data.data.rider_id}`);
        dispatch({
          type: SOS_USER_DETAILS,
          payload: res2.data.data,
        });
      }
      dispatch({
        type: PAYMENT,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getPaymentsService =
  (page_no, status = "", auth_id = "", loading, payment_type="") =>
  async (dispatch) => {
    try {
      loading && dispatch(startLoading());
      !loading && dispatch(startStatusLoading());
      const res = await axios.get(`${api.wallet}/v1.1/admin/service-transactions?item_per_page=20&page=${page_no}&status=${status}&auth_id=${auth_id}&payment_type=${payment_type}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PAYMENTS_SERVICE,
          payload: res.data.data,
        });
      }
      loading && dispatch(endLoading());
      !loading && dispatch(endStatusLoading());
    } catch (err) {
      loading && dispatch(endLoading());
      !loading && dispatch(endStatusLoading());
    }
  };

export const getPaymentsServiceCount =
  (status = "", auth_id = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.wallet}/v1.1/admin/service-transactions?status=${status}&auth_id=${auth_id}&component=count`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PAYMENTS_SERVICE_COUNT,
          payload: res.data.data?.total,
        });
      }
    } catch (err) {}
  };

export const getPaymentServiceDetails = (payment_id) => async (dispatch) => {
  try {
    dispatch(startLoading());
    const res = await axios.get(`${api.wallet}/v1.1/admin/service-transactions/${payment_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: PAYMENT_SERVICE_DETAILS,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
  }
};

export const getPaymentsServiceBalance =
  (auth_id = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.wallet}/v1.1/admin/service-transactions?auth_id=${auth_id}&component=balance&status=1`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PAYMENTS_SERVICE_BALANCE,
          payload: res.data.data?.total ? res.data.data?.total : 0,
        });
      }
    } catch (err) {}
  };

// export const getPaymentBalance = (auth_id) => async dispatch => {
//   try {
//     const res = await axios.get(`${api.wallet}/v1.1/admin/wallet-transactions?auth_id=${auth_id}&component=balance`);
//     if(res.data.status === 'error') {
//       NotificationManager.error(res.data.msg);
//     }else {
//       dispatch({
//         type: PAYMENT,
//         payload: res.data.data.balance ?  res.data.data.balance : 0
//       });
//     }
//   } catch (err) {
//   }
// };
