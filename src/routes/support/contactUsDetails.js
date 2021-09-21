import React, {useEffect, useState} from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap';
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getContactUsDetails} from "Actions/supportAction";
import {getAdmins} from "Actions/adminAction";



const ContactUsDetails = ({getContactUsDetails, match, updateSupportTicket, contactUsDetails, ticket, getTicketType, admins, getAdmins, assignSupportTicket})=> {
    const [formData, setFormData] = useState({status: ''})
    const [adminId, setAdminId] = useState('')
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [addNewUserModal2, setAddNewUserModal2] = useState(false)

    useEffect(()=> {
        if (match.params.id){
            getContactUsDetails(match.params.id)
            // getAdmins()
        }
    },[match.params.id])

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
        updateSupportTicket(contactUsDetails?.ticket_id, status)
        onAddUpdateUserModalClose()
    };

    const onSubmit2 = async (e) => {
        e.preventDefault();
        assignSupportTicket(contactUsDetails?.ticket_id, adminId)
        onAddUpdateUserModalClose2()
    };




    return (
        <div style={{minHeight: '90vh'}}>
            <Helmet>
                <title>Contact Us</title>
                <meta name="description" content="Contact Us Details" />
            </Helmet>
            <PageTitleBar title={`Contact Us details`} match={match}  />
            <div className="row"  style={{fontSize: '0.8rem'}}>
                <div className="col-sm-6">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Ticket Type</strong></span>{ticket?.name}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Ticket Id</strong></span>{contactUsDetails?.ticket_id}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>User type</strong></span>{contactUsDetails?.for_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Channel</strong></span>{contactUsDetails?.channel}
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
                                            <option value="1">New</option>
                                            <option value="2">Opened</option>
                                            <option value="3">In-progress</option>
                                            <option value="4">Closed</option>
                                            <option value="5">Unresolved</option>
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
        getContactUsDetails: (id) => dispatch(getContactUsDetails(id)),
        getAdmins: () => dispatch(getAdmins()),
    };
}

const mapStateToProps = state => ({
    contactUsDetails: state.support.contactUsDetails,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus,
    admins: state.admins.admins,



});

export default connect( mapStateToProps, mapDispatchToProps)(ContactUsDetails)
