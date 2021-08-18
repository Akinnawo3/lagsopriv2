import {
  CONTACT_US,
  CONTACT_US_COUNT, CONTACT_US_DETAILS,
  SUPPORT_TICKET_DETAILS,
  SUPPORT_TICKETS,
  SUPPORT_TICKETS_COUNT
} from "Actions/types";

const initialState = {
  support: [],
  supportCount: 0,
  supportDetails: {},
  contactUs: [],
  contactUsCount: 0,
  contactUsDetails: {},
};

function supportReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SUPPORT_TICKETS: {
      return {
        ...state,
        support: payload,
      };
    }
    case SUPPORT_TICKET_DETAILS: {
      return {
        ...state,
        supportDetails: payload,
      };
    }
    case SUPPORT_TICKETS_COUNT: {
      return {
        ...state,
        supportCount: payload,
      };
    }
    case CONTACT_US: {
      return {
        ...state,
        contactUs: payload,
      };
    }
    case CONTACT_US_COUNT: {
      return {
        ...state,
        contactUsCount: payload,
      };
    }
    case CONTACT_US_DETAILS: {
      return {
        ...state,
        contactUsDetails: payload,
      };
    }
    default:
      return state
  }

}

export default supportReducer;
