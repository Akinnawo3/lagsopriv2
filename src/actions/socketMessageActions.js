import {configureStore} from "../store";
import {UPDATE_COUNTER} from "Actions/types";

const socketMessageActions = (data) => {
  switch (data.action) {
    case "new_notification":
      console.log(data);
      configureStore.dispatch({
        type: UPDATE_COUNTER,
        payload: data.data,
      });
      break;

    default:
      break;
  }
};
export default socketMessageActions;
