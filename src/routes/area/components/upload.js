import React, {useState} from "react";
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import axios from "axios";
import {connect} from "react-redux";
import {NotificationManager} from "react-notifications";
import {getAreas} from "Actions/areaAction";
import api from "../../../environments/environment";

const Upload = ({getAreas, oncloseModal}) => {
    const [initialData, setInitialData] = useState(undefined);
    const [currentSheet, setCurrentSheet] = useState({});
    const [loading, setLoading] = useState(false)

    const handleUpload = (event) => {
        const file = event.target.files[0];
        //read excel file
        readFile(file)
            .then((readedData) => setInitialData(readedData))
            .catch((error) => console.error(error));
    };

    const save = async () => {
        const result = generateObjects(currentSheet);
        try {
            setLoading(true)
          await  Promise.all(result.map(area =>
              axios.post(`${api.area}/api/areas/`, area)
            ))
            setLoading(false)
            await oncloseModal()
           await getAreas();
        }catch (e) {
            setLoading(false)
            NotificationManager.error(e.message);
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
                <button disabled={loading} className="btn btn-primary float-right" onClick={save}>
                    {!loading ? 'Upload': 'Loading...'}
                </button>}
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        getAreas: () => dispatch(getAreas())
    };
}

export default connect( null, mapDispatchToProps)(Upload)
