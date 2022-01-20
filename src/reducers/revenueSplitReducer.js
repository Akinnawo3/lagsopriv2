import {REVENUE_SPLIT_DATA, DRIVER_REVENUE_SPLIT, CHART_REVENUE_DATA} from "Actions/types";

const initialState = {
  revenueSplitData: {},
  driverRevenueSplit: {},
  chartRevenueData: [],
};

function revenueSplitReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case REVENUE_SPLIT_DATA: {
      return {
        ...state,
        revenueSplitData: payload,
      };
    }
    case DRIVER_REVENUE_SPLIT: {
      return {
        ...state,
        driverRevenueSplit: payload,
      };
    }
    case CHART_REVENUE_DATA: {
      return {
        ...state,
        chartRevenueData: payload,
      };
    }
    default:
      return state;
  }
}

export default revenueSplitReducer;
