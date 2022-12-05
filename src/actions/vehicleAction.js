import axios from "axios";
import {
  VEHICLES,
  VEHICLES_COUNT,
  VEHICLE,
  DRIVER,
  VEHICLES_FEEDBACK,
  VEHICLES_FEEDBACK_COUNT,
  VEHICLES_FEEDBACK_DETAILS,
  VEHICLE_MILEAGE,
  VEHICLES_PERFORMANCE,
  VEHICLES_PERFORMANCE_COUNT,
} from "./types";
import { endLoading, endStatusLoading, startLoading, startStatusLoading } from "./loadingAction";
import { NotificationManager } from "react-notifications";
import api from "../environments/environment";
import { getDriver, getDrivers } from "Actions/driverAction";
import { onAddUpdateVehicleModalClose } from "../routes/vehicles/components/vehicleTable";
import { activateDriver, onAddVehicleModalClose } from "../routes/drivers/components/driverProfile";
import { onMileageModalClose } from "../routes/vehicles/vehicleDetails";

export const getVehicles =
  (page_no = 1, assign = "", spinner, car_number_plate = "") =>
  async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicles?item_per_page=20&page=${page_no}&assign=${assign}&car_number_plate=${car_number_plate}`);
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

export const getVehiclesFeedback =
  (page_no = 1, spinner) =>
  async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicle-comments?item_per_page=20&page=${page_no}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: VEHICLES_FEEDBACK,
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

export const getVehicle =
  (vehicle_id, spinner, driver_id = "", partner_id = "") =>
  async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicles/${vehicle_id}/?driver_id=${driver_id}&partner_id=${partner_id}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        if (res.data.data.driver_auth_id) {
          //  await dispatch(getDriver(res.data.data.driver_auth_id, true));
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

export const getVehicleMileage = (vehicle_id, spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.oem}/v1.1/vehicles/mileage/?vehicle_id=${vehicle_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: VEHICLE_MILEAGE,
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

export const getVehicleFeedbackDetails = (comment_id, spinner) => async (dispatch) => {
  try {
    spinner && dispatch(startLoading());
    !spinner && dispatch(startStatusLoading());
    const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicle-comments/${comment_id}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: VEHICLES_FEEDBACK_DETAILS,
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

export const assignVehicleFeedback = (comment_id, admin_id) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.vehicles}/v1.1/admin/assign-vehicle-comment`, { comment_id, admin_id });
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch(getVehicleFeedbackDetails(comment_id, false));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const updateVehicleFeedbackStatus = (comment_id, status) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.vehicles}/v1.1/admin/vehicle-comment-status`, { comment_id, status });
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch(getVehicleFeedbackDetails(comment_id, false));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const getVehiclesCount =
  (assign = "", car_number_plate = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicles?component=count&assign=${assign}&car_number_plate=${car_number_plate}`);
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

