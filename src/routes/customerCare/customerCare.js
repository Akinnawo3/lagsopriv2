import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from "@material-ui/core/Button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import {connect} from "react-redux";
import EmptyData from "Components/EmptyData/EmptyData";
import {
    createCustomerCare,
    createWaitingTime,
    deleteCustomerCare,
    getCustomerCare,
    updateCustomerCare
} from "Actions/customerCareAction";

const  CustomerCare = (props) => {
    const {
        match,
        getCustomerCare,
        customerCareNumbers,
        createCustomerCare,
        createWaitingTime,
        loading} = props
    const [customerLineModalState, setCustomerLineModalState] = useState(false)
    const [waitingTimeModalSate, setWaitingTimeModalSate] = useState(false)
    const [formData, setFormData] = useState({customerCare: '', waitingTime: ''})
    const [screen, setScreen] = useState(1)

    useEffect(()=> {
        getCustomerCare(true);
    },[])


    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {customerCare, waitingTime} = formData

    const opnAddNewCustomerCareModal = (e) => {
        e.preventDefault();
        const cusNumArr = customerCareNumbers?.customer_care_line
        if(cusNumArr.length > 0) {
            setFormData({...formData, customerCare: cusNumArr.join(', ')})
        }
        setCustomerLineModalState(true)
    }

    const customerCareLineModalClose = () => {
        setCustomerLineModalState(false);
    }


    const opnAddNewWaitingTimeModal = (e) => {
        e.preventDefault();
        setFormData({...formData, waitingTime: customerCareNumbers?.waiting_time})
       setWaitingTimeModalSate(true)
    }


    const waitingTimeModalClose = () => {
        setWaitingTimeModalSate(false);
    }




    const onSubmit = async (e) => {
        e.preventDefault();
        customerCareLineModalClose()
        await createCustomerCare(customerCare)


    };

    const onSubmit2 = async (e) => {
        e.preventDefault();
        waitingTimeModalClose()
        await createWaitingTime(waitingTime)
        setFormData({...formData, waitingTime: ''})


    };

    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Settings"} match={match} />

                {!loading && customerCareNumbers?.customer_care_line.length > 0 &&
                <section id="page-account-settings" className='p-3'>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-3 mb-2 mb-md-0 pills-stacked">
                                    <ul className="nav nav-pills flex-column">
                                        <li className="nav-item" onClick={() => setScreen(1)}>
                                            <a className={`nav-link d-flex align-items-center ${screen === 1 && 'active'}`} id="account-pill-general"
                                               data-toggle="pill" aria-expanded="true">
                                                <i className="bx bx-cog"></i>
                                                <span>Customer Care Lines</span>
                                            </a>
                                        </li>
                                        <li className="nav-item" onClick={() => setScreen(2)}>
                                            <a className={`nav-link d-flex align-items-center ${screen === 2 && 'active'}`} id="account-pill-password"
                                               data-toggle="pill" aria-expanded="false">
                                                <i className="bx bx-lock"></i>
                                                <span>Total waiting time allowed</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-6">
                                    {screen === 1 &&

                                    <RctCollapsibleCard heading="" fullBlock>
                                        <div className="float-right p-3">
                                            <a href="#" onClick={(e) => opnAddNewCustomerCareModal(e)} color="primary" className="caret btn-sm mr-10">Add Numbers <i className="zmdi zmdi-plus"></i></a>
                                        </div>


                                        <div className="table-responsive" style={{minHeight: "50vh"}}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow hover>
                                                        <TableCell>Number</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <Fragment>
                                                        {customerCareNumbers?.customer_care_line.length > 0 && customerCareNumbers?.customer_care_line.map((numbers, key) => (
                                                            <TableRow hover key={key}>
                                                                <TableCell>{numbers}</TableCell>
                                                            </TableRow>
                                                        ))}
                                                    </Fragment>
                                                </TableBody>
                                            </Table>
                                        </div>
                                        {!loading && customerCareNumbers.length < 1 && <EmptyData />}
                                    </RctCollapsibleCard>
                                    }

                                    {screen === 2 &&

                                    <RctCollapsibleCard heading="" fullBlock>
                                        <div className="float-right p-3">
                                            <a href="#" onClick={(e) => opnAddNewWaitingTimeModal(e)} color="primary" className="caret btn-sm mr-10">Add Time<i className="zmdi zmdi-plus"></i></a>
                                        </div>


                                        <div className="table-responsive" style={{minHeight: "50vh"}}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow hover>
                                                        <TableCell>Time</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <Fragment>
                                                            <TableRow hover>
                                                                <TableCell>{customerCareNumbers?.waiting_time} Minutes</TableCell>
                                                            </TableRow>
                                                    </Fragment>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </RctCollapsibleCard>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }


            <Modal isOpen={customerLineModalState} toggle={() => customerCareLineModalClose()}>
                <ModalHeader toggle={() => customerCareLineModalClose()}>
                    Create Number
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="lastName">Customer Care Number(s)</Label>
                            <Input type="textarea"  name="customerCare" value={customerCare} onChange={onChange}  required />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>

            <Modal isOpen={waitingTimeModalSate} toggle={() => waitingTimeModalClose()}>
                <ModalHeader toggle={() => waitingTimeModalClose()}>
                    Create Number
                </ModalHeader>
                <Form onSubmit={onSubmit2}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="lastName">Time in Minutes</Label>
                            <Input type="number"  name="waitingTime" value={waitingTime} onChange={onChange}  required />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getCustomerCare: (spinner) => dispatch(getCustomerCare(spinner)),
        createCustomerCare: (customer_care) => dispatch(createCustomerCare(customer_care)),
        createWaitingTime: (waiting_time) => dispatch(createWaitingTime(waiting_time)),

    };
}

const mapStateToProps = state => ({
    customerCareNumbers: state.customerCare.customerCareNumbers,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps) (CustomerCare);





