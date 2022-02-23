import axios from "axios";
import {VEHICLES, VEHICLES_COUNT, VEHICLE, DRIVER} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
import {getDriver, getDrivers} from "Actions/driverAction";

export const getVehicles =
  (page_no = 1, assign = "", spinner, car_number_plate = "") =>
  async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(`${api.vehicles}/v1.1/vehicles?item_per_page=20&page=${page_no}&assign=${assign}&car_number_plate=${car_number_plate}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: VEHICLES,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endStatusLoading());
      dispatch(endLoading());
      NotificationManager.error(err.response.data.message);
    }
  };

export const getVehicle = (vehicle_id, spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.vehicles}/v1.1/vehicles/${vehicle_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      if (res.data.data.driver_auth_id) {
        await dispatch(getDriver(res.data.data.driver_auth_id, true));
      }
      dispatch({
        type: VEHICLE,
        payload: res.data.data,
      });
    }
    spinner && dispatch(endLoading());
    !spinner && dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
  }
};

export const getVehiclesCount =
  (assign = "", car_number_plate = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.vehicles}/v1.1/vehicles?component=count&assign=${assign}&car_number_plate=${car_number_plate}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: VEHICLES_COUNT,
          payload: res.data?.data?.total ? res.data?.data?.total : 0,
        });
      }
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  };

export const createVehicles = (car_number_plate, car_make, car_model, car_desc, car_color, oem_id) => async (dispatch) => {
  dispatch(startStatusLoading());
  console.log(oem_id);
  const body = {car_number_plate, car_make, car_model, car_desc, car_color, oem_id};
  try {
    const res = await axios.post(`${api.vehicles}/v1.1/vehicles`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle Created Successfully!");
      await dispatch(getVehicles());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error("network error, try again");
  }
};

export const updateVehicle = (vehicle_id, car_number_plate, car_make, car_model, car_desc, car_color, page_no, assign) => async (dispatch) => {
  const body = {car_number_plate, car_make, car_model, car_desc, car_color};
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.vehicles}/v1.1/vehicles/${vehicle_id}`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle Updated Successfully");
      await dispatch(getVehicles(page_no, assign));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.result);
  }
};

export const deleteVehicle = (vehicle_id, vehicles) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.delete(`${api.vehicles}/v1.1/vehicles/${vehicle_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle Deleted Successfully!");
      const vehicleData = await vehicles.filter((vehicle) => vehicle.vehicle_id !== vehicle_id);
      dispatch({
        type: VEHICLES,
        payload: vehicleData,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error("network error, try again");
  }
};

export const revokeVehicle = (vehicle_id, vehicleDetails, driverDetails) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.vehicles}/v1.1/vehicles/revoke`, {vehicle_id});
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle unassigned Successfully!");
      await dispatch({
        type: DRIVER,
        payload: res.data.data,
      });
      await dispatch(sendVehicleUnassignMessage(driverDetails, vehicleDetails));
      dispatch(getVehicle(vehicle_id));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error("network error, try again");
  }
};

export const assignVehicleOnProfile = (vehicle_id, driver_auth_id, driverData, vehicleData, message_type, subject) => async (dispatch) => {
  const body = {vehicle_id, driver_auth_id};
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.vehicles}/v1.1/vehicles/assign`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle assigned Successfully!");
      await dispatch(sendVehicleAssignMessage(driverData, vehicleData, message_type, subject));
      await dispatch(getDriver(driver_auth_id, true));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.error);
  }
};

export const searchVehicles = (data, assign) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.vehicles}/v1.1/vehicles?q=${data}&assign=${assign}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: VEHICLES,
        payload: res.data.data,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const sendVehicleAssignMessage = (driverData, vehicleData, message_type) => async (dispatch) => {
  const body = {
    type: "generic",
    email: driverData.email,
    name: driverData.first_name,
    message: `Your payment has been acknowledged, and a vehicle (${vehicleData.car_number_plate}, ${vehicleData.car_color} ${vehicleData.car_make}, ${vehicleData.car_model}) has been assigned to you. Kindly log into the app to start earning. Thank you for partnering with us.`,
    phone_number: driverData.phone_number,
    subject: "Vehicle Assigned",
  };
  try {
    await axios.post(`${api.messageWorker}/v1.1/messages/send`, body);
  } catch (err) {}
};

export const sendVehicleUnassignMessage = (driverData, vehicleData, message_type) => async (dispatch) => {
  const body = {
    type: "generic",
    email: driverData.email,
    name: driverData.first_name,
    message:
      `Vehicle ${vehicleData.car_number_plate}, ${vehicleData.car_color} ${vehicleData.car_make}, ${vehicleData.car_model} has been unassigned from you. \n ` +
      "\n" +
      `You will no longer be able to receive ride request for this vehicle.\n` +
      "\n" +
      `You will be required to report to the office for further actions. \n` +
      "\n" +
      `Sincerely,\n` +
      "\n" +
      `LagosRide.`,
    phone_number: driverData.phone_number,
    subject: "Vehicle Unassigned",
  };
  try {
    await axios.post(`${api.messageWorker}/v1.1/messages/send`, body);
  } catch (err) {}
};
