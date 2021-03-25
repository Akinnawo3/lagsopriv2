import React, {useEffect, useState} from 'react';
import { Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Badge } from 'reactstrap';
import AssignForm from "Routes/drivers/components/assignForm";
import Button from "@material-ui/core/Button";
import {deleteTicketType, getTicketTypes, getTicketTypes2, updateTicketType} from "Actions/ticketTypeAction";
import {getSupport, getSupport2, updateSupport} from "Actions/supportAction";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";



const ScheduleDetails = ({getTicketTypes, getSupport, ticketTypes, support, match, updateSupport})=> {
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
            <PageTitleBar title={`Schedule details`} match={match}  />
            <div className="row" style={{minHeight: '90vh'}}>
                <div className="col-sm-6">
                    <div className="tab-content">
                        <div className="tab-pane active" id="home">
                            <div className="d-flex align-items-center p-3">
                                <div className="scheduleHeader font-weight-bold">
                                    Trip Details
                                </div>
                                <div style={{marginLeft: '50px'}}>
                                    <Badge color="warning">Pending</Badge>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="scheduleHeader">
                                    Yesterday, 5:00pm <span className="ml-3">Class D</span>
                                </div>
                                <div className="schedulePickup mt-4">
                                    Pick up location
                                </div>
                                <div className="scheduleHeader mt-3">
                                    Civic centre Civic centre..
                                </div>
                                <div className="schedulePickup mt-4">
                                    Drop off location
                                </div>
                                <div className="scheduleHeader mt-3">
                                    Oshodi Oshodi Oshodi....
                                </div>
                                <div className="schedulePickup mt-4">
                                    Riders
                                </div>
                                <div className="mt-3">
                                    <img
                                        src={require('Assets/img/black-linear-studios-zVa0taIta_0-unsplash 1.png')}
                                        // alt="user profile"
                                        className="img-fluid rounded-circle"
                                        width="32"
                                        height="32"
                                    />
                                    <img
                                        src={require('Assets/img/black-linear-studios-zVa0taIta_0-unsplash 2.png')}
                                        // alt="user profile"
                                        className="img-fluid rounded-circle"
                                        width="32"
                                        height="32"
                                        style={{marginLeft: '-10px'}}
                                    />
                                    <img
                                        src={require('Assets/img/black-linear-studios-zVa0taIta_0-unsplash 2.png')}
                                        // alt="user profile"
                                        className="img-fluid rounded-circle"
                                        width="32"
                                        height="32"
                                        style={{marginLeft: '-10px'}}
                                    />
                                    <img
                                        src={require('Assets/img/black-linear-studios-zVa0taIta_0-unsplash 2.png')}
                                        // alt="user profile"
                                        className="img-fluid rounded-circle"
                                        width="32"
                                        height="32"
                                        style={{marginLeft: '-10px'}}
                                    />
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="scheduleHeader mt-4">
                                            1 of <span className="schedulePickup">4</span>
                                        </div>
                                        <Button type="button" variant="contained" className="text-white btn-primary">Trigger trip suggestion</Button>

                                    </div>
                                </div>
                            </div>
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

export default connect( mapStateToProps, mapDispatchToProps)(ScheduleDetails)
