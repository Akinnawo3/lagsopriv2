import React, {useState, useEffect} from 'react'
import Button from "@material-ui/core/Button";
import  axios from 'axios'
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
import api from "../../environments/environment";
import {getAdmins} from "Actions/adminAction";
import {NotificationManager} from "react-notifications";




const SupportSetup = ({getTicketTypes, ticketTypes, createSupport, admins, getAdmins}) => {

    const [formData, setFormData] = useState({ticketId: '', forType: '', channel: '', desc: '', status: '', assignedTo: '', email: ''})
    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {ticketId, forType, channel, desc, status, assignedTo, email} = formData
    const [loading, setLoading] = useState(false)


    useEffect(()=> {
        getTicketTypes();
        getAdmins();
    },[])


    const checkDriverEmail = async () => {
        try {
            setLoading(true)
            const res =  await axios.get(`${api.drivers}/api/drivers/${email}`)
            if(res.data) {
              await  createSupport(ticketId, forType, channel, desc, status, assignedTo, res.data.authId)
                setLoading(false)
                setFormData({
                    ticket_id: "",
                    user_id: "",
                    user_type: '',
                    channel: '',
                    desc: '',
                    status: ''
                })
            }
        }catch (e) {
            setLoading(false)
            NotificationManager.error(`Driver with email ${email} doesnt exist`)
        }
    }

    const checkPassengerEmail = async () => {
        try {
            setLoading(true)
            const res =  await axios.get(`${api.passengers}/api/passengers/${email}`)
            if(res.data) {
               await createSupport(ticketId, forType, channel, desc, status, assignedTo, res.data.authId)
                setLoading(false)
                setFormData({
                    ticket_id: "",
                    user_id: "",
                    user_type: '',
                    channel: '',
                    desc: '',
                    status: ''
                })
            }
        }catch (e) {
            setLoading(false)
            NotificationManager.error(`Passenger with email ${email} doesnt exist`)
        }
    }



    const onSubmit = async (e) => {
        e.preventDefault();
        if(forType === 'Driver') {
            checkDriverEmail()
        }else {
            checkPassengerEmail()
        }
    };

    return (
        <div className="bg-white" style={{minHeight: '99vh'}}>
            <Form onSubmit={onSubmit}>
                <div className="row  justify-content-around">
                    <div className="col-sm-6 bg-white">
                        <div className="font-weight-bold pb-5 font-2x pt-3">Ticket Details</div>
                        <FormGroup>
                            <Label>Ticket Type</Label>
                            <Input type="select"  name="ticketId"  value={ticketId} onChange={onChange}  required>
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
                                <Input type="select"  name="forType" value={forType} onChange={onChange}  required>
                                    <option value="">Select</option>
                                    <option value="Driver">Driver</option>
                                    <option value="Passenger">Passenger</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email </Label>
                                <Input type="text"  name="email" value={email} onChange={onChange}  required />
                            </FormGroup>
                            <FormGroup>
                                <Label>Assign To</Label>
                                <Input type="select"  name="assignedTo"  value={assignedTo} onChange={onChange}>
                                    <option value="">Select</option>
                                    {admins && admins.map(admin => (
                                        <option key={admin.authId} value={`${admin.firstName} ${admin.lastName}`}>{admin.firstName} {admin.lastName}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                        </div>

                    </div>
                </div>
                <div className="mt-5 float-right" style={{paddingRight: '15px'}}>
                    <Button disabled={loading} type="submit" variant="contained" className="text-white btn-success">{loading ? 'loading..' : 'Submit'}</Button>

                </div>
            </Form>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        getTicketTypes: () => dispatch(getTicketTypes2()),
        createSupport: (ticketId, forType, channel, desc, status, assignedTo, email) => dispatch(createSupport(ticketId, forType, channel, desc, status, assignedTo, email)),
        updateTicketType: (id, name) => dispatch(updateTicketType(id, name)),
        deleteTicketType: (id) => dispatch(deleteTicketType(id)),
        getAdmins: () => dispatch(getAdmins()),
    };
}

const mapStateToProps = state => ({
    ticketTypes: state.ticketTypes.ticketTypes,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus,
    admins: state.admins.admins,



});

export default connect( mapStateToProps, mapDispatchToProps)(SupportSetup)

