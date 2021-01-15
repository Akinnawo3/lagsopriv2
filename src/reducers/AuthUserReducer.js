/**
 * Auth User Reducers
 */
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE
} from 'Actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
    user: localStorage.getItem('user_id'),
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };

        case LOGIN_USER_FAILURE:
            return { ...state };

        case LOGOUT_USER:
            return { ...state, user: null };


        default: return { ...state };
    }
}
