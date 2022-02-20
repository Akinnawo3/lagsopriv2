import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {sendMessage} from "./messagesAction";
import {OEMS, OEMS_COUNT} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
// import {configureStore} from "../store";
// import {changeCurrentPage, onAddUpdateUserModalClose} from "Routes/admin/admins";
import emailMessages from "Assets/data/email-messages/emailMessages";

// export const getAdmins =
//   (page_no = 1, spinner) =>
//   async (dispatch) => {
//     try {
//       spinner && (await dispatch(startLoading()));
//       !spinner && (await dispatch(startStatusLoading()));
//       const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=admin&item_per_page=20&page=${page_no}`);
//       if (res.data.status === "error") {
//         NotificationManager.error(res.data.msg);
//       } else {
//         dispatch({
//           type: ADMINS,
//           payload: res.data.data,
//         });
//       }
//       dispatch(endLoading());
//       dispatch(endStatusLoading());
//     } catch (err) {
//       dispatch(endLoading());
//       dispatch(endStatusLoading());
//     }
//   };

// export const getAdminCount = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=admin&component=count`);
//     if (res.data.status === "error") {
//       NotificationManager.error(res.data.msg);
//     } else {
//       dispatch({
//         type: ADMIN_COUNT,
//         payload: res.data.data.total ? res.data.data.total : 0,
//       });
//     }
//   } catch (err) {}
// };

// export const createAdmin = (adminData) => async (dispatch) => {
//   const body = {
//     ...adminData,
//     password: "Password123",
//   };
//   try {
//     dispatch(startStatusLoading());
//     const res = await axios.post(`${api.user}/v1.1/admin`, body);
//     if (res.data.status === "error") {
//       NotificationManager.error(res.data.msg);
//     } else {
//       // await changeCurrentPage();
//       await NotificationManager.success("Admin Created Successfully!");
//       await dispatch(
//         sendMessage({
//           type: "generic",
//           subject: "Admin Login Details",
//           message: emailMessages.newAdminMsg(`${adminData.first_name}`, adminData.phone_number, "Password123"),
//           // message: "the messagejnrjtnjrn",
//           name: adminData.first_name,
//           email: adminData.email,
//         })
//       );
//       await dispatch(getAdmins());
//       await dispatch(getAdminCount());
//     }
//     dispatch(endStatusLoading());
//   } catch (e) {
//     console.log(e.message);
//     dispatch(endStatusLoading());
//     NotificationManager.error("Network error");
//   }
// };

// export const updateAdmin = (adminData, auth_id) => async (dispatch) => {
//   const body = {
//     ...adminData,
//     password: "Password123",
//   };
//   try {
//     dispatch(startStatusLoading());
//     const res = await axios.put(`${api.user}/v1.1/admin/${auth_id}`, body);
//     if (res.data.status === "error") {
//       NotificationManager.error(res.data.msg);
//     } else {
//       await NotificationManager.success("Admin Updated Successfully!");
//       await dispatch(getAdmins());
//     }
//     dispatch(endStatusLoading());
//   } catch (e) {
//     dispatch(endStatusLoading());
//     NotificationManager.error("Network error");
//   }
// };

// export const deleteAdmin = (auth_id, adminsData) => async (dispatch) => {
//   try {
//     dispatch(startStatusLoading());
//     const res = await axios.delete(`${api.user}/v1.1/admin/users/${auth_id}`);
//     if (res.data.status === "error") {
//       NotificationManager.error(res.data.msg);
//     } else {
//       const admins = adminsData.filter((item) => item.auth_id !== auth_id);
//       dispatch({
//         type: ADMINS,
//         payload: admins,
//       });
//       NotificationManager.success("Deleted successfully");
//     }
//     dispatch(endStatusLoading());
//   } catch (err) {
//     NotificationManager.error(err.response.data.error);
//     dispatch(endStatusLoading());
//   }
// };

// export const searchAdmins = (searchData) => async (dispatch) => {
//   try {
//     dispatch(startStatusLoading());
//     const res = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}&user_type=admin`);
//     if (res.data.status === "error") {
//       NotificationManager.error(res.data.msg);
//     } else {
//       const res2 = await axios.get(`${api.user}/v1.1/admin/users?q=${searchData}&component=count&user_type=admin`);
//       dispatch({
//         type: ADMIN_COUNT,
//         payload: res2.data.data.total ? res2.data.data.total : 0,
//       });
//       dispatch({
//         type: ADMINS,
//         payload: res.data.data,
//       });
//     }
//     dispatch(endStatusLoading());
//   } catch (err) {
//     dispatch(endStatusLoading());
//   }
// };
