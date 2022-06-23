import AsyncSelect from "react-select/async";
import axios from "axios";
import React, { useState } from "react";
import api from "../../../environments/environment";
import { debounce } from "lodash";
import useDebounce from "../../../helpers/debounceHelper";

const AsyncSelectComponent = ({ onChange, partner_assigned_status = '' }) => {
   const [debouncer] = useDebounce();
   const [value, setValue] = useState("");

   const itemChange = (item) => {
      //  console.log({item});
      setValue(item);
      onChange(item);
      return item;
   };

   const searchVehicle = async (data, callback) => {
      try {
         const res = await axios.get(`${api.vehicles}/v1.1/admin/vehicles?q=${data}&assign=0&partner_assign=${partner_assigned_status}`);
         return res.data.data.map((item) => ({
            value: item,
            label: `${item.car_number_plate} - ${item.car_make} - ${item.car_model} ${item.car_color} (${item?.partner_assigned ? 'Assigned to partner' : ''})`,
         }));
      } catch (err) {
         console.log(err);
      }
   };

   let timeOutSearch = React.useRef() //for holding timeout when request is initialize
   const promiseOptions = (inputValue) =>
      new Promise((resolve) => {
         clearTimeout(timeOutSearch.current) //clear any pending timeout before creating a new one
         timeOutSearch.current = setTimeout(() => {
            resolve(searchVehicle(inputValue));
         }, 1000);
      });

   return (
      <div>
         <div>Select vehicle</div>
         <AsyncSelect value={value} cacheOptions defaultOptions loadOptions={promiseOptions} onChange={itemChange} placeholder="Search by colour, plate number, model or year " />
      </div>
   );
};

export default AsyncSelectComponent;
