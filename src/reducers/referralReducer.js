import {
  REFERRAL,
  REFERRAL_COUNT,
  REFERRAL_PAYMENT_DETAILS,
} from "Actions/types";

const initialState = {
  referrals: [],
  referralCount: 0,
};

function referralReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REFERRAL: {
      return {
        ...state,
        referrals: payload,
      };
    }
    case REFERRAL_COUNT: {
      return {
        ...state,
        referralCount: payload,
      };
    }
    case REFERRAL_PAYMENT_DETAILS: {
      return {
        ...state,
        referralPaymentDetails: payload,
      };
    }
    default:
      return state;
  }
}

export default referralReducer;
