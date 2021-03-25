import {TICKET_TYPE} from "Actions/types";

const initialState = {
  ticketTypes: [],
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
    default:
      return state
  }

}

export default ticketTypesReducer;
