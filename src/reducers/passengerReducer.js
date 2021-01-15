import {PASSENGERS} from "Actions/types";


const initialState = {
  passengers: [],
};

function passengerReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PASSENGERS: {
      return {
        ...state,
        passengers: payload,
      };
    }
    default:
      return state
  }
}

export default passengerReducer;
