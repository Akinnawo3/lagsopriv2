import axios from "axios";
import {
  PAYMENTS_COUNT,
  PAYMENTS,
  PAYMENT,
  SOS_USER_DETAILS,
  PAYMENTS_SERVICE,
  PAYMENTS_SERVICE_COUNT,
  PAYMENTS_SERVICE_BALANCE,
  PAYMENTS_SERVICE_BALANCE_INDIVIDUAL,
  PAYMENT_SERVICE_DETAILS,
  FINANCE_WALLET,
  FINANCE_TRIP,
  FINANCE_SERVICE,
  FINANCE_DRIVER_LOG,
  FINANCE_DRIVER_LOG_COUNT,
  FINANCE_HOLDER_LOG,
  FINANCE_HOLDER_LOG_COUNT,
  FINANCE_DRIVER_PAYOUTS,
  FINANCE_DRIVER_PAYOUTS_COUNT,
  FINANCE_HOLDER_PAYOUTS,
  FINANCE_HOLDER_PAYOUTS_COUNT
} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "Actions/loadingAction";

export const getPayments =
  (page_no, status = "", auth_id = "", loading, userType = 'rider_id', ) =>
  async (dispatch) => {
    try {
      loading && dispatch(startLoading());
      !loading && dispatch(startStatusLoading());
      const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions?item_per_page=20&page=${page_no}&status=${status}&${userType}=${auth_id}`);
      // console.log(res.data, auth_id, 'qqqqqqqq')
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
  (status = "", auth_id = "", userType = 'rider_id') =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.wallet}/v1.1/admin/trip-transactions?component=count&status=${status}&${userType}=${auth_id}`);
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
  (page_no, status = "", auth_id = "", loading, payment_type = "", start_date = "", end_date = "") =>
  async (dispatch) => {
    try {
      loading && dispatch(startLoading());
      !loading && dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.wallet}/v1.1/admin/service-transactions?item_per_page=20&page=${page_no}&status=${status}&auth_id=${auth_id}&payment_type=${payment_type}&start_date=${start_date}&end_date=${end_date}`
      );
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
  (status = "", auth_id = "", payment_type = "", start_date = "", end_date = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${api.wallet}/v1.1/admin/service-transactions?status=${status}&auth_id=${auth_id}&payment_type=${payment_type}&start_date=${start_date}&end_date=${end_date}&component=count`
      );
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
export const getPaymentsServiceBalance =
  (status = "", auth_id = "", payment_type = "", start_date = "", end_date = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${api.wallet}/v1.1/admin/service-transactions?status=${status}&auth_id=${auth_id}&payment_type=${payment_type}&start_date=${start_date}&end_date=${end_date}&component=balance`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PAYMENTS_SERVICE_BALANCE,
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

export const getPaymentsServiceBalanceForIndividual =
  (auth_id = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.wallet}/v1.1/admin/service-transactions?auth_id=${auth_id}&component=balance&status=1`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PAYMENTS_SERVICE_BALANCE_INDIVIDUAL,
          payload: res.data.data?.total ? res.data.data?.total : 0,
        });
      }
    } catch (err) {}
  };

export const getFinanceWallet = (payment_type, date_type = 'daily', start_date = '', end_date = '') => async dispatch => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.wallet}/v1.1/admin/finance-stat?payment_type=${payment_type}&date_type=${date_type}&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {

        dispatch({
          type: FINANCE_WALLET,
          payload: res.data.data
        });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};
export const getFinanceService = (payment_type, date_type = 'daily', start_date = '', end_date = '') => async dispatch => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.wallet}/v1.1/admin/finance-stat?payment_type=${payment_type}&date_type=${date_type}&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
        dispatch({
          type: FINANCE_SERVICE,
          payload: res.data.data
        });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};
export const getFinanceTrip = (payment_type, date_type = 'daily', start_date = '', end_date = '') => async dispatch => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.wallet}/v1.1/admin/finance-stat?payment_type=${payment_type}&date_type=${date_type}&start_date=${start_date}&end_date=${end_date}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
        dispatch({
          type: FINANCE_TRIP,
          payload: res.data.data
        });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const getFinanceDriverLogs =
    (page_no = 1, loading, date_type = "",  start_date = '', end_date = '') =>
        async (dispatch) => {
          try {
            loading && (await dispatch(startLoading()));
            !loading && dispatch(startStatusLoading());
            const res = await axios.get(`${api.revenueSplit}/v1.1/admin/driver-disbursement-preview?item_per_page=20&page=${page_no}&date_type=${date_type}&start_date=${start_date}&end_date${end_date}`);
            if (res.data.status === "error") {
              NotificationManager.error(res.data.msg);
            } else {
              dispatch({
                type: FINANCE_DRIVER_LOG,
                payload: res.data.data,
              });
            }
            dispatch(endLoading());
            dispatch(endStatusLoading());
          } catch (err) {
            dispatch(endLoading());
            dispatch(endStatusLoading());
          }
        };

export const getFinanceDriverLogsCount = (loading, date_type = "",  start_date = '', end_date = '') => async (dispatch) => {
  try {
    loading && (await dispatch(startLoading()));
    !loading && dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/driver-disbursement-preview?component=count&date_type=${date_type}&start_date=${start_date}&end_date${end_date}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: FINANCE_DRIVER_LOG_COUNT,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
  }
};


