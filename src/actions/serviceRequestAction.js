import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {SERVICE_REQUESTS, SERVICE_REQUEST_COUNT, SERVICE_REQUEST} from "./types";

import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const getServiceRequests =
  (page_no = 1, spinner, oem_id, status, service_type) =>
  async (dispatch) => {
    try {
      spinner && (await dispatch(startLoading()));
      !spinner && (await dispatch(startStatusLoading()));
      const res = await axios.get(`${api.oem}/v1.1/admin/service-requests/?oem_id=${oem_id}&status=${status}&service_type=${service_type}&item_per_page=20&page=${page_no}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: SERVICE_REQUESTS,
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

export const getServiceRequestsCount = (oem_id, status, service_type) => async (dispatch) => {
  try {
    const res = await axios.get(`${api.oem}/v1.1/admin/service-requests/?oem_id=${oem_id}&status=${status}&service_type=${service_type}&component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: SERVICE_REQUEST_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0,
      });
    }
  } catch (err) {}
};
serv;
export const getServiceRequest = (request_id, spinner) => async (dispatch) => {
  try {
    spinner && (await dispatch(startLoading()));
    !spinner && (await dispatch(startStatusLoading()));
    const res = await axios.get(`${api.oem}/v1.1/admin/service-requests/${request_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: SERVICE_REQUEST,
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
