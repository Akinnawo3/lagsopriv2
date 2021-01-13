import {
  ADMINS, ADMINS_LOADING

} from "Actions/types";

const initialState = {
  admins: [],
  isLoading: false
};

function adminsReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADMINS: {
      return {
        ...state,
        admins: payload,
      };
    }
    case ADMINS_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    default:
      return state
  }

}

export default adminsReducer;
