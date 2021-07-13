import React, {useState} from "react";
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import axios from "axios";
import api from "../../../environments/environment";
import  {getDrivers} from "../../../actions/driverAction";
import {connect} from "react-redux";

const Upload = ({getDrivers, oncloseModal}) => {
    const [initialData, setInitialData] = useState(undefined);
    const [currentSheet, setCurrentSheet] = useState({});

    const handleUpload = (event) => {
        const file = event.target.files[0];
        //read excel file
        readFile(file)
            .then((readedData) => setInitialData(readedData))
            .catch((error) => console.error(error));
    };

    const save = async () => {

        try {
            const finalData = []
            const resData = []
            const result = await generateObjects(currentSheet);
            const result2 = await result.map(function(item) { return item["email"]; });
           await result2.forEach(res => finalData.push({username: res, password: 'password'}))
           const res = await Promise.all(finalData.map(user =>
                    axios.post(`${api.admins}/admin/users/`, user)
                ))

            const newData = await res.map(myValue => resData.push({authId: myValue.data.auth_id}))

            const DriverData = [...result, ...newData]

            // console.log(resData, 'llllllllll')


          // await result.forEach(driver => {
          // const res = axios.post('http://212.71.246.199:8000/admin/users/', {username:driver.email, password: 'password'})
          //     console.log(res)
          //     resdata.push(res)
          //     console.log(resdata, 'pppppppppp')
          // })
          // if(res.data) {
          //    const result2 = result.map(function(el) {
          //         let o = Object.assign({}, el);
          //         res.data.forEach(user=> o.AuthId = user.auth_id)
          //         return o;
          //     })
          //
          //
          //
          //     await  Promise.all(result2.map(driver =>
          //         axios.post(`${api.driver}/api/me/drivers/`, driver)
          //     ))
          //     await oncloseModal()
          //     await getDrivers();
          // }
        }catch (e) {
            console.log(e)
        }
    };


    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <input
                    type='file'
                    accept='.xlsx, .csv'
                    onChange={handleUpload}
                />
            </div>
            <div className="d-none">
                <ReactExcel
                    initialData={initialData}
                    onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
                    activeSheetClassName='active-sheet'
                    reactExcelClassName='react-excel'
                />
            </div>
            <div className="py-4">
                {initialData &&
                <button className="btn btn-primary float-right" onClick={save}>
                    Upload
                </button>}
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        getDrivers: () => dispatch(getDrivers())
    };
}

export default connect( null, mapDispatchToProps)(Upload)
