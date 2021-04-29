/**
 * Emergency
 */
import React, { useState, useEffect, Fragment } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import api from 'Api';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,

} from 'reactstrap';
import {Link} from "react-router-dom";
import {createAdmin, deleteAdmin, getAdmins, updateAdmin} from "Actions/adminAction";
import {connect} from "react-redux";
import {getSOS, setSOSNumber} from "Actions/emergencyAction";
import Spinner from "../../spinner/Spinner";



const  Emergency = ({match, setSOSNumber, getSOS, sos, loading}) => {
    const  [number, setNumber] = useState('');
    const [isModal, setIsModal] = useState(false)


    const onSubmit = async (e) => {
        e.preventDefault();
      await setSOSNumber(number)
        setIsModal(false);
      setSOSNumber('');
    };

    useEffect(() => {
      getSOS();
    },[])

    console.log(sos, 'llllll')


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Emergency"} match={match} />
            {loading && <Spinner />}
            {!loading && <RctCollapsibleCard heading="Emergency" fullBlock>
                <div className="float-right">
                    <a href="#" onClick={e => e.preventDefault()} className="btn-sm btn-outline-default mr-10">Export to Excel</a>
                    <a href="#" onClick={(e) => setIsModal(true)} color="primary" className="caret btn-sm mr-10">Add New SOS Number <i className="zmdi zmdi-plus"></i></a>
                </div>
                <div className="table-responsive">
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Trip Id</TableCell>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Latitude</TableCell>
                                <TableCell>Longitude</TableCell>
                                <TableCell>Type</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {sos.length > 0 && sos.map((data) => (
                                    <TableRow hover key={data.id}>
                                        <TableCell>{data.trip_id}</TableCell>
                                        <TableCell>{data.userPhoneNo}</TableCell>
                                        <TableCell>{data.address}</TableCell>
                                        <TableCell>{data.latitude}</TableCell>
                                        <TableCell>{data.longitude}</TableCell>
                                        <TableCell>{data.type == 1 ? 'Driver' : 'Passenger'}</TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
            </RctCollapsibleCard>}
            <Modal isOpen={isModal} toggle={() => setIsModal(false)}>
                <ModalHeader toggle={() => setIsModal(false)}>
                    Add SOS Number
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input type="text"  name="firstName" value={number} onChange={(e)=>setNumber(e.target.value)}   required/>
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
        getSOS: () => dispatch(getSOS()),
        setSOSNumber: (number) => dispatch(setSOSNumber(number)),
    };
}

const mapStateToProps = state => ({
    sos: state.sos.sos,
    loading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (Emergency);
