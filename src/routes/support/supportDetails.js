import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {assignSupportTickets, getSupportTicket, updateSupportTickets} from "Actions/supportAction";
import api from "../../environments/environment";
import {Link} from "react-router-dom";
import {getTicketType} from "Actions/ticketTypeAction";
import {getAdmins} from "Actions/adminAction";
import {getTicketStatus} from "Helpers/helpers";



const SupportDetails = ({getSupportTicket, match, updateSupportTicket, supportDetails, ticket, getTicketType, admins, getAdmins, assignSupportTicket})=> {
    // const [tickets, setTickets] = useState('')
    const [formData, setFormData] = useState({status: ''})
    const [assignedToData, setAssignedToData] = useState({})
    const [createdBy, setCreatedBy] = useState({})
    const [createdFor, setCreatedFor] = useState({})
    const [adminId, setAdminId] = useState('')
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [addNewUserModal2, setAddNewUserModal2] = useState(false)

    useEffect(()=> {
        if (match.params.id){
            getSupportTicket(match.params.id)
            getAdmins()
        }
    },[match.params.id])

    // useEffect(()=> {
    //     if(supportDetails?.assigned_to) {
    //         assignedTo(supportDetails?.assigned_to)
    //     }
    //
    // },[supportDetails?.assigned_to])
    //
    // useEffect(()=> {
    //     if(supportDetails?.created_by) {
    //         getCreatedBy(supportDetails?.created_by)
    //         setFormData({
    //             status: supportDetails?.status
    //         })
    //     }
    //
    // },[supportDetails?.created_by])
    //
    // useEffect(()=> {
    //     if(supportDetails?.for_id) {
    //         getCreatedFor(supportDetails?.for_id)
    //     }
    //
    // },[supportDetails?.for_id])
    //
    // useEffect(()=> {
    //     if(supportDetails?.support_id) {
    //         getTicketType(supportDetails?.support_id)
    //     }
    //
    // },[supportDetails?.support_id])


    // admin_data: {first_name: "Mike", first_last: "Dean", email: "tajibuwa@gmail.com", phone_number: "07032838025",…}
    // email: "tajibuwa@gmail.com"
    // first_last: "Dean"
    // first_name: "Mike"
    // phone_number: "07032838025"
    // user_type: "admin"
    // assign_to: "611b6c839f0781cec3ebb5aa"
    // auth_id: "611a827d9f07814794ebb48a"
    // comment: "A description"
    // createdAt: "2021-08-17T08:01:13.993Z"
    // issue_id: "611b6cc9b1e95940281cd76e"
    // status: 1
    // updatedAt: "2021-08-17T08:01:13.993Z"
    // user_data: {first_name: "Ayorinde", first_last: "Kudoro", email: "kudoroayorinde@gmail.com",…}
    // email: "kudoroayorinde@gmail.com"
    // first_last: "Kudoro"
    // first_name: "Ayorinde"
    // phone_number: "08034895313"
    // user_type: "rider"
    // status: "ok"
    //

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const {status} = formData



    const opnAddNewUserModal = () => {
        // e.preventDefault();
        setAddNewUserModal(true)
    }



    const onAddUpdateUserModalClose = () => {
        setAddNewUserModal(false);
    }

    const opnAddNewUserModal2 = () => {
        setAddNewUserModal2(true)
    }



    const onAddUpdateUserModalClose2 = () => {
        setAddNewUserModal2(false);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        updateSupportTicket(supportDetails?.issue_id, status)
        onAddUpdateUserModalClose()
    };

    const onSubmit2 = async (e) => {
        e.preventDefault();
        assignSupportTicket(supportDetails?.ticket_id, adminId)
        onAddUpdateUserModalClose2()
    };

    const assignedTo = async (auth_id) => {
        try {
           const res = await axios.get(`${api.user}/v1.1/admin/users/${auth_id}`)
            setAssignedToData(res.data.data)

        }catch (e) {

        }
    }
    const getCreatedBy = async (auth_id) => {
        try {
            const res = await axios.get(`${api.user}/v1.1/admin/users/${auth_id}`)
            setCreatedBy(res.data.data)

        }catch (e) {

        }
    }

    const getCreatedFor = async (auth_id) => {
        try {
            const res = await axios.get(`${api.user}/v1.1/admin/users/${auth_id}`)
            setCreatedFor(res.data.data)

        }catch (e) {

        }
    }


    return (
        <div style={{minHeight: '90vh'}}>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Ticket Details" />
            </Helmet>
            <PageTitleBar title={`Ticket details`} match={match}  />
            <div className="row"  style={{fontSize: '0.8rem'}}>
                <div className="col-sm-6">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Issue Id</strong></span>{supportDetails?.issue_id}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Created For</strong></span>
                                    {createdFor?.auth_id === supportDetails?.for_id &&
                                    <Link
                                        to={supportDetails?.user_data?.user_type === 'driver' ? `/admin/drivers/${supportDetails.auth_id}` : `/admin/passengers/${supportDetails.auth_id}`}>{supportDetails?.user_data?.first_name} {supportDetails?.user_data?.first_last}</Link>
                                    }
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>User type</strong></span>{supportDetails?.user_data?.user_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Assigned To</strong></span>{supportDetails?.admin_data?.first_name} {supportDetails?.admin_data?.first_last}
                                </li>
                                 <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Status</strong></span><Badge color="primary">{getTicketStatus(supportDetails?.status)}</Badge>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Comment</strong></span>{supportDetails?.comment}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left">
                                    <Button onClick={()=> opnAddNewUserModal()} className="bg-primary mt-3 text-white">Update Ticket</Button>
                                    {!supportDetails?.assigned_to &&
                                    <Button onClick={()=> opnAddNewUserModal2()} className="bg-success mt-3 text-white ml-4">Assign</Button>
                                    }
                                </span>
                                </li>
                            </ul>
                        </div>
                        <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
                            <ModalHeader toggle={() => onAddUpdateUserModalClose()}>
                                Update Ticket Status
                            </ModalHeader>
                            <ModalBody>
                                <Form onSubmit={onSubmit}>
                                    <FormGroup>
                                        <Label for="phoneNumber">status </Label>
                                        <Input type="select"  name="status" value={status} onChange={onChange}  required>
                                            <option value="0">New</option>
                                            <option value="1">Opened</option>
                                            <option value="2">In-progress</option>
                                            <option value="3">Closed</option>
                                            <option value="4">Unresolved</option>
                                        </Input>
                                    </FormGroup>
                                    <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                        <Modal isOpen={addNewUserModal2} toggle={() => onAddUpdateUserModalClose2()}>
                            <ModalHeader toggle={() => onAddUpdateUserModalClose2()}>
                                Assign Admin
                            </ModalHeader>
                            <ModalBody>
                                <Form onSubmit={onSubmit2}>
                                    <Label>Assign To</Label>
                                    <Input type="select"  name="assignedTo"  value={adminId} onChange={(e) =>setAdminId(e.target.value)} required>
                                        <option value="">Select</option>
                                        {admins?.length > 0 && admins.map(admin => (
                                            <option key={admin.auth_id} value={admin.auth_id}>{admin.first_name} {admin.last_name}</option>
                                        ))}
                                    </Input>
                                    <Button type="submit" variant="contained" className="text-white btn-success mt-3">Submit</Button>
                                </Form>
                            </ModalBody>
                        </Modal>
                    </div>
                </div>

            </div>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getTicketType: (id) => dispatch(getTicketType(id)),
        getSupportTicket: (ticket_id) => dispatch(getSupportTicket(ticket_id)),
        updateSupportTicket: (id, status) => dispatch(updateSupportTickets(id, status)),
        assignSupportTicket: (id, assigned_to) => dispatch(assignSupportTickets(id, assigned_to)),
        getAdmins: () => dispatch(getAdmins()),
    };
}

const mapStateToProps = state => ({
    supportDetails: state.support.supportDetails,
    ticket: state.ticketTypes.ticket,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus,
    admins: state.admins.admins,



});

export default connect( mapStateToProps, mapDispatchToProps)(SupportDetails)
