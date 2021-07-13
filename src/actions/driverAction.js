import  axios from 'axios'
import {DRIVERS, DRIVER, DRIVERS_COUNT, VEHICLE} from "./types";
import {endLoading, endStatusLoading, startLoading, startStatusLoading} from "./loadingAction";
import {NotificationManager} from "react-notifications";
import api from "../environments/environment";
import {getVehicle} from "Actions/vehicleAction";



  export const getDrivers = (status= '', page_no=1, spinner) => async dispatch => {
  try {
  spinner &&  dispatch(startLoading());
  !spinner && dispatch(startStatusLoading())
    const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&item_per_page=20&page=${page_no}&driver_account_status=${status}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: DRIVERS,
        payload: res.data.data
      });
    }
    dispatch(endLoading());
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    dispatch(endLoading());
      // NotificationManager.error(err.response.data.result)
  }
};

export const getDriversCount = (status= '') => async dispatch => {
  try {
    const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&driver_account_status=${status}&component=count`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      dispatch({
        type: DRIVERS_COUNT,
        payload: res.data.data.total ? res.data.data.total : 0
      });
    }
  } catch (err) {
  }
};


export const getDriver = (auth_id, linerLoader) => async dispatch => {
  try {
   !linerLoader && dispatch(startLoading())
    linerLoader && dispatch(startStatusLoading())
    const res = await axios.get(`${api.user}/v1.1/admin/users/${auth_id}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      await  dispatch({
        type: DRIVER,
        payload: res.data.data
      });
      if(res.data.data.driver_data?.vehicle_id) {
        const res2 = await axios.get(`${api.vehicles}/v1.1/vehicles/${res.data.data.driver_data?.vehicle_id}`);
          await   dispatch({
          type: VEHICLE,
          payload: res2.data.data
        });
      }
      dispatch(endLoading())
      dispatch(endStatusLoading())
    }

  } catch (err) {
    dispatch(endLoading())
    dispatch(endStatusLoading())
  }
};



export const changeDriverStatus = (auth_id, driver_status, driverData, message_type, subject) => async dispatch => {
  const body = {auth_id, driver_status}
  try {
    dispatch(startStatusLoading())
  const res =  await axios.put(`${api.user}/v1.1/admin/driver-status`, body)
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      if(driverData && message_type) {
        await dispatch(sendDriverMessage(driverData, message_type, subject))
      }
      await NotificationManager.success('Driver Updated Successfully!');
      await dispatch(getDriver(auth_id, true));
    }
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
    NotificationManager.error(err.response.data.message);
  }
};

// export const changeDriverStatusOnProfile = (auth_id, driver_status) => async dispatch => {
//   const body = {auth_id, driver_status}
//   try {
//     dispatch(startStatusLoading())
//     const res =  await axios.put(`${api.user}/v1.1/admin/driver-status`, body)
//     if(res.data.status === 'error') {
//       NotificationManager.error(res.data.msg);
//     }else {
//       await NotificationManager.success('Driver Updated Successfully!');
//       await dispatch(getDriver(auth_id, true));
//     }
//     dispatch(endStatusLoading())
//   } catch (err) {
//     dispatch(endStatusLoading())
//     NotificationManager.error(err.response.data.message);
//   }
// };


export const searchDrivers = (searchData, status) => async dispatch => {
  try {
    dispatch(startStatusLoading())
    const res = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&q=${searchData}&driver_account_status=${status}`);
    if(res.data.status === 'error') {
      NotificationManager.error(res.data.msg);
    }else {
      const res2 = await axios.get(`${api.user}/v1.1/admin/users?user_type=driver&driver_account_status=${status}&component=count&q=${searchData}`);
      dispatch({
        type: DRIVERS_COUNT,
        payload: res2.data.data.total ? res2.data.data.total : 0
      });
      dispatch({
        type: DRIVERS,
        payload: res.data.data
      });
    }
    dispatch(endStatusLoading())
  } catch (err) {
    dispatch(endStatusLoading())
  }
};


export const sendDriverMessage = (driverData, message_type, subject) => async dispatch => {
 const body = {
                "data": {"first_name": driverData.first_name},
                "type_message": message_type,
                "email": driverData.email,
                subject
                }
  try {
    await axios.post(`${api.messageWorker}/api/me/messageworker/`, body);
  } catch (err) {
  }
};




