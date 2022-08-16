import axios from "axios";
import { endLoading, endStatusLoading, startLoading, startStatusLoading } from "./loadingAction";
import {
   PARTNERS,
   PARTNERS_COUNT,
   PARTNER, PARTNER_DRIVERS, PARTNER_DRIVERS_COUNT
} from "./types";
import { NotificationManager } from "react-notifications";
import api from "../environments/environment";
import { getDriver, sendDriverMessage } from "./driverAction";
import { sendVehicleUnassignMessage } from "Actions/vehicleAction";
import emailMessages from "Assets/data/email-messages/emailMessages";

export const getPartners =
   (page_no = 1, spinner, start_date = "", end_date = "", status = '') =>
      async (dispatch) => {
         try {
            spinner && (await dispatch(startLoading()));
            !spinner && (await dispatch(startStatusLoading()));
            const res = await axios.get(
               `${api.user}/v1.1/admin/users?user_type=partner&item_per_page=20&page=${page_no}&start_date=${start_date}&end_date=${end_date}&account_status=${status}`
            );
            console.log(res.data.data, 'from partners')
            if (res.data.status === "error") {
               NotificationManager.error(res.data.msg);
            } else {
               dispatch({
                  type: PARTNERS,
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

export const getPartnersCount = (start_date = "", end_date = "", status = '') => async (dispatch) => {
   try {
      const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=partner&component=count&start_date=${start_date}&end_date=${end_date}&account_status=${status}`);
      if (res.data.status === "error") {
         NotificationManager.error(res.data.msg);
      } else {
         dispatch({
            type: PARTNERS_COUNT,
            payload: res.data.data.total ? res.data.data.total : 0,
         });
      }
   } catch (err) { }
};

export const createPartners = (data, handleSuccess) => async (dispatch) => {
   if (data?.account_type === 'organization' && /lrtester/i.test(data?.first_name)) {
      const testerName = data?.first_name.split(' ')
      const fn = testerName.splice(0, testerName.length - 1)
      data.first_name = fn.join(' ')
      data.last_name = testerName[testerName.length - 1]
   }

   try {
      dispatch(startStatusLoading());
      const res = await axios.post(`${api.user}/v1.1/admin/users`, data);
      if (res.data.status === "error") {
         NotificationManager.error(res.data.msg);
      } else {
         await NotificationManager.success("Partner Created Successfully!");
         typeof handleSuccess === "function" ? handleSuccess() : null
         await dispatch(getPartners());
         await dispatch(getPartnersCount());
      }
      dispatch(endStatusLoading());
   } catch (e) {
      dispatch(endStatusLoading());
      NotificationManager.error("Network error");
   }
};

export const searchPartners = (searchData) => async dispatch => {
   try {
      dispatch(startStatusLoading());
      const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=partner&q=${searchData}`);
      if (res.data.status === 'error') {
         NotificationManager.error(res.data.msg);
      } else {
         const res2 = await axios.get(`${api.user}/v1.1/admin/users?user_type=partner&component=count&q=${searchData}`);
         dispatch({
            type: PARTNERS_COUNT,
            payload: res2.data.data.total ? res2.data.data.total : 0
         });
         dispatch({
            type: PARTNERS,
            payload: res.data.data
         });
      }
      dispatch(endStatusLoading());
   } catch (err) {
      dispatch(endStatusLoading());
      NotificationManager.error(err.response.data.result)
   }
};

export const getPartner = (auth_id, loading = true) => async dispatch => {
   try {
      loading ? dispatch(startLoading()) : dispatch(startStatusLoading());
      const res = await axios.get(`${api.user}/v1.1/admin/users/${auth_id}/?user_type=partner`);
      if (res.data.status === 'error') {
         NotificationManager.error(res.data.msg);
      } else {
         dispatch({
            type: PARTNER,
            payload: res.data.data
         });
      }
      loading ? dispatch(endLoading()) : dispatch(endStatusLoading());
   } catch (err) {
      loading ? dispatch(endLoading()) : dispatch(endStatusLoading());
   }
};

export const updatePartnerDriverPayment = (auth_id, data, closeDriverPaymentModal) => async dispatch => {
   try {
      dispatch(startStatusLoading());
      const res = await axios.put(`${api.user}/v1.1/admin/users/${auth_id}`, data);
      if (res.data.status === 'error') {
         NotificationManager.error(res.data.msg);
      } else {
         NotificationManager.success('updated successfully')
         if (typeof closeDriverPaymentModal === "function") {
            closeDriverPaymentModal()
         }
         await dispatch(getPartner(auth_id, false))
      }
      dispatch(endStatusLoading());
   } catch (err) {
      dispatch(endStatusLoading());
   }
};

export const assignVehicleToPartner = (vehicle_id, auth_id, setAddVehicleModal) => async (dispatch) => {
   const body = { vehicle_id, auth_id, user_type: "partner" };
   try {
      dispatch(startStatusLoading());
      const res = await axios.post(`${api.vehicles}/v1.1/admin/assign-vehicle`, body);
      if (res.data.status !== "ok") {
         NotificationManager.error(res.data.msg);
      } else {
         await NotificationManager.success("Vehicle assigned Successfully!");
         typeof setAddVehicleModal === "function" ? setAddVehicleModal(false) : null
         await dispatch(getPartner(auth_id, false));
      }
      dispatch(endStatusLoading());
   } catch (err) {
      dispatch(endStatusLoading());
      console.log(err);
      // NotificationManager.error(err.response.data.error);
   }
};

export const changePartnerStatus = (auth_id, partner_status) => async (dispatch) => {
   // partnerDetails?.auth_id, "4", partnerDetails, emailMessages.approvedPartnerMessage, "Partner Approved"
   const body = { component: "partner_status", auth_id, partner_status };
   try {
      dispatch(startStatusLoading());
      const res = await axios.put(`${api.user}/v1.1/admin/users`, body);
      if (res.data.status === "error") {
         NotificationManager.error(res.data.msg);
      } else {
         await NotificationManager.success("Partner updated!");
         await dispatch(getPartner(auth_id, false));
      }
      dispatch(endStatusLoading());
   } catch (err) {
      dispatch(endStatusLoading());
      NotificationManager.error(err.response.data.message);
   }
};

export const revokePartnerVehicle = (vehicle_id, vehicleDetails, partnerDetails) => async (dispatch) => {
   try {
      dispatch(startStatusLoading());
      const res = await axios.post(`${api.vehicles}/v1.1/admin/revoke-vehicle`, { vehicle_id });
      if (res.data.status === "error") {
         NotificationManager.error(res.data.msg);
      } else {
         await NotificationManager.success("Vehicle unassigned Successfully!");
         await dispatch(sendVehicleUnassignMessage(partnerDetails, vehicleDetails));
         await dispatch(getPartner(partnerDetails?.auth_id, false));
      }
      dispatch(endStatusLoading());
   } catch (err) {
      dispatch(endStatusLoading());
      NotificationManager.error("network error, try again");
   }
};


export const getPartnerDrivers =
   (partner_id, page_no = 1, spinner, start_date = "", end_date = "") =>
      async (dispatch) => {
         try {
            spinner && (await dispatch(startLoading()));
            !spinner && (await dispatch(startStatusLoading()));
            const res = await axios.get(
               `${api.user}/v1.1/admin/partner-drivers/${partner_id}?user_type=partner&item_per_page=20&page=${page_no}&start_date=${start_date}&end_date=${end_date}`
            );
            // console.log(res.data.data, 'from partners')
            if (res.data.status === "error") {
               NotificationManager.error(res.data.msg);
            } else {
               dispatch({
                  type: PARTNER_DRIVERS,
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


export const getPartnerDriverCount = (partner_id, start_date = "", end_date = "") => async (dispatch) => {
   try {
      const res = await axios.get(`${api.user}/v1.1/admin/partner-drivers/${partner_id}?user_type=partner&component=count&start_date=${start_date}&end_date=${end_date}`);
      if (res.data.status === "error") {
         NotificationManager.error(res.data.msg);
      } else {
         dispatch({
            type: PARTNER_DRIVERS_COUNT,
            payload: res.data.data.total ? res.data.data.total : 0,
         });
      }
   } catch (err) { }
};


export const verifyPartnerNIN = (auth_id, verification_status, verification_name, messageData) => async (dispatch) => {
   const body = {
      auth_id,
      kyc_status: verification_status,
   };
   try {
      dispatch(startStatusLoading());
      const res = await axios.post(`${api.user}/v1.1/admin/user-kyc-status`, body);
      if (res.data.status === "error") {
         NotificationManager.error(res.data.msg);
      } else {
         await NotificationManager.success("NIN verified  Successfully!");
         await dispatch(getPartner(auth_id, false));
         await axios.post(`${api.messageWorker}/v1.1/messages/send`, messageData);
      }
      dispatch(endStatusLoading());
   } catch (err) {
      dispatch(endStatusLoading());
      NotificationManager.error(err.response.data.message);
   }
};



