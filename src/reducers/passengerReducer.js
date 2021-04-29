import {PASSENGER, PASSENGERS} from "Actions/types";


const initialState = {
  passengers: [],
  passenger: [],
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
    case PASSENGER: {
      return {
        ...state,
        passenger: payload,
      };
    }
    default:
      return state
  }
}

export default passengerReducer;
