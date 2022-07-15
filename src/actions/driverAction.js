import axios from "axios";
import {DRIVERS, DRIVER, DRIVERS_COUNT, VEHICLE, DRIVERS_LOCATION, DRIVER_LOCATION} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
import {getVehicle} from "Actions/vehicleAction";
import {closeMedicalRecordModal, closeRepaymentModal, onVerified} from "../routes/drivers/components/driverProfile";

export const getDrivers =
  (status = "", page_no = 1, spinner, driver_online_status = "", asset_payment = "", driver_category = "", start_date = "", end_date = "", partnershipStatus = "") =>
  async (dispatch) => {
    try {
      spinner && dispatch(startLoading());
      !spinner && dispatch(startStatusLoading());
      const res = await axios.get(
        `${api.user}/v1.1/admin/users?user_type=driver&item_per_page=20&page=${page_no}&account_status=${status}&driver_online_status=${driver_online_status}&asset_payment=${asset_payment}&driver_category=${driver_category}&start_date=${start_date}&end_date=${end_date}&driver_partnership_status=${partnershipStatus}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: DRIVERS,
          payload: res.data.data,
        });
      }
      dispatch(endLoading());
      dispatch(endStatusLoading());
    } catch (err) {
      dispatch(endStatusLoading());
      dispatch(endLoading());
      // NotificationManager.error(err.response.data.result)
    }
  };

export const getDriversCount =
  (status = "", start_date = "", end_date = "", driver_online_status = "", asset_payment = "", driver_category = "", partnershipStatus = "") =>
  async (dispatch) => {
    try {
      const res = await axios.get(
        `${api.user}/v1.1/admin/users?user_type=driver&account_status=${status}&component=count&start_date=${start_date}&end_date=${end_date}&driver_online_status=${driver_online_status}&asset_payment=${asset_payment}&driver_category=${driver_category}&driver_partnership_status=${partnershipStatus}`
      );
      if (res.data.status === "error") {
        NotificationManager.error(res.data.msg);
      } else {
        dispatch({
          type: DRIVERS_COUNT,
          payload: res.data.data.total ? res.data.data.total : 0,
        });
      }
    } catch (err) {}
  };

export const getDriver = (auth_id, linerLoader) => async (dispatch) => {
  try {
    !linerLoader && dispatch(startLoading());
    linerLoader && dispatch(startStatusLoading());
    const res = await axios.get(`${api.user}/v1.1/admin/users/${auth_id}/?user_type=driver`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await dispatch({
        type: DRIVER,
        payload: res.data.data,
      });
      let res2;
      if (res.data.data.driver_data?.vehicle_id) {
        res2 = await axios.get(`${api.vehicles}/v1.1/vehicles/${res.data.data.driver_data?.vehicle_id}`);
        await dispatch({
          type: VEHICLE,
          payload: res2.data.data,
        });
      }
      dispatch(getDriverLocation(res.data.data, res2));
      dispatch(endLoading());
      dispatch(endStatusLoading());
    }
  } catch (err) {
    dispatch(endLoading());
    dispatch(endStatusLoading());
  }
};

export const changeDriverStatus = (auth_id, driver_status, driverData, message_type, subject) => async (dispatch) => {
  const body = {component: "driver_status", auth_id, driver_status};
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.user}/v1.1/admin/users`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      if (driverData && message_type) {
        await dispatch(sendDriverMessage(driverData, message_type, subject));
      }
      if (driver_status !== "4") {
        await NotificationManager.success("Driver Updated Successfully!");
      } else {
        await NotificationManager.success("Driver is now active!");
      }
      await dispatch(getDriver(auth_id, true));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
export const updateMedicalRecord = (auth_id, medical_record) => async (dispatch) => {
  const body = {component: "medical", medical_record, auth_id};
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.user}/v1.1/admin/users`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Medical Record updated");
      closeMedicalRecordModal();
      onVerified();
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const changeDriverCategory = (auth_id, category, driverData, message_type, subject) => async (dispatch) => {
  const body = {component: "driver_category", auth_id, category};
  console.log(message_type);
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.user}/v1.1/admin/users`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      if (driverData && message_type) {
        await dispatch(sendDriverMessage(driverData, message_type, subject));
      }
      await NotificationManager.success("Driver Category Updated Successfully!");
      await dispatch(getDriver(auth_id, true));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
export const verifyID = (auth_id, verification_status, verification_name) => async (dispatch) => {
  const body = {
    component: "driver_verification",
    auth_id,
    verification_status,
    verification_name,
  };
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.user}/v1.1/admin/users`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("ID verified  Successfully!");
      await dispatch(getDriver(auth_id, true));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};

export const searchDrivers = (searchData, status) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&q=${searchData}&account_status=${status}`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      const res2 = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&account_status=${status}&component=count&q=${searchData}`);
      dispatch({
        type: DRIVERS_COUNT,
        payload: res2.data.data.total ? res2.data.data.total : 0,
      });
      dispatch({
        type: DRIVERS,
        payload: res.data.data,
      });
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

export const sendDriverMessage = (driverData, message_type, subject) => async (dispatch) => {
  const body = {
    type: "generic",
    email: driverData.email,
    name: driverData.first_name,
    message: message_type,
    phone_number: driverData.phone_number,
    subject,
  };
  try {
    await axios.post(`${api.messageWorker}/v1.1/messages/send`, body);
  } catch (err) {}
};

export const getDriversLocation = (longitude, latitude) => async (dispatch) => {
  try {
    const res = await axios.get(`${api.user}/v1.1/admin/user-location/?latitude=${latitude}&longitude=${longitude}&user_type=driver`);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      dispatch({
        type: DRIVERS_LOCATION,
        payload: res.data.data,
      });
    }
  } catch (err) {}
};

export const getDriverLocation = (driverData, vehicleData) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    let res = vehicleData ? vehicleData : {};
    if (!vehicleData && driverData.driver_data.vehicle_id) {
      res = await axios.get(`${api.vehicles}/v1.1/vehicles/${driverData.driver_data.vehicle_id}`);
    }
    dispatch({
      type: DRIVER_LOCATION,
      payload: [
        {
          lat: driverData.driver_data?.location?.coordinates[1],
          lng: driverData.driver_data?.location?.coordinates[0],
          name: driverData.first_name + " " + driverData.last_name,
          plate_no: res.data.data.car_number_plate ? res.data.data.car_number_plate : "NA",
        },
      ],
    });
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
  }
};

// pass the parameters from the page.. this can be used in a way that it can update any detail / component
export const updateDriver = (body) => async (dispatch) => {
  try {
    dispatch(startStatusLoading());
    const res = await axios.put(`${api.user}/v1.1/admin/users`, body);
    if (res.data.status === "error") {
      NotificationManager.error(res.data.msg);
    } else {
      await NotificationManager.success("Updated Successfully");
      closeRepaymentModal();
      await dispatch(getDriver(body.auth_id, true));
    }
    dispatch(endStatusLoading());
  } catch (err) {
    dispatch(endStatusLoading());
    NotificationManager.error(err.response.data.message);
  }
};
