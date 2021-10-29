import axios from "axios";
import { REFERRAL, REFERRAL_COUNT } from "./types";
import {
  endLoading,
  endStatusLoading,
  startLoading,
  startStatusLoading,
} from "./loadingAction";
import { NotificationManager } from "react-notifications";
import api from "../environments/environment";

export const getReferral =
  (page_no = 1, spinner) =>
  async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.referral}/v1.1/referrals/?page=${page_no}&item_per_page=20`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: REFERRAL,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endLoading());
      dispatch(endStatusLoading());
      NotificationManager.error(err.response.data.result);
    }
  };

export const getReferralCount = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api.referral}/v1.1/referrals?component=count`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: REFERRAL_COUNT,
        payload: res.data?.data?.total,
      });
    }
  } catch (err) {}
};
