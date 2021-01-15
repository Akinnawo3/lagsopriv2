import { NotificationManager } from 'react-notifications';
import {LOGIN_USER_SUCCESS,} from 'Actions/types';
import {isLoading} from "./loadingAction";
import api from '../api'



export const loginUser = (username, password) => async dispatch => {
    const body = {username, password}
    try {
        dispatch(isLoading());
        const res = await api.post('api/login/', body)
        const token  = res.data.Authorized
        localStorage.setItem("user_id", token);
        location.replace("/");
        dispatch({
            type: LOGIN_USER_SUCCESS,
            payload: res.data
        });
        dispatch(isLoading());
    } catch (err) {
        dispatch(isLoading());
        NotificationManager.error(err.message);

    }
};


export const logoutUser = () => {
    localStorage.removeItem("user_id");
    location.replace("/login");
};
