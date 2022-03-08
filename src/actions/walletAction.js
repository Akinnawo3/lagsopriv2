import axios from "axios";
import {WALLETS, WALLETS_COUNT, WALLET, WALLETS_TRANSACTIONS, WALLETS_TRANSACTIONS_COUNT} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const getWallets =
  (page_no = 1, status = "", auth_id = "", loading) =>
  async (dispatch) => {
    try {
      loading && dispatch(startStatusLoading());
      const res = await axios.get(`${api.wallet}/v1.1/admin/wallet-transactions?item_per_page=20&page=${page_no}&status=${status}&auth_id=${auth_id}`);
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
  (transaction_status = "", auth_id, loading) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.wallet}/v1.1/admin/wallet-transactions?component=count&transaction_status=${transaction_status}&auth_id=${auth_id}`);
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

export const getWalletBalance =
  (auth_id = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.wallet}/v1.1/admin/wallet-transactions?auth_id=${auth_id}&component=balance`);
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
