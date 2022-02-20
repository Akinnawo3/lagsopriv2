import {OEMS, OEMS_COUNT} from "Actions/types";

const initialState = {
  oems: [],
  oemsCount: 0,
};

function oemReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case OEMS: {
      return {
        ...state,
        oems: payload,
      };
    }
    // case VEHICLE: {
    //   return {
    //     ...state,
    //     vehicleDetails: payload,
    //   };
    // }
    case OEMS_COUNT: {
      return {
        ...state,
        oemsCount: payload,
      };
    }
    default:
      return state;
  }
}

export default oemReducer;
