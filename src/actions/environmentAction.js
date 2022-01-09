import {SWITCH_ENVIRONMENT} from "./types";

export const switchEnvironment = () => async (dispatch) => {
  dispatch({
    type: SWITCH_ENVIRONMENT,
  });
};
