import {SWITCH_ENVIRONMENT} from "Actions/types";
import cookies from "Util/cookies";

const checkTestEnvironment = cookies.get("isTestEnvironment");
let isTestEnvironment;
if (checkTestEnvironment) {
  isTestEnvironment = JSON.parse(checkTestEnvironment);
} else {
  cookies.set("isTestEnvironment", "false");
  isTestEnvironment = false;
}

const initialState = {
  isTest: isTestEnvironment,
};

function environmentReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case SWITCH_ENVIRONMENT: {
      // return {
      //   ...state,
      //   isTest: !state.isTest,
      // };
      cookies.set("isTestEnvironment", JSON.stringify(!state.isTest));
      window.location.reload();
    }
    default:
      return state;
  }
}

export default environmentReducer;
