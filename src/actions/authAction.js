import { NotificationManager } from 'react-notifications';
import {LOGIN_USER_SUCCESS,} from 'Actions/types';
import {endLoading, startLoading} from "./loadingAction";
import axios from 'axios'
import cookies from "Util/cookies";



export const loginUser = (username, password) => async dispatch => {
    const body = {username, password}
    try {
        dispatch(startLoading());
        const res = await axios.post('http://212.71.246.199:8000/api/login/', body)
        const token  = res.data.Authorized
        cookies.set('user_id', token);
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
