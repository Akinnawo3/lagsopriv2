import {CUSTOMER_CARE} from "Actions/types";

const initialState = {
  customerCareNumbers: {customer_care_line: [], waiting_time: ''},
};

function customerCareReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CUSTOMER_CARE: {
      return {
        ...state,
        customerCareNumbers: payload,
      };
    }
    default:
      return state
  }

}

export default customerCareReducer;
