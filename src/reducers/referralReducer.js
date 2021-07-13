import {REFERRAL, REFERRAL_COUNT} from "Actions/types";


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
    default:
      return state
  }
}

export default referralReducer;
