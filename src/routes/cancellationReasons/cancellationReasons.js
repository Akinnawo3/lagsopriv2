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
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import {CSVLink} from "react-csv";
import EmptyData from "Components/EmptyData/EmptyData";
import {createCR, deleteCR, getCR, updateCR} from "Actions/cancellationReasonsAction";

const  CancellationReasons = (props) => {
    const {
        match,
        getCR,
        reasons,
        createCR,
        updateCR,
        loading,
        deleteCR} = props
    const [addNewCRModal, setAddNewCRModal] = useState(false)
    const [editCR, setEditCR] = useState(false)
    const [updateId, setUpdateId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [formData, setFormData] = useState({desc: '', type: ''})
    const [searchData, setSearchData] = useState('')
    const inputEl = useRef(null);

    useEffect(()=> {
        getCR(true);
    },[])


    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {desc, type} = formData

    const opnAddNewCRModal = (e) => {
        e.preventDefault();
        setAddNewCRModal(true)
    }


    const opnAddNewCREditModal = (reason_id) => {
        reasons.map(reason => {
            if(reason._id === reason_id){
                setFormData(
                    {
                        desc: reason.reason, type: reason.type
                    })
                setUpdateId(reason._id)
            }
        })
        setAddNewCRModal(true)
        setEditCR(true)
    }

    const onAddUpdateCRModalClose = () => {
        setFormData(
            {
                desc: '', type: ''
            })
        setUpdateId(null)
        setAddNewCRModal(false);
        setEditCR(false);
    }

    const onDelete = (id) => {
        inputEl.current.open();
        setDeleteId(id)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        onAddUpdateCRModalClose()
        !editCR?  await createCR(desc, type) : await updateCR(updateId,  desc, type)


    };

    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearchData(e.target.value );
    };


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Cancellation Reasons"} match={match} />

            {!loading &&
            <RctCollapsibleCard heading="Cancellation Reasons" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    <IconButton mini="true" className="search-icon-btn">
                        <i className="zmdi zmdi-search"></i>
                    </IconButton>
                    <MobileSearchForm
                        // isOpen={isMobileSearchFormVisible}
                        // onClose={() => this.setState({ isMobileSearchFormVisible: false })}
                    />
                </li>
                <div className="float-right">
                    <a href="#" onClick={(e) => opnAddNewCRModal(e)} color="primary" className="caret btn-sm mr-10">Create New Reason <i className="zmdi zmdi-plus"></i></a>
                </div>
                {!loading && reasons.length > 0 &&
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Description</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {reasons.map((reason, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{reason.reason}</TableCell>
                                        <TableCell className="text-capitalize">{reason.type}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewCREditModal(reason._id)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(reason._id)}><i className="ti-trash"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
                }
                {!loading && reasons.length < 1 && <EmptyData />}
            </RctCollapsibleCard>}


            <Modal isOpen={addNewCRModal} toggle={() => onAddUpdateCRModalClose()}>
                <ModalHeader toggle={() => onAddUpdateCRModalClose()}>
                    {editCR ? 'Update Reason': 'Create Reason'}
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="lastName">Reason</Label>
                            <Input type="textarea"  name="desc" value={desc} onChange={onChange}  required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleSelect">Vehicles</Label>
                            <Input type="select" name="type" onChange={onChange} value={type} required={true}>
                                <option value="">Select type</option>
                                <option value="driver">Driver</option>
                                <option value="rider">Passenger</option>
                                <option value="both">Both</option>

                            </Input>
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
                message="This will delete reason permanently."
                onConfirm={() => {
                    deleteCR(deleteId, reasons);
                    inputEl.current.close();
                }}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getCR: (spinner) => dispatch(getCR(spinner)),
        createCR: (reason, type) => dispatch(createCR(reason, type)),
        updateCR: (id, reason, type) => dispatch(updateCR(id, reason, type)),
        deleteCR: (id, reasons) => dispatch(deleteCR(id, reasons)),
    };
}

const mapStateToProps = state => ({
    reasons: state.cancellationReasons.reasons,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps) (CancellationReasons);
