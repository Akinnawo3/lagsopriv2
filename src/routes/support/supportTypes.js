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
import Pagination from "react-js-pagination";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import {
    createTicketType,
    deleteTicketType,
    getTicketTypeCount,
    getTicketTypes,
    updateTicketType
} from "Actions/ticketTypeAction";
import EmptyData from "Components/EmptyData/EmptyData";

const  SupportType = (props) => {
    const {
        getTicketTypes,
        ticketTypes,
        createTicketType,
        updateTicketType,
        loading,
        deleteTicketType,
        getTicketTypeCount,
        ticketTypesCount
    } = props
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [updateId, setUpdateId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [formData, setFormData] = useState({name: '', typeUser: '', issues: '', description: ''})
    const [searchData, setSearchData] = useState('')
    const inputEl = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(()=> {
        getTicketTypes(1, true);
        getTicketTypeCount();
    },[])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getTicketTypes(pageNumber)
        window.scrollTo(0, 0);
    };

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {name, typeUser, issues, description} = formData

    const opnAddNewUserModal = (e) => {
        e.preventDefault();
        setAddNewUserModal(true)
    }


    const opnAddNewUserEditModal = (id) => {
        ticketTypes.map(ticketType => {
            if(ticketType.support_id === id){
                setFormData(
                    {
                        name: ticketType.title,
                        typeUser: ticketType.user_type,
                        issues: ticketType.issues,
                        description: ticketType.description
                    })
                setUpdateId(ticketType.support_id)
            }
        })
        setAddNewUserModal(true)
        setEditUser(true)
    }

    const onAddUpdateUserModalClose = () => {
        setFormData(
            {
                name: '',
                typeUser: '',
                issues: '',
                description: ''
            })
        setUpdateId(null)
        setAddNewUserModal(false);
        setEditUser(false);
    }

    const onDelete = (id) => {
        inputEl.current.open();
        setDeleteId(id)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        onAddUpdateUserModalClose()
        !editUser?  await createTicketType(name, typeUser, issues, description) : await updateTicketType(updateId, name, typeUser, issues, description)


    };

    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearchData(e.target.value );
    };
    return (
        <div className="table-wrapper">
            {!loading &&
            <RctCollapsibleCard heading="Ticket Types" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    {ticketTypes.length > 0 &&
                    <div className="search-wrapper">
                        <Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
                    </div>}
                    <IconButton mini="true" className="search-icon-btn">
                        <i className="zmdi zmdi-search"></i>
                    </IconButton>
                </li>
                <div className="float-right">
                    <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New TicketType <i className="zmdi zmdi-plus"></i></a>
                </div>
                {ticketTypes.length > 0 &&
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Title</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Issues</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {ticketTypes.map((ticketType, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{ticketType.title}</TableCell>
                                        <TableCell>{ticketType.user_type}</TableCell>
                                        <TableCell>{ticketType.issues}</TableCell>
                                        <TableCell>{ticketType.description}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(ticketType.support_id)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(ticketType.support_id)}><i className="ti-trash"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>
                }
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    {ticketTypes.length > 0 &&
                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={20}
                        totalItemsCount={ticketTypesCount}
                        onChange={paginate}
                    />}
                    {ticketTypes.length < 1 && <EmptyData />}
                </div>
            </RctCollapsibleCard>
            }

            <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
                <ModalHeader toggle={() => onAddUpdateUserModalClose()}>
                    {editUser ? 'Update ticket Type': 'Create New ticket Type'}
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                        <FormGroup>
                            <Label for="firstName">Name</Label>
                            <Input type="text"  name="name" value={name} onChange={onChange}   required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">type</Label>
                            <Input type="select"  name="typeUser" value={typeUser} onChange={onChange}   required>
                                <option value=''>Select</option>
                                <option value='driver'>Driver</option>
                                <option value='rider'>Rider</option>
                                <option value='both'>Both</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">Issues (Add issues separated by coma)</Label>
                            <Input type="textarea"  name="issues" value={issues} onChange={onChange}   required/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="firstName">Description</Label>
                            <Input type="textarea"  name="description" value={description} onChange={onChange}   required/>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure You Want To Delete?"
                message="This will delete ticket permanently."
                onConfirm={() => {
                    deleteTicketType(deleteId);
                    inputEl.current.close();
                }}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getTicketTypes: (page_no, spinner) => dispatch(getTicketTypes(page_no, spinner)),
        getTicketTypeCount: () => dispatch(getTicketTypeCount()),
        createTicketType: (name, typeUser, issues, description) => dispatch(createTicketType(name, typeUser, issues, description)),
        updateTicketType: (id, name, typeUser, issues, description) => dispatch(updateTicketType(id, name, typeUser, issues, description)),
        deleteTicketType: (id) => dispatch(deleteTicketType(id)),
    };
}

const mapStateToProps = state => ({
    ticketTypes: state.ticketTypes.ticketTypes,
    ticketTypesCount: state.ticketTypes.ticketTypesCount,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps) (SupportType);
