import {DRIVER_RATING, PASSENGER_RATING, PASSENGERS, RATING, RATING_AVERAGE} from "Actions/types";


const initialState = {
  passengerRating: [],
  driverRating: [],
  rating: [],
  ratingAverage: 0,
};

function ratingReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PASSENGER_RATING: {
      return {
        ...state,
        passengerRating: payload,
      };
    }
      case DRIVER_RATING: {
      return {
        ...state,
        driverRating: payload,
      };
    }
    case RATING: {
      return {
        ...state,
        rating: payload,
      };
    }
    case RATING_AVERAGE: {
      return {
        ...state,
        ratingAverage: payload,
      };
    }
    default:
      return state
  }
}

export default ratingReducer;
