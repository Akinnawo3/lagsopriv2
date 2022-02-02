import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {GEOFENCES, FENCES_COUNT} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";

export const createGeoFence = (name, description, locations) => async (dispatch) => {
  const body = {name, description, locations};
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.customerCare}/v1.1/settings/geofence`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Geo-Fence Created Successfully!");
      await dispatch(getGeoFence(1, true));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const getGeoFence =
  (page_no = 1, spinner) =>
  async (dispatch) => {
    try {
      spinner && (await dispatch(startLoading()));
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(`${api.customerCare}/v1.1/settings/geofence?page=${page_no}&item_per_page=20`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: GEOFENCES,
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

export const getGeoFenceCount = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api.customerCare}/v1.1/settings/geofence?component=count `);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: FENCES_COUNT,
        payload: res.data?.data?.total,
      });
    }
  } catch (err) {}
};

// export const searchAreas = (searchData) => async (dispatch) => {
//   try {
//     dispatch(startStatusLoading());
//     const res = await axios.get(`${api.area}/v1.1/areas?q=${searchData}`);
//     if (res.data.status === "error") {
//       NotificationManager.error(res.data.msg);
//     } else {
//       const res2 = await axios.get(`${api.area}/v1.1/areas?q=${searchData}&component=count`);
//       dispatch({
//         type: AREAS,
//         payload: res.data.data,
//       });
//       dispatch({
//         type: AREA_COUNT,
//         payload: res2.data.data.total ? res2.data.data.total : 0,
//       });
//     }
//     dispatch(endStatusLoading());
//   } catch (err) {
//     dispatch(endStatusLoading());
//   }
// };

export const updateGeoFence = (geoFence_id, name, description, locations) => async (dispatch) => {
  const body = {name, description, locations};
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.customerCare}/v1.1/settings/geofence/${geoFence_id}`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Geo-Fence Updated Successfully!");
      await dispatch(getAreas());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const deleteGeoFence = (geoFence_id) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.delete(`${api.customerCare}/v1.1/settings/geofence/${geoFence_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Geo-Fence deleted Successfully!");
      dispatch(getGeoFence(1));
      dispatch(getGeoFenceCount());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
