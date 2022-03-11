import {
  PAYMENTS_COUNT,
  PAYMENTS,
  PAYMENT,
  PAYMENTS_SERVICE,
  PAYMENTS_SERVICE_COUNT,
  PAYMENTS_SERVICE_BALANCE,
  PAYMENTS_SERVICE_BALANCE_INDIVIDUAL,
  PAYMENT_SERVICE_DETAILS,
  FINANCE_WALLET, FINANCE_TRIP, FINANCE_SERVICE, FINANCE_DRIVER_LOG, FINANCE_DRIVER_LOG_COUNT,
} from "Actions/types";

const initialState = {
  payments: [],
  payment: {},
  paymentServiceDetails: {},
  paymentsCount: 0,
  paymentsService: [],
  financeWallet: [],
  financeService: [],
  financeTrip: [],
  financeDriverLog: [],
  financeDriverLogCount: 0,
  paymentsServiceCount: 0,
  paymentsServiceBalance: 0,
  paymentsServiceBalanceIndividual: 0,
};

function paymentReducer(state = initialState, action) {
  const {type, payload} = action;
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
    case FINANCE_WALLET: {
      return {
        ...state,
        financeWallet: payload,
      };
    }
    case FINANCE_TRIP: {
      return {
        ...state,
        financeTrip: payload,
      };
    }
    case FINANCE_SERVICE: {
      return {
        ...state,
        financeService: payload,
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
    case PAYMENTS_SERVICE_BALANCE_INDIVIDUAL: {
      return {
        ...state,
        paymentsServiceBalanceIndividual: payload,
      };
    }
    case PAYMENT_SERVICE_DETAILS: {
      return {
        ...state,
        paymentServiceDetails: payload,
      };
    }
    case FINANCE_DRIVER_LOG: {
      return {
        ...state,
        financeDriverLog: payload,
      };
    }
    case FINANCE_DRIVER_LOG_COUNT: {
      return {
        ...state,
        financeDriverLogCount: payload,
      };
    }
    default:
      return state;
  }
}

export default paymentReducer;