export const searchFinanceDriverLogs = (searchData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/driver-disbursement-preview?q=${searchData}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const res2 = await axios.get(`${api.revenueSplit}/v1.1/admin/driver-disbursement-preview?component=count&q=${searchData}`);


      dispatch({
        type: FINANCE_DRIVER_LOG_COUNT,
        payload: res2.data.data,
      });
      dispatch({
        type: FINANCE_DRIVER_LOG,
        payload: res.data.data,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const getFinanceHolderLogs =
    (page_no = 1, loading, date_type = "",  start_date = '', end_date = '') =>
        async (dispatch) => {
          try {
            loading && (await dispatch(startLoading()));
            !loading && dispatch(startStatusLoading());
            const res = await axios.get(`${api.revenueSplit}/v1.1/admin/stack-holder-disbursement-preview?item_per_page=20&page=${page_no}&date_type=${date_type}&start_date=${start_date}&end_date${end_date}`);
            if (res.data.status === "error") {
              NotificationManager.error(res.data.msg);
            } else {
              dispatch({
                type: FINANCE_HOLDER_LOG,
                payload: res.data.data,
              });
            }
            dispatch(endLoading());
            dispatch(endStatusLoading());
          } catch (err) {
            dispatch(endLoading());
            dispatch(endStatusLoading());
          }
        };

export const getFinanceHolderLogsCount = (loading,  date_type = "",  start_date = '', end_date = '') => async (dispatch) => {
  try {
    loading && (await dispatch(startLoading()));
    !loading && dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/stack-holder-disbursement-preview?component=count&date_type=${date_type}&start_date=${start_date}&end_date${end_date}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: FINANCE_HOLDER_LOG_COUNT,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
  }
};

export const searchFinanceHolderLogs = (searchData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/stack-holder-disbursement-preview?q=${searchData}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const res2 = await axios.get(`${api.revenueSplit}/v1.1/admin/stack-holder-disbursement-preview?component=count&q=${searchData}`);


      dispatch({
        type: FINANCE_HOLDER_LOG_COUNT,
        payload: res2.data.data,
      });
      dispatch({
        type: FINANCE_HOLDER_LOG,
        payload: res.data.data,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};


export const getFinanceDriverPayouts =
    (page_no = 1, loading, date_type = "",  start_date = '', end_date = '') =>
        async (dispatch) => {
          try {
            loading && (await dispatch(startLoading()));
            !loading && dispatch(startStatusLoading());
            const res = await axios.get(`${api.revenueSplit}/v1.1/admin/driver-payout?item_per_page=20&page=${page_no}&date_type=${date_type}&start_date=${start_date}&end_date${end_date}`);
            if (res.data.status === "error") {
              NotificationManager.error(res.data.msg);
            } else {
              dispatch({
                type: FINANCE_DRIVER_PAYOUTS,
                payload: res.data.data,
              });
            }
            dispatch(endLoading());
            dispatch(endStatusLoading());
          } catch (err) {
            dispatch(endLoading());
            dispatch(endStatusLoading());
          }
        };


export const getFinanceDriverPayoutsCount = (loading, date_type = "",  start_date = '', end_date = '') => async (dispatch) => {
  try {
    loading && (await dispatch(startLoading()));
    !loading && dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/driver-payout?component=count&date_type=${date_type}&start_date=${start_date}&end_date${end_date}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: FINANCE_DRIVER_PAYOUTS_COUNT,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
  }
};


export const searchFinanceDriverPayouts = (searchData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/driver-payout?q=${searchData}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const res2 = await axios.get(`${api.revenueSplit}/v1.1/admin/driver-payout?component=count&q=${searchData}`);


      dispatch({
        type: FINANCE_DRIVER_PAYOUTS_COUNT,
        payload: res2.data.data,
      });
      dispatch({
        type: FINANCE_DRIVER_PAYOUTS,
        payload: res.data.data,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};
export const getFinanceHolderPayouts =
    (page_no = 1, loading,  date_type = "",  start_date = '', end_date = '') =>
        async (dispatch) => {
          try {
            loading && (await dispatch(startLoading()));
            !loading && dispatch(startStatusLoading());
            const res = await axios.get(`${api.revenueSplit}/v1.1/admin/stack-holder-payout?item_per_page=20&page=${page_no}&date_type=${date_type}&start_date=${start_date}&end_date${end_date}`);
            if (res.data.status === "error") {
              NotificationManager.error(res.data.msg);
            } else {
              dispatch({
                type: FINANCE_HOLDER_PAYOUTS,
                payload: res.data.data,
              });
            }
            dispatch(endLoading());
            dispatch(endStatusLoading());
          } catch (err) {
            dispatch(endLoading());
            dispatch(endStatusLoading());
          }
        };


export const getFinanceHolderPayoutsCount = (loading,  date_type = "",  start_date = '', end_date = '') => async (dispatch) => {
  try {
    loading && (await dispatch(startLoading()));
    !loading && dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/stack-holder-payout?component=count&date_type=${date_type}&start_date=${start_date}&end_date${end_date}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: FINANCE_HOLDER_PAYOUTS_COUNT,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
  }
};


export const searchFinanceHolderPayouts = (searchData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/stack-holder-payout?q=${searchData}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const res2 = await axios.get(`${api.revenueSplit}/v1.1/admin/stack-holder-payout?component=count&q=${searchData}`);


      dispatch({
        type: FINANCE_HOLDER_PAYOUTS_COUNT,
        payload: res2.data.data,
      });
      dispatch({
        type: FINANCE_HOLDER_PAYOUTS,
        payload: res.data.data,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};





