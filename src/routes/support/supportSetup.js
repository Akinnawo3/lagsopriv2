import React, {useState, useEffect} from 'react'
import Button from "@material-ui/core/Button";
import { Form, FormGroup, Label, Input } from 'reactstrap';
import {
    createTicketType,
    deleteTicketType,
    getTicketTypes,
    getTicketTypes2,
    updateTicketType
} from "Actions/ticketTypeAction";
import {connect} from "react-redux";
import {createSupport} from "Actions/supportAction";




const SupportSetup = ({getTicketTypes, ticketTypes, createSupport}) => {

    const [formData, setFormData] = useState({ticket_id: '', user_id: '', user_type: '', channel: '', desc: '', status: ''})
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {ticket_id, user_id, user_type, channel, desc, status} = formData


    useEffect(()=> {
        getTicketTypes();
    },[])

    const onSubmit = async (e) => {
        e.preventDefault();
        createSupport(ticket_id, user_id, user_type, channel, desc, status)
        setFormData({
            ticket_id: "",
            user_id: "",
            user_type: '',
            channel: '',
            desc: '',
            status: ''
        })
    };

    return (
        <div className="bg-white" style={{minHeight: '99vh'}}>
            <Form onSubmit={onSubmit}>
                <div className="row  justify-content-around">
                    <div className="col-sm-6 bg-white">
                        <div className="font-weight-bold pb-5 font-2x pt-3">Ticket Details</div>
                        <FormGroup>
                            <Label>Ticket Type</Label>
                            <Input type="select"  name="ticket_id"  value={ticket_id} onChange={onChange}  required>
                                <option value="">Select</option>
                                {ticketTypes && ticketTypes.map(ticket => (
                                    <option key={ticket.id} value={ticket.id}>{ticket.name}</option>
                                ))}
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label >Description of ticket </Label>
                            <Input type="textarea"  name="desc" value={desc} onChange={onChange}  required />
                        </FormGroup>
                        <FormGroup>
                            <Label>status </Label>
                            <Input type="select"  name="status" value={status} onChange={onChange}  required>
                                <option value="">Select</option>
                                <option value="1">New</option>
                                <option value="2">Opened</option>
                                <option value="3">In-progress</option>
                                <option value="4">Closed</option>
                                <option value="5">Unresolved</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Channel</Label>
                            <Input type="text" name="channel" value={channel} onChange={onChange} required />
                        </FormGroup>
                        <FormGroup>
                            <Label>Upload images </Label>
                            <Input type="file"  onChange={onChange} />
                        </FormGroup>
                    </div>
                    <div className="col-sm-5 bg-white">
                        <div>
                            <div className="font-weight-bold pb-5 font-2x pt-3">User Details</div>
                            <FormGroup>
                                <Label>User Type</Label>
                                <Input type="select"  name="user_type" value={user_type} onChange={onChange}  required>
                                    <option value="">Select</option>
                                    <option value="Driver">Driver</option>
                                    <option value="Passenger">Passenger</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="lastName">Email </Label>
                                <Input type="text"  name="user_id" value={user_id} onChange={onChange}  required />
                            </FormGroup>
                        </div>

                    </div>
                </div>
                <div className="mt-5 float-right" style={{paddingRight: '15px'}}>
                    <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>

                </div>
            </Form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getTicketTypes: () => dispatch(getTicketTypes2()),
        createSupport: (ticket_id, user_id, user_type, channel, desc, status) => dispatch(createSupport(ticket_id, user_id, user_type, channel, desc, status)),
        updateTicketType: (id, name) => dispatch(updateTicketType(id, name)),
        deleteTicketType: (id) => dispatch(deleteTicketType(id)),
    };
}

const mapStateToProps = state => ({
    ticketTypes: state.ticketTypes.ticketTypes,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(SupportSetup)

