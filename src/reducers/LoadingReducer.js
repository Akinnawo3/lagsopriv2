import {LOADING, LOADING_STATUS} from 'Actions/types';

const INIT_STATE = {
    loading: false,
    loadingStatus: false
};

const loadingReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, loading: !state.loading};
        case LOADING_STATUS:
            return { ...state, loadingStatus: !state.loadingStatus};
        default: return { ...state };
    }
}

export default loadingReducer
