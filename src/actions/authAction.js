import {NotificationManager} from "react-notifications";
import {LOGIN_USER} from "./types";
import {endLoading, startLoading} from "./loadingAction";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

import api from "../environments/environment";

export const loginUser = (phone_number, password) => async (dispatch) => {
  const body = {phone_number, password, user_type: "admin"};
  try {
    dispatch(startLoading());
    const res = await axios.post(`https://users-service-microservices.api.lagosride.com/v1.1/auth/login`, body);
    console.log(res.data.status);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const userType = res.data.data.user_type;
      if (userType === "superadmin" || userType === "admin") {
        const token = res.data.data.token;
        await cookies.set("user_id", token);
        await cookies.set("userProfile", JSON.stringify(res.data.data));
        await dispatch({
          type: LOGIN_USER,
          payload: res.data.data,
        });
        location.replace("/");
      } else {
        NotificationManager.error("Invalid phone or password");
      }
    }
    dispatch(endLoading());
  } catch (err) {
    dispatch(endLoading());
    console.log(err);
    NotificationManager.error("Network error please try again or check your internet connection ");
  }
};

// export const logoutUser = () => async dispatch => {
//     try {
//         dispatch(startLoading());
//         const res = await axios.get(`${api.user}/v1.1/auth/logout`)
//         console.log(res.data)
//         if(res.data.status === 'error') {
//             NotificationManager.error(res.data.msg);
//         }else {
//           await  cookies.remove('user_id');
//           await  dispatch({
//                 type: LOGOUT_USER,
//             });
//             location.replace("/login");
//         }
//         dispatch(endLoading());
//     } catch (err) {
//         dispatch(endLoading());
//         NotificationManager.error('Network error please try again or check your internet connection ');
//
//     }
// };

export const logoutUser = async () => {
  cookies.remove("user_id");
  // localStorage.removeItem("user_id");
  location.replace("/login");
};
