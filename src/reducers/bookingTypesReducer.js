import {BOOKING_TYPE} from "Actions/types";

const initialState = {
  bookingTypes: [],
};

function bookingTypesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case BOOKING_TYPE: {
      return {
        ...state,
        bookingTypes: payload,
      };
    }
    default:
      return state
  }

}

export default bookingTypesReducer;
