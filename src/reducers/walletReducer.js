import {WALLETS, WALLET, WALLETS_COUNT, FUNDING_BALANCE} from "Actions/types";

const initialState = {
  wallets: [],
  wallet: 0,
  walletsCount: 0,
  fundingBalance: 0,
};

function walletReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case WALLETS: {
      return {
        ...state,
        wallets: payload,
      };
    }
    case WALLET: {
      return {
        ...state,
        wallet: payload,
      };
    }
    case WALLETS_COUNT: {
      return {
        ...state,
        walletsCount: payload,
      };
    }
    case FUNDING_BALANCE: {
      return {
        ...state,
        fundingBalance: payload,
      };
    }

    default:
      return state;
  }
}

export default walletReducer;
