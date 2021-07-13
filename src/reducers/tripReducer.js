import {
  DRIVER_TRIPS,
  PASSENGER_TRIPS,
  TRIP,
  TRIP_COUNT,
  TRIP_COUNT_DRIVER,
  TRIP_COUNT_DRIVER_ALL,
  TRIP_COUNT_DRIVER_CANCELLED,
  TRIP_COUNT_DRIVER_COMPLETED,
  TRIP_COUNT_PASSENGER,
  TRIP_COUNT_PASSENGER_ALL,
  TRIP_COUNT_PASSENGER_CANCELLED,
  TRIP_COUNT_PASSENGER_COMPLETED,
  TRIPS
} from "Actions/types";


const initialState = {
  trips: [],
  trip: {},
  tripCount: 0,
  driverTrips: [],
  tripCountDriver: 0,
  tripCountDriverAll: 0,
  tripCountDriverCompleted: 0,
  tripCountDriverCancelled: 0,
  passengerTrips: [],
  tripCountPassenger: 0,
  tripCountPassengerAll: 0,
  tripCountPassengerCompleted: 0,
  tripCountPassengerCancelled: 0,
};

function tripReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case TRIPS: {
      return {
        ...state,
        trips: payload,
      };
    }
    case TRIP: {
      return {
        ...state,
        trip: payload,
      };
    }
    case TRIP_COUNT: {
      return {
        ...state,
        tripCount: payload,
      };
    }
    case DRIVER_TRIPS: {
      return {
        ...state,
        driverTrips: payload,
      };
    }
    case TRIP_COUNT_DRIVER: {
      return {
        ...state,
        tripCountDriver: payload,
      };
    }
    case TRIP_COUNT_DRIVER_ALL: {
      return {
        ...state,
        tripCountDriverAll: payload,
      };
    }
    case TRIP_COUNT_DRIVER_COMPLETED: {
      return {
        ...state,
        tripCountDriverCompleted: payload,
      };
    }
    case TRIP_COUNT_DRIVER_CANCELLED: {
      return {
        ...state,
        tripCountDriverCancelled: payload,
      };
    }
    case PASSENGER_TRIPS: {
      return {
        ...state,
        passengerTrips: payload,
      };
    }
    case TRIP_COUNT_PASSENGER: {
      return {
        ...state,
        tripCountPassenger: payload,
      };
    }
    case TRIP_COUNT_PASSENGER_ALL: {
      return {
        ...state,
        tripCountPassengerAll: payload,
      };
    }
    case TRIP_COUNT_PASSENGER_COMPLETED: {
      return {
        ...state,
        tripCountPassengerCompleted: payload,
      };
    }
    case TRIP_COUNT_PASSENGER_CANCELLED: {
      return {
        ...state,
        tripCountPassengerCancelled: payload,
      };
    }
    default:
      return state
  }
}

export default tripReducer;
