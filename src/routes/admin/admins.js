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
import {createAdmin, deleteAdmin, getAdminCount, getAdmins, searchAdmins, updateAdmin} from "Actions/adminAction";
import {connect} from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import {CSVLink} from "react-csv";
import Upload from "./components/upload";
import EmptyData from "Components/EmptyData/EmptyData";
import SearchComponent from "Components/SearchComponent/SearchComponent";
export let onAddUpdateUserModalClose;
export let changeCurrentPage;

const  Admins = ({match, getAdmins, admins, updateAdmin, loading, deleteAdmin, adminCount, getAdminCount, createAdmin, loadingStatus, searchAdmins
}) => {
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [updateId, setUpdateId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [formData, setFormData] = useState({first_name: '', last_name: '', email: '', phone_number: ''})
    const inputEl = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [excelExport, setExcelExport] = useState([])
    const [addNewUserModal1, setAddNewUserModal1] = useState(false)

    useEffect(()=> {
        getAdmins(1, true);
        getAdminCount();
    },[])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getAdmins(pageNumber);
        window.scrollTo(0, 0);
    };

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {first_name, last_name, email, phone_number} = formData

    const opnAddNewUserModal = (e) => {
        e.preventDefault();
        setAddNewUserModal(true)
    }

    const onAddUpdateUserModalClose1 = () => {
        setAddNewUserModal1(false);
    }

    const opnAddNewUserEditModal = (id) => {
        admins.map(admin => {
            if(admin.auth_id === id){
                setFormData(
                    {
                        first_name: admin.first_name,
                        last_name: admin.last_name,
                        email: admin.email,
                        phone_number: admin.phone_number
                    })
                setUpdateId(admin.auth_id)
            }
        })
        setAddNewUserModal(true)
        setEditUser(true)
    }

     onAddUpdateUserModalClose = () => {
        setFormData(
            {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: ""
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
        !editUser?  await createAdmin(first_name, last_name, email, phone_number) : await updateAdmin(updateId, first_name, last_name, email, phone_number)


    };

    useEffect(()=> {
        if(admins) {
            let result = admins.map(admin=> {
                return {
                    firstName: admin['first_name'],
                    lastName: admin['last_name'],
                    phoneNumber: admin['phone_number'],
                    email: admin['email']
                }
            })
            setExcelExport(result)
        }
    },[admins])




    changeCurrentPage = () => {
        setCurrentPage(1)
    }

    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Admins"} match={match} />
            {!loading &&
            <RctCollapsibleCard heading="Admins" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    <SearchComponent getPreviousData={getAdmins} getSearchedData={searchAdmins} setCurrentPage={setCurrentPage} getCount={getAdminCount} />
                    <IconButton mini="true" className="search-icon-btn">
                        <i className="zmdi zmdi-search"></i>
                    </IconButton>
                    <MobileSearchForm
                        // isOpen={isMobileSearchFormVisible}
                        // onClose={() => this.setState({ isMobileSearchFormVisible: false })}
                    />
                </li>
                <div className="float-right">
                    {!loading && admins.length > 0 && <CSVLink
                        data={excelExport}
                        filename={"admins.csv"}
                        className="btn-sm btn-outline-default mr-10 bg-primary text-white"
                        target="_blank"
                    >
                        <i className="zmdi zmdi-download mr-2"></i>
                        Export to Excel
                    </CSVLink>}
                    {/*<CSVLink*/}
                    {/*    // headers={headers}*/}
                    {/*    data={sampleData}*/}
                    {/*    filename={"sampleAdmins.csv"}*/}
                    {/*    className="btn-sm btn-outline-default mr-10 bg-success text-white"*/}
                    {/*    target="_blank"*/}
                    {/*>*/}
                    {/*    <i className="zmdi zmdi-download mr-2"></i>*/}

                    {/*    Sample excel to upload*/}
                    {/*</CSVLink>*/}
                    {/*<a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>*/}
                    <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New Admin <i className="zmdi zmdi-plus"></i></a>
                </div>
                {!loading && admins.length > 0 && <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Phone No</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {admins.map((admin, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{admin.first_name}</TableCell>
                                        <TableCell>{admin.last_name}</TableCell>
                                        <TableCell>{admin.phone_number}</TableCell>
                                        <TableCell>{admin.email}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(admin.auth_id)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(admin.auth_id)}><i className="ti-trash"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>}
                {!loading && admins.length < 1 && <EmptyData />}

                {!loading && admins.length > 0 &&
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={20}
                        totalItemsCount={adminCount}
                        onChange={paginate}
                    />
                </div>}
            </RctCollapsibleCard>
            }
            <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
                <ModalHeader toggle={() => onAddUpdateUserModalClose()}>
                    {editUser ? 'Update Admin': 'Create New Admin'}
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                                <FormGroup>
                                    <Label for="firstName">First Name</Label>
                                    <Input type="text"  name="first_name" value={first_name} onChange={onChange}   required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input type="text"  name="last_name" value={last_name} onChange={onChange}  required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneNumber">Phone no</Label>
                                    <Input type="text"  name="phone_number" value={phone_number} onChange={onChange}  required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" value={email} onChange={onChange} required />
                                </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button disabled={loadingStatus} type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            <Modal isOpen={addNewUserModal1} toggle={() => onAddUpdateUserModalClose1()}>
                <ModalHeader toggle={() => onAddUpdateUserModalClose1()}>
                    Upload Admin
                </ModalHeader>
                <ModalBody>
                    <Upload oncloseModal={onAddUpdateUserModalClose1} />
                </ModalBody>
            </Modal>
            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure You Want To Delete?'"
                message="This will delete user permanently."
                onConfirm={() => {
                    deleteAdmin(deleteId, admins);
                    inputEl.current.close();
                }}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getAdmins: (page_no, spinner) => dispatch(getAdmins(page_no, spinner)),
        createAdmin: (first_name, last_name, email, phone_number) => dispatch(createAdmin(first_name, last_name, email, phone_number)),
        updateAdmin: (auth_id, first_name, last_name, email, phone_number) => dispatch(updateAdmin(auth_id, first_name, last_name, email, phone_number)),

        getAdminCount: () => dispatch(getAdminCount()),
        deleteAdmin: (id, adminsData) => dispatch( deleteAdmin(id, adminsData)),
        searchAdmins: (searchData) => dispatch(searchAdmins(searchData)),
    };
}

const mapStateToProps = state => ({
    admins: state.admins.admins,
    adminCount: state.admins.adminCount,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus,
});

export default connect( mapStateToProps, mapDispatchToProps) (Admins);
