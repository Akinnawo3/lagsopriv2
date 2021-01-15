import React, {useState} from "react";
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import axios from "axios";
import {connect} from "react-redux";
import {getVehicles} from "Actions/vehicleAction";

const Upload = ({getVehicles, oncloseModal}) => {
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
        const result = generateObjects(currentSheet);
        const result2 = result.map(function(el) {
            let o = Object.assign({}, el);
            o.verified = 1;
            o.status = 1;
            return o;
        })
        try {
          await  Promise.all(result2.map(vehicle =>
              axios.post('http://167.172.57.163:7063/api/vehicles/', vehicle)
            ))
            await oncloseModal()
           await getVehicles();
        }catch (e) {
            oncloseModal()
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
        getVehicles: () => dispatch(getVehicles())
    };
}

export default connect( null, mapDispatchToProps)(Upload)
