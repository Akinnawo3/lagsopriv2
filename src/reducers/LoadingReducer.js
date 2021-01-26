import {
    LOADING_END,
    LOADING_START,
    LOADING_STATUS_END,
    LOADING_STATUS_START
} from 'Actions/types';

const INIT_STATE = {
    loading: false,
    loadingStatus: false
};

const loadingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOADING_START:
            return { ...state, loading: true};
        case LOADING_END:
            return { ...state, loading: false};
        case LOADING_STATUS_START:
            return { ...state, loadingStatus: true};
        case LOADING_STATUS_END:
            return { ...state, loadingStatus: false};
        default: return { ...state };
    }
}

export default loadingReducer
