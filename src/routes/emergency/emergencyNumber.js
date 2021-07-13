/**
 * Emergency Numbers
 */
import React, {useState, useEffect, Fragment, useRef} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {Form, FormGroup, Label, Input} from 'reactstrap';
import PageTitleBar from 'Components/PageTitleBar/PageTitleBar';
import RctCollapsibleCard from 'Components/RctCollapsibleCard/RctCollapsibleCard';
import Button from "@material-ui/core/Button";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,

} from 'reactstrap';
import {connect} from "react-redux";
import {deleteSOSNumber, getSOSNumber, setSOSNumber} from "Actions/emergencyAction";
import EmptyData from "Components/EmptyData/EmptyData";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";



const  EmergencyNumber = ({match, setSOSNumber, getSOSNumber, sosNumbers, loading, deleteSOSNumber}) => {
    const  [number, setNumber] = useState('');
    const [isModal, setIsModal] = useState(false)
    const [deleteId, setDeleteId] = useState(null)
    const inputEl = useRef(null);


    useEffect(() => {
      getSOSNumber(true);
    },[])



    const onSubmit = async (e) => {
        e.preventDefault();
        await setSOSNumber(number)
        setIsModal(false);
        setNumber('');
    };

    const onDelete = (id) => {
        inputEl.current.open();
        setDeleteId(id)
    }


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Emergency Numbers"} match={match} />
            <RctCollapsibleCard heading={sosNumbers?.length > 0 ? 'Emergency Numbers' : null} fullBlock style={{minHeight: "70vh"}}>
                <div className="float-right">
                    <a href="#" onClick={(e) => setIsModal(true)} color="primary" className="caret btn-sm mr-10">Add New SOS Number <i className="zmdi zmdi-plus"></i></a>
                </div>
                {!loading && sosNumbers?.length > 0 &&
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Phone Number</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {sosNumbers.length > 0 && sosNumbers.map((data) => (
                                    <TableRow hover key={data.id}>
                                        <TableCell>{data.phone_number}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger ml-2" onClick={() => onDelete(data.id)}><i className="ti-close"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
                }
            </RctCollapsibleCard>
            {sosNumbers.length < 1 && <EmptyData />}
            <Modal isOpen={isModal} toggle={() => setIsModal(false)}>
                <ModalHeader toggle={() => setIsModal(false)}>
                    Add SOS Number
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="firstName">Number</Label>
                            <Input type="number"  name="firstName" value={number} onChange={(e)=>setNumber(e.target.value)}   required/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure Want To Delete?"
                message="This will delete Number permanently."
                onConfirm={() => {
                    deleteSOSNumber(deleteId);
                    inputEl.current.close();
                }}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getSOSNumber: (spinner) => dispatch(getSOSNumber(spinner)),
        deleteSOSNumber: (id) => dispatch(deleteSOSNumber(id)),
        setSOSNumber: (number) => dispatch(setSOSNumber(number)),
    };
}

const mapStateToProps = state => ({
    sosNumbers: state.sos.sosNumbers,
    loading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (EmergencyNumber);
