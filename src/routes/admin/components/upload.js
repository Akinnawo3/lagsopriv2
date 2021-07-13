import React, {useState} from "react";
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';
import axios from "axios";
import {connect} from "react-redux";
import {getAdmins} from "../../../actions/adminAction";
import LinearProgress from "@material-ui/core/LinearProgress";
import {NotificationManager} from "react-notifications";

const Upload = ({getAdmins, oncloseModal}) => {
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
        const result2 = result.map(function(el) {
            let o = Object.assign({}, el);
            o.password = "password"
            o.authId = Math.floor(Math.random() * 100)
            return o;
        })
        try {
            setLoading(true)
          await  Promise.all(result2.map(driver =>
              axios.post(`${api.admins}/api/admin/`, driver)
            ))
            setLoading(false)
            await oncloseModal()
           await getAdmins();
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
                <button className="btn btn-primary float-right" onClick={save}>
                    Upload
                </button>}
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        getAdmins: () => dispatch(getAdmins())
    };
}

export default connect( null, mapDispatchToProps)(Upload)
