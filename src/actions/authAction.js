import { NotificationManager } from 'react-notifications';
import {LOGIN_USER_SUCCESS,} from 'Actions/types';
import {endLoading, startLoading} from "./loadingAction";
import axios from 'axios'
import cookies from "Util/cookies";
import api from "../environments/environment";



export const loginUser = (username, password) => async dispatch => {
    const body = {email:username, password}
    try {
        dispatch(startLoading());
        const res = await axios.post(`${api.auth}/api/login/`, body)
        const token  = res.data.Authorized
        const authId = res.data.auth_id
        cookies.set('user_id', token);
        cookies.set('authId', authId);
        // localStorage.setItem("user_id", token);
        location.replace("/");
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        });
        dispatch(endLoading());
    } catch (err) {
        dispatch(endLoading());
        NotificationManager.error('Username or Password Incorrect');

    }
};


export const logoutUser = () => {
    cookies.remove('user_id');
    // localStorage.removeItem("user_id");
    location.replace("/login");
};
