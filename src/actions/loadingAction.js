import {
        LOADING_END,
        LOADING_START,
        LOADING_STATUS_END,
        LOADING_STATUS_START
} from "./types";

export const startLoading = () => dispatch => {
        dispatch({
        type: LOADING_START,
        });
};

export const endLoading = () => dispatch => {
        dispatch({
                type: LOADING_END,
        });
};

export const startStatusLoading = () => dispatch => {
        dispatch({
                type: LOADING_STATUS_START,
        });
};

export const endStatusLoading = () => dispatch => {
        dispatch({
                type: LOADING_STATUS_END,
        });
};


