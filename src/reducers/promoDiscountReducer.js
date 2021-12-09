import {PROMO_TYPE, PROMO_COUNT,PROMO_DETAILS} from "Actions/types";

const initialState = {
  promoDiscounts: [],
  promoDiscountsCount: "",
  promoDetails: "",
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
    default:
      return state;
  }
}

export default promoDiscountReducer;
