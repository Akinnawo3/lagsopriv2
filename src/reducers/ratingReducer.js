import {RATINGS, RATING_COUNT, RATING, RATING_USER, RATING_COUNT_USER, RATING_USER_AVERAGE} from "Actions/types";


const initialState = {
  ratings: [],
  ratingsUser: [],
  rating: {},
  ratingCount: 0,
  ratingCountUser: 0,
  ratingsUserAverage: 0,
};

function ratingReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RATINGS: {
      return {
        ...state,
        ratings: payload,
      };
    }
    case RATING: {
      return {
        ...state,
        rating: payload,
      };
    }
    case RATING_USER: {
      return {
        ...state,
        ratingsUser: payload,
      };
    }
    case RATING_USER_AVERAGE: {
      return {
        ...state,
        ratingsUserAverage: payload,
      };
    }
    case RATING_COUNT: {
      return {
        ...state,
        ratingCount: payload,
      };
    }
    case RATING_COUNT_USER: {
      return {
        ...state,
        ratingCountUser: payload,
      };
    }
    default:
      return state
  }
}

export default ratingReducer;
