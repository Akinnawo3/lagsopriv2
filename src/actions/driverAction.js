import {
  DRIVER_BY_USER,
  DRIVER_MODAL_CREATE,
  DRIVER_MODAL_DELETE,
  DELETE_DRIVER,
  CLOSE_MODAL_DELETE_DRIVER,
  LOADING_DRIVER,
  DRIVER_ERROR,
  SEARCH_DRIVER,
  CREATE_DRIVER,
  REMOVE_DRIVER_ERROR,
  APPROVE_DRIVER,
  DRIVER_MODAL_UPDATE,
  UPDATE_DRIVER,
  DRIVER_VEHICLE_ID,
  DRIVER_VEHICLE_ID2,
  CLEAR_DRIVER_VEHICLE_ID,
  DRIVER_ME,
  DRIVER_ALL,
  DRIVER_APPLICATION,
  DRIVER_MODAL_FLAG,
  DRIVER_MODAL_FLAG_DETAILS,
  DRIVER_VEHICLE
} from "./types"
import  axios from 'axios'
import api from "../environments/environment";
// import {isAdmin, isLamata, isOperator, OperatorId, OperatorName} from "../../environments/constants";
// import {createUser} from "./userAction";

const header = {
  headers: {
    Authorization: localStorage.getItem("user_id")
  }
}


  export const getDrivers = () => async dispatch => {
  let driverApi;
    driverApi = `${api.driver}/api/drivers/`
  try {
    dispatch(isLoading());
    const res = await axios.get(driverApi);
    dispatch({
      type: DRIVER_BY_USER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "No Drivers available"
    });

  }
};
export const changeDriverStatus = (id, status) => async dispatch => {
  try {
    // dispatch(isLoading());
    await axios.put(`${api.driver}/api/status/${id}/`, {status});
    dispatch(getDrivers());
  } catch (err) {
    console.log(err)
  }
};


export const createDriver = (firstName, lastName, residentialAddress, email, phoneNo) => async dispatch => {
  const body = {firstName, lastName, residentialAddress, email, phoneNo, pin:'10'};
  try {
    const res = await axios.post(`${api.driver}/api/me/drivers/`, body, header);
    // await axios.post(`${api.driverVehicles}/api/me/drivervehicles/`, {vehicleId: vehicleId, driverId: res.data.id, operatorId});
    // dispatch(setDriversRequest(res.data.id, 1, operatorId))
    // if(res.data) {
    //   dispatch(createUser(firstName, lastName, email, email, 'not available', '+234' + phoneNo.substr(1), res.data.id))
    //
    // }
    dispatch({
      type: CREATE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
    // dispatch(toggleDriverModalCreate());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleDriverModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)

  }
};

export const updateDriver = (id, operatorId, firstName, lastName, residentialAddress, email, phoneNo, status, pin, bankName, accountName, accountNumber, zone, area, route, geofencedarea, appstatus) => async dispatch => {
  const body = {firstName, lastName, residentialAddress, email, phoneNo, status, pin, operatorId, bankName, accountName, accountNumber, zone, area, route, geofencedarea, appstatus};
  try {
    const res = await axios.put(`${api.driver}/api/drivers/${id}/`, body);
    dispatch({
      type: UPDATE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
    dispatch(toggleDriverModalUpdate());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(toggleDriverModalCreate());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)

  }
};
export const deleteDriver = (id) => async dispatch => {

  try {
    const res = await axios.delete(`${api.driver}/admin/drivers/${id}/`);
    dispatch({
      type: DELETE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
    dispatch(closeDriverModalDelete());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
    dispatch(closeDriverModalDelete());
    setTimeout(() => dispatch({
      type: REMOVE_DRIVER_ERROR
    }), 5000)
  }
};

export const searchDriver = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/drivers/${id}/`);
    dispatch({
      type: SEARCH_DRIVER,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Driver not Available"
    });
  }
};

export const approveDriver = (id) => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.put(`${api.driver}/api/approve/${id}/`);
    dispatch({
      type: APPROVE_DRIVER,
      payload: res.data
    });
    dispatch(getDrivers());
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
  }
};

export const getMeRequestDrivers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/request/?operatorid=${OperatorId}`);
    dispatch({
      type: DRIVER_ME,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
  }
};
export const getAllRequestDrivers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/request/?operatorid=All`);
    dispatch({
      type: DRIVER_ALL,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
  }
};

export const getAllApplicationDrivers = () => async dispatch => {
  try {
    dispatch(isLoading());
    const res = await axios.get(`${api.driver}/api/request/`);
    dispatch({
      type: DRIVER_APPLICATION,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
  }
};

export const setDriversRequest = (id, status, operatorId) => async dispatch => {
  try {
    await axios.put(`${api.driver}/api/driver/operator/${id}/?status=${status}&operatorid=${operatorId}`)
    // dispatch(getAllRequestDrivers())
    // dispatch(getMeRequestDrivers())
    // dispatch(getAllApplicationDrivers())
  } catch (err) {
    dispatch({
      type: DRIVER_ERROR,
      payload: "Opps! Something Went Wrong Try Again"
    });
  }
};



export function toggleDriverModalCreate() {
  return {
    type: DRIVER_MODAL_CREATE
  };
}

export function toggleDriverModalUpdate(id) {
  return {
    type: DRIVER_MODAL_UPDATE,
    payload: id
  };
}

export function toggleDriverModalFlag(id) {
  return {
    type: DRIVER_MODAL_FLAG,
    payload: id
  };
}

export function toggleDriverModalFlagDetails(id) {
  return {
    type: DRIVER_MODAL_FLAG_DETAILS,
    payload: id
  };
}

export function getDriverVehicleId(id) {
  return {
    type: DRIVER_VEHICLE_ID,
    payload: id
  };
}

export function getDriverVehicleId2(id) {
  return {
    type: DRIVER_VEHICLE_ID2,
    payload: id
  };
}

export function clearDriverVehicleId() {
  return {
    type: CLEAR_DRIVER_VEHICLE_ID,

  };
}

export function toggleDriverModalDelete(id) {
  return {
    type: DRIVER_MODAL_DELETE,
    payload: id
  };
}

export function closeDriverModalDelete() {
  return {
    type: CLOSE_MODAL_DELETE_DRIVER,
  };
}

export function isLoading() {
  return {
    type: LOADING_DRIVER,
  };
}

export const getDriverVehicles = () => async dispatch => {
  try {
    const res = await axios.get(`${api.driverVehicles}/api/drivervehicles/`);
    dispatch({
      type: DRIVER_VEHICLE,
      payload: res.data
    });
  } catch (err) {}
};

