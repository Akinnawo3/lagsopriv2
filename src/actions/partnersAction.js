import axios from "axios";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {sendMessage} from "./messagesAction";
import {ADMINS, ADMIN_COUNT, USER_COUNT, USERS, PARTNERS, PARTNERS_COUNT, PASSENGER_COUNT, PASSENGERS} from "./types";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
import {configureStore} from "../store";
import {changeCurrentPage, onAddUpdateUserModalClose} from "Routes/admin/admins";
import emailMessages from "Assets/data/email-messages/emailMessages";

export const getPartners =
  (page_no = 1, spinner, start_date = "", end_date = "") =>
  async (dispatch) => {
    try {
      spinner && (await dispatch(startLoading()));
      !spinner && (await dispatch(startStatusLoading()));
      const res = await axios.get(
          `${api.user}/v1.1/admin/users?user_type=partner&item_per_page=20&page=${page_no}&start_date=${start_date}&end_date=${end_date}`
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

export const getPartnersCount = (start_date = "", end_date = "") => async (dispatch) => {
  try {
    const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=partner&component=count&start_date=${start_date}&end_date=${end_date}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: PARTNERS_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0,
      });
    }
  } catch (err) {}
};

export const createPartners = (data, handleSuccess) => async (dispatch) => {
  if(data?.account_type === 'organization' && /lrtester/i.test(data?.first_name)) {
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
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
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

