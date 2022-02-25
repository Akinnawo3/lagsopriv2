import {OEMS, OEMS_COUNT, OEMS_VEHICLES} from "Actions/types";

const initialState = {
  oems: [],
  oemsCount: 0,
  oemVehicles: [],
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
    case OEMS_VEHICLES: {
      return {
        ...state,
        oemVehicles: payload,
      };
    }
    default:
      return state;
  }
}

export default oemReducer;
