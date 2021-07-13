import {CANCELLATION_REASONS} from "Actions/types";

const initialState = {
  reasons: [],
};

function cancellationReasonReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CANCELLATION_REASONS: {
      return {
        ...state,
        reasons: payload,
      };
    }
    default:
      return state
  }

}

export default cancellationReasonReducer;
