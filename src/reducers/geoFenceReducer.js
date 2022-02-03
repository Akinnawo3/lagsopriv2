import {FENCES_COUNT, GEOFENCES} from "Actions/types";

const initialState = {
  geofences: [],
  geofencesCount: 0,
};

function geoFenceReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case GEOFENCES: {
      return {
        ...state,
        geofences: payload,
      };
    }
    case FENCES_COUNT: {
      return {
        ...state,
        geofencesCount: payload,
      };
    }
    default:
      return state;
  }
}

export default geoFenceReducer;
