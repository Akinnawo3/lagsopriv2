import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {sendMessage} from "./messagesAction";
import {OEMS, OEMS_COUNT, OEMS_VEHICLES} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
// import {configureStore} from "../store";
// import {changeCurrentPage, onAddUpdateUserModalClose} from "Routes/admin/admins";
import emailMessages from "Assets/data/email-messages/emailMessages";
import {onAddUpdateOemModalClose} from "../routes/setup/component/oemTable";

export const getOems =
  (page_no = 1, spinner) =>
  async (dispatch) => {
    try {
      spinner && (await dispatch(startLoading()));
      !spinner && (await dispatch(startStatusLoading()));
      const res = await axios.get(`${api.oem}/v1.1/admin/users?user_type=oem&item_per_page=20&page=${page_no}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: OEMS,
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

export const getOemCount = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api.oem}/v1.1/admin/users?user_type=oem&component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: OEMS_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0,
      });
    }
  } catch (err) {}
};

export const creatOEM = (body) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.oem}/v1.1/admin/users`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      // await changeCurrentPage();
      await NotificationManager.success("OEM Created Successfully!");
      // await dispatch(
      //   sendMessage({
      //     type: "generic",
      //     subject: "OEM Login Details",
      //     message: emailMessages.newOemMsg(`${body.name}`, body.phone_number, body.password),
      //     name: body.name,
      //     email: body.email,
      //   })
      // );
      onAddUpdateOemModalClose();
      await dispatch(getOems());
      await dispatch(getOemCount());
    }
    dispatch(endStatusLoading());
  } catch (e) {
    console.log(e);
    dispatch(endStatusLoading());
    NotificationManager.error("Network error");
  }
};

export const updateOEM = (body, auth_id) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.oem}/v1.1/admin/users/${auth_id}`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("OEM Details Updated Successfully!");
      onAddUpdateOemModalClose();

      await dispatch(getOems());
      await dispatch(getOemCount());
    }
    dispatch(endStatusLoading());
  } catch (e) {
    dispatch(endStatusLoading());
    NotificationManager.error("Network error");
  }
};

export const deleteOEM = (authId, oemData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.delete(`${api.oem}/v1.1/admin/users/${authId}`);
    console.log(res.data.status);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const oems = oemData.filter((item) => item.auth_id !== authId);
      dispatch({
        type: OEMS,
        payload: oems,
      });
      NotificationManager.success("Deleted successfully");
    }
    dispatch(endStatusLoading());
  } catch (err) {
    console.log(err.message);
    NotificationManager.error("Network error");
    dispatch(endStatusLoading());
  }
};

export const getVehiclesByOem =
  (page_no = 1, spinner, oem_id) =>
  async (dispatch) => {
    try {
      spinner && (await dispatch(startLoading()));
      !spinner && (await dispatch(startStatusLoading()));
      const res = await axios.get(`${api.oem}/v1.1/vehicles/?oem_id=${oem_id}&item_per_page=20&page=${page_no}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: OEMS_VEHICLES,
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

// export const getOemCount = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`${api.oem}/v1.1/admin/users?user_type=oem&component=count`);
//     if (res.data.status === "error") {
//       NotificationManager.error(res.data.msg);
//     } else {
//       dispatch({
//         type: OEMS_COUNT,
//         payload: res.data.data.total ? res.data.data.total : 0,
//       });
//     }
//   } catch (err) {}
// };
