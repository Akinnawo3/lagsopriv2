import {LOADING, LOADING_STATUS} from "Actions/types";

export const isLoading = () => dispatch => {
        dispatch({
        type: LOADING,
        });
};

export const isStatusLoading = () => dispatch => {
        dispatch({
                type: LOADING_STATUS,
        });
};


