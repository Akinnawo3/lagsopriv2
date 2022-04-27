import {PARTNER, PARTNER_DRIVERS, PARTNER_DRIVERS_COUNT, PARTNERS, PARTNERS_COUNT} from "Actions/types";

const initialState = {
  partners: [],
  partnersCount: 0,
  partner: {},
  partnerDrivers: [],
  partnerDriversCount: 0,
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
    default:
      return state
  }

}

export default partnersReducer;
