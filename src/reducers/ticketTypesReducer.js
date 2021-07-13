import {TICKET, TICKET_TYPE, TICKET_TYPE_COUNT} from "Actions/types";

const initialState = {
  ticketTypes: [],
  ticketTypesCount: 0,
  ticket: {},
};

function ticketTypesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TICKET_TYPE: {
      return {
        ...state,
        ticketTypes: payload,
      };
    }
    case TICKET: {
      return {
        ...state,
        ticket: payload,
      };
    }
    case TICKET_TYPE_COUNT: {
      return {
        ...state,
        ticketTypesCount: payload,
      };
    }
    default:
      return state
  }

}

export default ticketTypesReducer;
