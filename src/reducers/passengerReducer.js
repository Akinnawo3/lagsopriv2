import {PASSENGER, PASSENGER_COUNT, PASSENGERS} from "Actions/types";


const initialState = {
  passengers: [],
  passenger: [],
  passengerCount: 0,
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
    case PASSENGER_COUNT: {
      return {
        ...state,
        passengerCount: payload,
      };
    }
    default:
      return state
  }
}

export default passengerReducer;
