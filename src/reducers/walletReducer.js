import {WALLETS, WALLET, WALLETS_COUNT} from "Actions/types";

const initialState = {
  wallets: [],
  wallet: 0,
  walletsCount: 0,
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

    default:
      return state;
  }
}

export default walletReducer;
