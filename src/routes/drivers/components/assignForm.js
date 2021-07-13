import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import {NotificationManager} from "react-notifications";
import api from "../../../environments/environment";
import {changeDriverStatus} from "Actions/driverAction";
import {connect} from "react-redux";
import {assignVehicle} from "Actions/vehicleAction";

const AssignForm = ({ driver, vehicles, assignVehicle, driver_status, current_page, onAddUpdateUserModalClose }) => {
    const [formData, setFormData] = useState({
        firstname: "", lastname: "",  email: "", vehicle: ""
    });

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const {
        firstname, lastname, email, vehicle
    } = formData;

    useEffect(()=> {
       if(driver) {
           setFormData({...formData, firstname: driver.first_name, lastname: driver.last_name, email: driver.email})
       }
    },[driver])


    const onSubmit = async (e) => {
        e.preventDefault();
     await   assignVehicle(vehicle, driver.auth_id, current_page, driver_status)
      await  onAddUpdateUserModalClose()

    };




    return (
        <div>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="userName">First Name</Label>
                    <Input
                        onChange={onChange}
                        readOnly={true}
                        type="text"
                        name="firstname"
                        value={firstname}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userName">Last Name</Label>
                    <Input
                        onChange={onChange}
                        readOnly={true}
                        type="text"
                        name="lastname"
                        value={lastname}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userEmail">Email</Label>
                    <Input
                        onChange={onChange}
                        type="email"
                        name="email"
                        readOnly={true}
                        value={email}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Vehicles</Label>
                    <Input type="select" name="vehicle" onChange={onChange} value={vehicle} required={true}>
                        <option value="">Select Vehicle</option>
                        {vehicles && vehicles.map(vehicle => (
                            <option key={vehicle.vehicle_id} value={vehicle.vehicle_id}>{vehicle.car_number_plate}</option>
                        ))}
                    </Input>
                </FormGroup>
                <ModalFooter>
                    <Button type="submit" variant="contained" className="text-white btn-success">Add</Button>
                </ModalFooter>
            </Form>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        assignVehicle: (vehicle_id, driver_auth_id, page_no, driver_status) => dispatch(assignVehicle(vehicle_id, driver_auth_id, page_no, driver_status)),
    };
}


export default connect( null, mapDispatchToProps) (AssignForm);
