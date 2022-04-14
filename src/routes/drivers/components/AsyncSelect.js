import AsyncSelect from "react-select/async";
import axios from "axios";
import React, {useState} from "react";
import api from "../../../environments/environment";

const AsyncSelectComponent = ({onChange}) => {
  const [label, setLabel] = useState("nonsense");

  const itemChange = (item) => {
    onChange(item);
    return item;
  };

  const searchVehicle = async (data) => {
    try {
      const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicles?q=${data}&assign=${0}`);
      console.log(res);
      return res.data.data.map((item) => ({
        value: item,
        //  {
        //   id: item?.vehicle_id,
        //   plateNumber: item.car_number_plate,

        // }
        label: `${item.car_number_plate} - ${item.car_make} - ${item.car_model} (${item.car_color})`,
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const promiseOptions = (inputValue) =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(searchVehicle(inputValue));
      }, 1000);
    });

  return (
    <div>
      <div>Select vehicle</div>
      <AsyncSelect cacheOptions defaultOptions loadOptions={promiseOptions} onChange={itemChange} placeholder="Search by colour, plate number, model or year " />
    </div>
  );
};

export default AsyncSelectComponent;
