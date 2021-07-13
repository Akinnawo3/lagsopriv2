import {SUPPORT_TICKET_DETAILS, SUPPORT_TICKETS, SUPPORT_TICKETS_COUNT} from "Actions/types";

const initialState = {
  support: [],
  supportCount: 0,
  supportDetails: {}
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
    default:
      return state
  }

}

export default supportReducer;
