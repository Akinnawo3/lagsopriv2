import React, {useState} from "react";
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import axios from "axios";
import api from "../../../environments/environment";
import  {getDrivers} from "Actions/driverAction";
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
        const header = {
            headers: {
                Authorization: localStorage.getItem("user_id")
            }
        }
        const result = generateObjects(currentSheet);
        try {
          await  Promise.all(result.map(driver =>
              axios.post(`${api.driver}/api/me/drivers/`, driver, header)
            ))
            await oncloseModal()
           await getDrivers();
        }catch (e) {
            console.log(e)
        }
    };


    return (
        <div>
            <div className="d-flex align-items-center justify-content-center">
                <input
                    type='file'
                    accept='.xlsx'
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
