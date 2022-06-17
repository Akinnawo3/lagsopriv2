import {VERIFICATION_RESULT} from "Actions/types";

const initialState = {
  verificationResult: {},
};

function idVerificationReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case VERIFICATION_RESULT: {
      return {
        ...state,
        verificationResult: payload,
      };
    }
    default:
      return state;
  }
}

export default idVerificationReducer;
