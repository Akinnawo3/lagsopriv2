import axios from "axios";
import {WALLETS, WALLETS_COUNT, WALLET, FUNDING_BALANCE,SINGLE_WALLET_TRANSACTION} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const getWallets =
  (page_no = 1, status = "", auth_id = "", loading, transaction_type = "fund", start_date = "", end_date = "") =>
  async (dispatch) => {
    try {
      loading && dispatch(startStatusLoading());
      const res = await axios.get(
        // `${api.wallet}/v1.1/admin/wallet-transactions?item_per_page=20&page=${page_no}&status=${status}&auth_id=${auth_id}&transaction_type=${transaction_type}&start_date=${start_date}&end_date=${end_date}`
        `${api.wallet}/v1.1/admin/wallet-transactions?item_per_page=20&page=${page_no}&status=${status}&auth_id=${auth_id}&start_date=${start_date}&end_date=${end_date}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: WALLETS,
          payload: res.data.data,
        });
      }
      loading && dispatch(endStatusLoading());
    } catch (err) {}
  };

export const getWalletsCount =
  (status = "", auth_id, loading, transaction_type = "fund", start_date = "", end_date = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${api.wallet}/v1.1/admin/wallet-transactions?component=count&status=${status}&auth_id=${auth_id}&transaction_type=${transaction_type}&start_date=${start_date}&end_date=${end_date}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: WALLETS_COUNT,
          payload: res.data.data.total ? res.data.data.total : 0,
        });
      }
    } catch (err) {}
  };

export const getWalletsExport =
    (status = "", auth_id, loading, transaction_type = "fund", start_date = "", end_date = "") =>
        async (dispatch) => {
            dispatch(startStatusLoading())
          try {
            const res = await axios.get(
                `${api.wallet}/v1.1/admin/wallet-transactions?component=export&status=${status}&auth_id=${auth_id}&transaction_type=${transaction_type}&start_date=${start_date}&end_date=${end_date}`
            );
            if (res.data.status === "error") {
              NotificationManager.error(res.data.msg);
            } else {
              NotificationManager.success('Excel file sent to your email successfully');
            }
            dispatch(endStatusLoading())
          } catch (err) {
              dispatch(startStatusLoading())
          }
        };

export const getWalletBalance =
  (auth_id = "", status = "", transaction_type = "", start_date = "", end_date = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.wallet}/v1.1/admin/wallet-transactions?auth_id=${auth_id}&component=balance&start_date=${start_date}&end_date=${end_date}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: WALLET,
          payload: res.data.data.total ? res.data.data.total : 0,
        });
      }
    } catch (err) {}
  };
export const getFundingBalance =
  (auth_id = "", status = "", transaction_type = "fund", start_date = "", end_date = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${api.wallet}/v1.1/admin/wallet-transactions?auth_id=${auth_id}&status=${status}&component=funding-balance&start_date=${start_date}&end_date=${end_date}&transaction_type=${transaction_type}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: FUNDING_BALANCE,
          payload: res.data.data.total ? res.data.data.total : 0,
        });
      }
    } catch (err) {}
  };

export const getSingleWalletTransaction = (transaction_id, spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(
      `${api.wallet}/v1.1/admin/wallet-transactions/${transaction_id}`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: SINGLE_WALLET_TRANSACTION,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    dispatch(endLoading());
  }
};
