import {
  PAYMENTS_COUNT,
  PAYMENTS,
  PAYMENT,
  PAYMENTS_SERVICE,
  PAYMENTS_SERVICE_COUNT,
  PAYMENTS_SERVICE_BALANCE
} from "Actions/types";


const initialState = {
  payments: [],
  payment: {},
  paymentsCount: 0,
  paymentsService: [],
  paymentsServiceCount: 0,
  paymentsServiceBalance: 0,
};

function paymentReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case PAYMENTS: {
      return {
        ...state,
        payments: payload,
      };
    }
    case PAYMENT: {
      return {
        ...state,
        payment: payload,
      };
    }
    case PAYMENTS_COUNT: {
      return {
        ...state,
        paymentsCount: payload,
      };
    }
    case PAYMENTS_SERVICE: {
      return {
        ...state,
        paymentsService: payload,
      };
    }
    case PAYMENTS_SERVICE_COUNT: {
      return {
        ...state,
        paymentsServiceCount: payload,
      };
    }
    case PAYMENTS_SERVICE_BALANCE: {
      return {
        ...state,
        paymentsServiceBalance: payload,
      };
    }
    default:
      return state
  }
}

export default paymentReducer;
