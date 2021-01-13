import React, {useEffect, useState} from 'react';
import { Form, FormGroup, Label, Input, ModalFooter } from 'reactstrap';
import Button from "@material-ui/core/Button";

const AssignForm = ({ driver, vehicles }) => {
    const [formData, setFormData] = useState({
        firstname: "", lastname: "",  email: "", vehicle: ""
    });

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const {
        firstname, lastname, email, vehicle
    } = formData;

    useEffect(()=> {
       if(driver) {
           setFormData({...formData, firstname: driver.firstName, lastname: driver.lastName, email: driver.email})
       }
    },[driver])


    return (
        <Form>
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
                        <option key={vehicle.id} value={vehicle.plate_number}>{vehicle.plate_number}</option>
                    ))}
                </Input>
            </FormGroup>
            <ModalFooter>
                <Button type="submit" variant="contained" className="text-white btn-success">Add</Button>
            </ModalFooter>
        </Form>
    );
};

export default AssignForm;
