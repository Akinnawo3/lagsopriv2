import {configureStore} from "../store";
import {UPDATE_COUNTER} from "Actions/types";

const socketMessageActions = (data) => {
  switch (data.action) {
    case "new_notification":
      configureStore().dispatch({
        type: UPDATE_COUNTER,
        payload: data.data.length,
      });

      break;

    default:
      break;
  }
};
export default socketMessageActions;