export const getVehiclesFeedbackCount = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicle-comments?component=count`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: VEHICLES_FEEDBACK_COUNT,
        payload: res.data?.data?.total ? res.data?.data?.total : 0,
      });
    }
  } catch (err) {
    NotificationManager.error(err.response.data.message);
  }
};
export const createVehicles = (car_number_plate, car_make, car_model, car_desc, car_color, oem_id, oem_vehicle_id, purchase_year, chassis_number, engine_number) => async (dispatch) => {
  dispatch(startStatusLoading());
  console.log(oem_id);
  const body = { car_number_plate, car_make, car_model, car_desc, car_color, oem_id, oem_vehicle_id, purchase_year, chassis_number, engine_number };
  try {
    const res = await axios.post(`${api.vehicles}/v1.1/admin/vehicles`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle Created Successfully!");
      onAddUpdateVehicleModalClose();
      await dispatch(getVehicles());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error("network error, try again");
  }
};

export const updateVehicle =
  (vehicle_id, car_number_plate, car_make, car_model, car_desc, car_color, page_no, assign, oem_id, oem_vehicle_id, purchase_year, chassis_number, engine_number) => async (dispatch) => {
    const body = { car_number_plate, car_make, car_model, car_desc, car_color, oem_id, oem_vehicle_id, purchase_year, chassis_number, engine_number };
    try {
      dispatch(startStatusLoading());
      const res = await axios.put(`${api.vehicles}/v1.1/admin/vehicles/${vehicle_id}`, body);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        await NotificationManager.success("Vehicle Updated Successfully");
        onAddUpdateVehicleModalClose();
        await dispatch(getVehicles(page_no, assign));
      }
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endStatusLoading());
      NotificationManager.error(err.response.data.result);
    }
  };

export const updatePartnerDriverPayment = (data, vehicle_id, setDriverPaymentModal) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.vehicles}/v1.1/admin/vehicles/${vehicle_id}`, data);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle Updated Successfully");
      typeof setDriverPaymentModal === "function" && setDriverPaymentModal(false);
      await dispatch(getVehicle(vehicle_id, false));
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
    const res = await axios.delete(`${api.vehicles}/v1.1/admin/vehicles/${vehicle_id}`);
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
    const res = await axios.post(`${api.vehicles}/v1.1/admin/revoke-vehicle`, { vehicle_id });
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
  const body = { vehicle_id, auth_id: driver_auth_id };
  try {
    dispatch(startStatusLoading());
    const res = await axios.post(`${api.vehicles}/v1.1/admin/assign-vehicle`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle assigned Successfully!");
      await dispatch(sendVehicleAssignMessage(driverData, vehicleData, message_type, subject));
      await activateDriver();
      await dispatch(getDriver(driver_auth_id, true));
      onAddVehicleModalClose();
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    console.log(err);
    // NotificationManager.error(err.response.data.error);
  }
};

export const searchVehicles = (data, assign) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicles?q=${data}&assign=${assign}`);
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
    message: `Your payment has been acknowledged, and a vehicle (${vehicleData.car_number_plate}, ${vehicleData.car_make}, ${vehicleData.car_model}) has been assigned to you. Kindly log into the app to start earning. Thank you for partnering with us.`,
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
      `Vehicle ${vehicleData.car_number_plate}, ${vehicleData.car_make}, ${vehicleData.car_model} has been unassigned from you. \n ` +
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

export const updateVehicleMileage = (body) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.oem}/v1.1/admin/mileage`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Mileage Updated Successfully!");
      onMileageModalClose();
      await dispatch(getVehicle(body?.vehicle_id));
    }
    dispatch(endStatusLoading());
  } catch (e) {
    console.log(e);
    dispatch(endStatusLoading());
    NotificationManager.error("Network error");
  }
};

export const getVehiclesPerformance =
  (page_no, spinner, start_date = "", end_date = "", vehicle_id) =>
  async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicle-performance?item_per_page=20&page=${page_no}&vehicle_id=${vehicle_id}&start_date=${start_date}&end_date=${end_date}`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: VEHICLES_PERFORMANCE,
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

export const getVehiclesPerformanceCount =
  (start_date = "", end_date = "", vehicle_id) =>
  async (dispatch) => {
    try {
      const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicle-performance?vehicle_id=${vehicle_id}&start_date=${start_date}&end_date=${end_date}&component=count`);
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: VEHICLES_PERFORMANCE_COUNT,
          payload: res.data?.data?.total ? res.data?.data?.total : 0,
        });
      }
    } catch (err) {
      NotificationManager.error(err.response.data.message);
    }
  };

export const setVehicleRepayment = (body) => async (dispatch) => {
  dispatch(startStatusLoading());
  try {
    const res = await axios.post(`${api.vehicles}/v1.1/admin/vehicle-payment`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Vehicle Created Successfully!");
      onAddUpdateVehicleModalClose();
      await dispatch(getVehicles());
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error("network error, try again");
  }
};
