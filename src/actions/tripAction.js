import axios from "axios";
import {
  TRIPS,
  TRIP_COUNT,
  DRIVER_TRIPS,
  TRIP_COUNT_DRIVER,
  TRIP,
  TRIP_COUNT_DRIVER_COMPLETED,
  TRIP_COUNT_DRIVER_ALL,
  TRIP_COUNT_DRIVER_CANCELLED,
  TRIP_COUNT_PASSENGER_COMPLETED,
  TRIP_COUNT_PASSENGER_ALL,
  TRIP_COUNT_PASSENGER_CANCELLED,
  TRIP_COUNT_PASSENGER,
  PASSENGER_TRIPS,
  TRIP_COUNT_WAITING_USERS,
  TRIP_COUNT_MOVING_USERS,
  TRIP_COUNT_WAITING_DRIVERS,
  TRIP_COUNT_MOVING_DRIVERS,
  ACTUAL_LOCATION,
} from "./types";
import {
  endLoading,
  endStatusLoading,
  startLoading,
  startStatusLoading,
} from "./loadingAction";
import api from "../environments/environment";
import { NotificationManager } from "react-notifications";

export const getTrips =
  (pageNo, status = "", spinner) =>
  async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?item_per_page=20&page=${pageNo}&trip_status=${status}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: TRIPS,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endStatusLoading());
      dispatch(endLoading());
    }
  };
export const getCancelledTrips = (pageNo, spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(
      `${api.trip}/v1.1/trips/cancelled-trips?item_per_page=20&page=${pageNo}`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIPS,
        payload: res.data.data,
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    dispatch(endLoading());
  }
};
export const getCancelledTripCount = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api.trip}/v1.1/trips/cancelled-trips?component=count`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP_COUNT,
        payload: res.data?.data?.total,
      });
    }
  } catch (err) {}
};

export const getTrip = (trip_id, spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.trip}/v1.1/trips/${trip_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP,
        payload: res.data.data[0],
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    dispatch(endLoading());
  }
};

export const searchTrip =
  (trip_id, status = "") =>
  async (dispatch) => {
    try {
      dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/${trip_id}/?trip_status=${status}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        const res2 = await axios.get(
          `${api.trip}/v1.1/trips/${trip_id}/?component=count&trip_status=${status}`
        );
        dispatch({
          type: TRIP_COUNT,
          payload: res2.data?.data?.total,
        });
        dispatch({
          type: TRIPS,
          payload: res.data.data,
        });
      }
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endStatusLoading());
    }
  };

export const getTripCount =
  (status = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?component=count&trip_status=${status}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: TRIP_COUNT,
          payload: res.data?.data?.total,
        });
      }
    } catch (err) {}
  };

export const getTripExport =
    (status = "") =>
        async (dispatch) => {
          dispatch(startStatusLoading());
          try {
            const res = await axios.get(
                `${api.trip}/v1.1/trips/?component=export&trip_status=${status}`
            );
            if (res.data.status === "error") {
              NotificationManager.error(res.data.msg);
            } else {
              NotificationManager.success('Excel file sent to your email successfully');
            }
            dispatch(endStatusLoading());
          } catch (err) {
            dispatch(endStatusLoading());
          }
        };

export const getDriverTrips =
  (pageNo, authId, spinner, trip_status) => async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?item_per_page=20&page=${pageNo}&driver_auth_id=${authId}&trip_status=${trip_status}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: DRIVER_TRIPS,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endLoading());
      dispatch(endStatusLoading());
    }
  };

export const getDriverTripsByTripStatus =
  (pageNo, authId, trip_status) => async (dispatch) => {
    try {
      dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?item_per_page=20&page=${pageNo}&driver_auth_id=${authId}&trip_status=${trip_status}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch(getDriverTripCount(authId, trip_status));
        dispatch({
          type: DRIVER_TRIPS,
          payload: res.data.data,
        });
      }
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endStatusLoading());
    }
  };

export const getDriverTripCount = (authId, trip_status) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api.trip}/v1.1/trips/?driver_auth_id=${authId}&component=count&trip_status=${trip_status}`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP_COUNT_DRIVER,
        payload: res.data.data.total,
      });
    }
  } catch (err) {}
};

export const getDriverTripCountDisplayAll = (authId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api.trip}/v1.1/trips/?driver_auth_id=${authId}&component=count`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP_COUNT_DRIVER_ALL,
        payload: res.data.data.total,
      });
    }
  } catch (err) {}
};
export const getDriverTripCountDisplayCompleted =
  (authId) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?driver_auth_id=${authId}&component=count&trip_status=completed`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: TRIP_COUNT_DRIVER_COMPLETED,
          payload: res.data.data.total,
        });
      }
    } catch (err) {}
  };
