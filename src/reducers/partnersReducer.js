import {
  PARTNER,
  PARTNER_DRIVERS,
  PARTNER_DRIVERS_COUNT,
  PARTNER_PAYOUT,
  PARTNER_PAYOUT_COUNT,
  PARTNERS,
  PARTNERS_COUNT
} from "Actions/types";

const initialState = {
  partners: [],
  partnersCount: 0,
  partner: {},
  partnerDrivers: [],
  partnerDriversCount: 0,
  partnerPayout: [],
  partnerPayoutCount: 0,

};

function partnersReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PARTNERS: {
      return {
        ...state,
        partners: payload,
      };
    }
    case PARTNERS_COUNT: {
      return {
        ...state,
        partnersCount: payload,
      };
    }
    case PARTNER: {
      return {
        ...state,
        partner: payload,
      };
    }
    case PARTNER_DRIVERS: {
      return {
        ...state,
        partnerDrivers: payload,
      };
    }
    case PARTNER_DRIVERS_COUNT: {
      return {
        ...state,
        partnerDriversCount: payload,
      };
    }
    case PARTNER_PAYOUT: {
      return {
        ...state,
        partnerPayout: payload,
      };
    }
    case PARTNER_PAYOUT_COUNT: {
      return {
        ...state,
        partnerPayoutCount: payload,
      };
    }
    default:
      return state
  }

}

export default partnersReducer;
