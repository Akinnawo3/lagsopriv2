import {PROMO_TYPE, PROMO_COUNT, PROMO_DETAILS, PROMO_USERS, PROMO_USERS_COUNT} from "Actions/types";

const initialState = {
  promoDiscounts: [],
  promoDiscountsCount: "",
  promoDetails: "",
  promoUsers: "",
  promoUsersCount: "",
};

function promoDiscountReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case PROMO_TYPE: {
      return {
        ...state,
        promoDiscounts: payload,
      };
    }
    case PROMO_COUNT: {
      return {
        ...state,
        promoDiscountsCount: payload,
      };
    }
    case PROMO_DETAILS: {
      return {
        ...state,
        promoDetails: payload,
      };
    }
    case PROMO_USERS: {
      return {
        ...state,
        promoUsers: payload,
      };
    }
    case PROMO_USERS_COUNT: {
      return {
        ...state,
        promoUsersCount: payload,
      };
    }
    default:
      return state;
  }
}

export default promoDiscountReducer;
