import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import {NotificationManager} from "react-notifications";

const AssignForm = ({ driver, vehicles, onAddUpdateUserModalClose, getDrivers2 }) => {
    const [formData, setFormData] = useState({
        firstname: "", lastname: "",  email: "", vehicle: ""
    });
    const [loading, setLoading] = useState(false)

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const {
        firstname, lastname, email, vehicle
    } = formData;

    useEffect(()=> {
       if(driver) {
           setFormData({...formData, firstname: driver.firstName, lastname: driver.lastName, email: driver.email})
       }
    },[driver])


    const onSubmit = async (e) => {
        e.preventDefault();
        asignVehicle()

    };


    const asignVehicle =  async () => {
        try {
            setLoading(true)
           await axios.put(`http://134.209.16.20:7050/api/driver/${driver.id}/`, {vehicleId: vehicle})
            await axios.put(`http://167.172.57.163:7063/api/vehicles/${vehicle}/`, {driver_id: driver.id, status: 2})
           await setLoading(false)
            getDrivers2()
            onAddUpdateUserModalClose()
            await NotificationManager.success('Vehicle Assigned Successfully!');
        }catch (e) {
            setLoading(false)
        }
    }


    return (
        <div>
            {loading &&
            <LinearProgress />
            }
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
                        {vehicles && vehicles.filter(vehicle=> vehicle.status == 1).map(vehicle => (
                            <option key={vehicle.id} value={vehicle.id}>{vehicle.plateNo}</option>
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

export default AssignForm;
