import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {AREAS, AREA_COUNT} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createArea = (area_name, lga, lat, lon) => async (dispatch) => {
  const body = {area_name, lga, lat, lon};
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.area}/v1.1/areas`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Area Created Successfully!");
      await dispatch(getAreas());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getAreas =
  (page_no = 1, spinner) =>
  async (dispatch) => {
    try {
      spinner && (await dispatch(startLoading()));
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(`${api.area}/v1.1/areas?page=${page_no}&item_per_page=20`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: AREAS,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endLoading());
      dispatch(endStatusLoading());
      NotificationManager.error(err.response.data.error);
    }
  };

export const getAreasCount = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api.area}/v1.1/areas?component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: AREA_COUNT,
        payload: res.data?.data?.total,
      });
    }
  } catch (err) {}
};

export const searchAreas = (searchData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.area}/v1.1/areas?q=${searchData}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const res2 = await axios.get(`${api.area}/v1.1/areas?q=${searchData}&component=count`);
      dispatch({
        type: AREAS,
        payload: res.data.data,
      });
      dispatch({
        type: AREA_COUNT,
        payload: res2.data.data.total ? res2.data.data.total : 0,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const updateArea = (area_id, area_name, lga, lat, lon, old_area) => async (dispatch) => {
  const body = {area_name, lga, lat, lon, old_area};
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.area}/v1.1/areas/${area_id}`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Area Updated Successfully!");
      await dispatch(getAreas());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const deleteArea = (area_id, areas) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.delete(`${api.area}/v1.1/areas/${area_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Area deleted Successfully!");
      const areaData = areas.filter((area) => area.area_id !== area_id);
      dispatch({
        type: AREAS,
        payload: areaData,
      });
      dispatch(getAreasCount());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
