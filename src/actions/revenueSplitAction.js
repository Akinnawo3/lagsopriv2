import axios from "axios";
import {REVENUE_SPLIT_DATA, DRIVER_REVENUE_SPLIT, CHART_REVENUE_DATA} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const getRevenueSplitData = (spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/settings`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: REVENUE_SPLIT_DATA,
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

export const updateRevenueSplitData = (data) => async (dispatch) => {
  try {
    await dispatch(startStatusLoading());
    const res = await axios.post(`${api.revenueSplit}/v1.1/admin/settings`, data);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Updates Successfully");
      await dispatch(getRevenueSplitData());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const getDriverRevenueSPlit = (spinner, driverID, startDate, endDate) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/revenues/?driver_id=${driverID}&start_date=${startDate}&end_date=${endDate}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: DRIVER_REVENUE_SPLIT,
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

export const getChartRevenueData = (spinner, startDate, endDate) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.revenueSplit}/v1.1/admin/revenue-shares?start_date=${"2022-01-18"}&end_date=${"2022-01-21"}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: CHART_REVENUE_DATA,
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
