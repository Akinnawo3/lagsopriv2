import React, {useEffect, useState} from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import AssignForm from "Routes/drivers/components/assignForm";
import Button from "@material-ui/core/Button";
import {deleteTicketType, getTicketTypes, getTicketTypes2, updateTicketType} from "Actions/ticketTypeAction";
import {getSupport, getSupport2, updateSupport} from "Actions/supportAction";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";



const SupportDetails = ({getTicketTypes, getSupport, ticketTypes, support, match, updateSupport})=> {
    const [supportDetails, setSupportDetails] = useState({})
    const [tickets, setTickets] = useState('')
    const [formData, setFormData] = useState({status: ''})

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const {status} = formData


    useEffect(()=> {
        getSupport()
        getTicketTypes();
    },[])

    useEffect(()=> {
        if (support && match.params.id){
            support.map(sup=> {
                if(sup.id == match.params.id){
                    setSupportDetails(sup)
                    setFormData({status: sup.status})
                }
            })
        }
    },[support, match.params.id])


    useEffect(()=> {
        if(support.length > 0) {
            ticketTypes.map(ticket => {
                if(ticket.id == supportDetails.ticket_id) {
                   setTickets(ticket.name)
                }
            })
        }
    }, [supportDetails.ticket_id])

    // const [anchorEl, setAnchorEl] = useState(null);
    const [addNewUserModal, setAddNewUserModal] = useState(false)

    const opnAddNewUserModal = () => {
        // e.preventDefault();
        setAddNewUserModal(true)
    }



    const onAddUpdateUserModalClose = () => {
        setAddNewUserModal(false);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        updateSupport(supportDetails.id, status)
        onAddUpdateUserModalClose()
    };


    return (
        <div>
            <Helmet>
                <title>User Profile</title>
                <meta name="description" content="Ticket Details" />
            </Helmet>
            <PageTitleBar title={`Ticket details`} match={match}  />
            <div className="row" style={{minHeight: '90vh'}}>
                <div className="col-sm-6">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <ul className="list-group">
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Type of ticket</strong></span>{tickets}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>user type</strong></span>{supportDetails.user_type}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>user Id</strong></span>{supportDetails.user_id}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Channel</strong></span>{supportDetails.channel}
                                </li>

                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Description</strong></span>{supportDetails.desc}
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Image</strong></span>
                                </li>
                                <li className="list-group-item text-right"><span
                                    className="pull-left"><strong>Status</strong></span><Badge onClick={()=> opnAddNewUserModal()} style={{cursor: 'pointer'}} color="danger">opened</Badge>
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
                                    <FormGroup>
                                        <Label>Reply </Label>
                                        <Input type="textarea"  name="education"   />
                                    </FormGroup>
                                    <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>

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
        getTicketTypes: () => dispatch(getTicketTypes2()),
        getSupport: () => dispatch(getSupport2()),
        updateSupport: (id, status) => dispatch(updateSupport(id, status)),
        updateTicketType: (id, name) => dispatch(updateTicketType(id, name)),
        deleteTicketType: (id) => dispatch(deleteTicketType(id)),
    };
}

const mapStateToProps = state => ({
    support: state.support.support,
    ticketTypes: state.ticketTypes.ticketTypes,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(SupportDetails)
