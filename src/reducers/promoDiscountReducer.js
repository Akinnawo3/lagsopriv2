import {PROMO_TYPE} from "Actions/types";

const initialState = {
  promoDiscounts: [],
};

function promoDiscountReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PROMO_TYPE: {
      return {
        ...state,
        promoDiscounts: payload,
      };
    }
    default:
      return state
  }

}

export default promoDiscountReducer;