export const getDriverTripCountDisplayCancelled =
  (authId) => async (dispatch) => {
    try {
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?driver_auth_id=${authId}&component=count&trip_status=cancel`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: TRIP_COUNT_DRIVER_CANCELLED,
          payload: res.data.data.total,
        });
      }
    } catch (err) {}
  };

export const getPassengerTrips =
  (pageNo, authId, spinner, trip_status) => async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?item_per_page=20&page=${pageNo}&rider_auth_id=${authId}&trip_status=${trip_status}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: PASSENGER_TRIPS,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endLoading());
      dispatch(endStatusLoading());
    }
  };

export const getPassengerTripsByTripStatus =
  (pageNo, authId, trip_status) => async (dispatch) => {
    try {
      dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?item_per_page=20&page=${pageNo}&rider_auth_id=${authId}&trip_status=${trip_status}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch(getPassengerTripCount(authId, trip_status));
        dispatch({
          type: PASSENGER_TRIPS,
          payload: res.data.data,
        });
      }
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endStatusLoading());
    }
  };

export const getPassengerTripCount =
  (authId, trip_status) => async (dispatch) => {
    try {
      // dispatch(startLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?rider_auth_id=${authId}&component=count&trip_status=${trip_status}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: TRIP_COUNT_PASSENGER,
          payload: res.data.data.total,
        });
      }
      // dispatch(endLoading());
    } catch (err) {
      // dispatch(endLoading());
    }
  };

export const getPassengerTripCountDisplayAll = (authId) => async (dispatch) => {
  try {
    // dispatch(startLoading());
    const res = await axios.get(
      `${api.trip}/v1.1/trips/?rider_auth_id=${authId}&component=count`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP_COUNT_PASSENGER_ALL,
        payload: res.data.data.total,
      });
    }
    // dispatch(endLoading());
  } catch (err) {
    // dispatch(endLoading());
  }
};
export const getPassengerTripCountDisplayCompleted =
  (authId) => async (dispatch) => {
    try {
      // dispatch(startLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?rider_auth_id=${authId}&component=count&trip_status=completed`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: TRIP_COUNT_PASSENGER_COMPLETED,
          payload: res.data.data.total,
        });
      }
      // dispatch(endLoading());
    } catch (err) {
      // dispatch(endLoading());
    }
  };
export const getPassengerTripCountDisplayCancelled =
  (authId) => async (dispatch) => {
    try {
      // dispatch(startLoading());
      const res = await axios.get(
        `${api.trip}/v1.1/trips/?rider_auth_id=${authId}&component=count&trip_status=cancel`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: TRIP_COUNT_PASSENGER_CANCELLED,
          payload: res.data.data.total,
        });
      }
      // dispatch(endLoading());
    } catch (err) {
      // dispatch(endLoading());
    }
  };

export const getTripCountWaitingUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api.trip}/v1.1/trips/?component=waiting_rider&trip_status=waiting`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP_COUNT_WAITING_USERS,
        payload: res.data?.data?.total,
      });
    }
  } catch (err) {}
};

export const getTripCountMovingUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api.trip}/v1.1/trips/?component=moving_rider&trip_status=on_ride`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP_COUNT_MOVING_USERS,
        payload: res.data?.data?.total,
      });
    }
  } catch (err) {}
};

export const getTripCountWaitingDrivers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api.trip}/v1.1/trips/?component=waiting_driver&trip_status=waiting`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP_COUNT_WAITING_DRIVERS,
        payload: res.data?.data?.total,
      });
    }
  } catch (err) {}
};

export const getTripCountMovingDrivers = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api.trip}/v1.1/trips/?component=moving_driver&trip_status=on_ride`
    );
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: TRIP_COUNT_MOVING_DRIVERS,
        payload: res.data?.data?.total,
      });
    }
  } catch (err) {}
};

export const getActualAddress = (lat, lng, spinner) => async (dispatch) => {
  try {
    const res = await fetch(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        "6.601838,3.3514863" +
        "&key=" +
        "AIzaSyCw_5YoOp78lvq1Dgfri-TnDjRSf1cguf0"
    )
      .then((response) => response.json())
      .then((responseJson) => {
        // console.log(
        //   "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
        // );
        // return JSON.stringify(responseJson);
        dispatch({
          type: ACTUAL_LOCATION,
          payload: JSON.stringify(responseJson),
        });
        dispatch(endLoading());
        dispatch(endStatusLoading());
      });
    // const res = await axios.get(
    //   `${api.trip}/v1.1/trips/?component=moving_driver&trip_status=on_ride`
    // );
    // if (res.data.status === "error") {
    //   NotificationManager.error(res.data.msg);
    // } else {
    //   dispatch({
    //     type: TRIP_COUNT_MOVING_DRIVERS,
    //     payload: res.data?.data?.total,
    //   });
    // }
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
  }
};
