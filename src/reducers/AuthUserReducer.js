import cookies from "Util/cookies";
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER,
} from 'Actions/types';


/**
 * initial auth user
 */
const INIT_STATE = {
    user: cookies.get('user_id')
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
