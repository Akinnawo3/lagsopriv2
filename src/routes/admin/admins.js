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
import {createAdmin, deleteAdmin, getAdmins, updateAdmin} from "Actions/adminAction";
import {connect} from "react-redux";
import Spinner from "../../spinner/Spinner";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import {CSVLink} from "react-csv";
import Upload from "./components/upload";

const  Admins = ({match, getAdmins, admins, createAdmin, updateAdmin, loading, deleteAdmin}) => {
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [updateId, setUpdateId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [formData, setFormData] = useState({firstName: '', lastName: '', email: '', phoneNumber: ''})
    const [searchData, setSearchData] = useState('')
    const inputEl = useRef(null);
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
    const [excelExport, setExcelExport] = useState([])
    const [addNewUserModal1, setAddNewUserModal1] = useState(false)

    useEffect(()=> {
        getAdmins();
    },[])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {firstName, lastName, email, phoneNumber} = formData

    const opnAddNewUserModal = (e) => {
        e.preventDefault();
        setAddNewUserModal(true)
    }

    const opnAddNewUserModal1 = (e) => {
        e.preventDefault();
        setAddNewUserModal1(true)
    }

    const onAddUpdateUserModalClose1 = () => {
        setAddNewUserModal1(false);
    }

    const opnAddNewUserEditModal = (id) => {
        admins.map(admin => {
            if(admin.id === id){
                setFormData(
                    {
                        firstName: admin.firstName,
                        lastName: admin.lastName,
                        email: admin.email,
                        phoneNumber: admin.phoneNumber
                    })
                setUpdateId(admin.id)
            }
        })
        setAddNewUserModal(true)
        setEditUser(true)
    }

    const onAddUpdateUserModalClose = () => {
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
        onAddUpdateUserModalClose()
        !editUser?  await createAdmin("password", firstName, lastName, email, phoneNumber) : await updateAdmin(updateId, firstName, lastName, email, phoneNumber)


    };

    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearchData(e.target.value );
    };

    useEffect(()=> {
        if(searchData && admins){
            setCurrentPage(1)
            const search = admins.filter(admin => {
                return (admin.firstName.toLowerCase().includes(searchData.toLowerCase()) || admin.lastName.toLowerCase().includes(searchData.toLowerCase()))
            });
            setPosts(search)
        } else if(searchData === "") {
            setPosts(admins.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
        }
    },[searchData]);

    useEffect(()=> {
        if(admins) {
            setPosts(admins.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
            let result = admins.map(admin=> {
                return {
                    firstName: admin['firstName'],
                    lastName: admin['lastName'],
                    phoneNumber: admin['phoneNumber'],
                    email: admin['email']
                }
            })
            setExcelExport(result)
        }
    },[admins])

    const sampleData = [
        {
            first: 'John',
            last: 'Deo',
            email: 'johndeo@gmail.com',
            phone: "12345678989"
        }
    ]

    const removeDeleteId = ()=> {
        setDeleteId(null)
    }

    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Admins"} match={match} />
            {loading && <Spinner />}
            {!loading &&
            <RctCollapsibleCard heading="Admins" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    <div className="search-wrapper">
                        <Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
                    </div>
                    <IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
                        <i className="zmdi zmdi-search"></i>
                    </IconButton>
                    <MobileSearchForm
                        // isOpen={isMobileSearchFormVisible}
                        onClose={() => this.setState({ isMobileSearchFormVisible: false })}
                    />
                </li>
                <div className="float-right">
                    <CSVLink
                        // headers={headers}
                        data={excelExport}
                        filename={"admins.csv"}
                        className="btn-sm btn-outline-default mr-10 bg-primary text-white"
                        target="_blank"
                    >
                        <i className="zmdi zmdi-download mr-2"></i>
                        Export to Excel
                    </CSVLink>
                    <CSVLink
                        // headers={headers}
                        data={sampleData}
                        filename={"sampleAdmins.csv"}
                        className="btn-sm btn-outline-default mr-10 bg-success text-white"
                        target="_blank"
                    >
                        <i className="zmdi zmdi-download mr-2"></i>

                        Sample excel to upload
                    </CSVLink>
                    <a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>
                    <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New Admin <i className="zmdi zmdi-plus"></i></a>
                </div>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>Phone No</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {posts && currentPosts.map((admin, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{admin.firstName}</TableCell>
                                        <TableCell>{admin.lastName}</TableCell>
                                        <TableCell>{admin.phoneNumber}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(admin.id)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(admin.id)}><i className="ti-close"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                    {posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Admin Found</div>}
                </div>
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    {posts.length > 0 &&
                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={postsPerPage}
                        totalItemsCount={posts.length}
                        onChange={paginate}
                    />}
                </div>
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
                                    <Input type="text"  name="firstName" value={firstName} onChange={onChange}   required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="lastName">Last Name</Label>
                                    <Input type="text"  name="lastName" value={lastName} onChange={onChange}  required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="phoneNumber">Phone no</Label>
                                    <Input type="text"  name="phoneNumber" value={phoneNumber} onChange={onChange}  required />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">Email</Label>
                                    <Input type="email" name="email" value={email} onChange={onChange} required />
                                </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
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
                title="Are You Sure Want To Delete?"
                message="This will delete user permanently."
                onConfirm={() => {
                    deleteAdmin(deleteId);
                    inputEl.current.close();
                }}
                removeDeleteId={removeDeleteId}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getAdmins: () => dispatch(getAdmins()),
        createAdmin: (password, firstName, lastName, email, phoneNumber) => dispatch(createAdmin(password, firstName, lastName, email, phoneNumber)),
        updateAdmin: (id, firstName, lastName, email, phoneNumber) => dispatch(updateAdmin(id, firstName, lastName, email, phoneNumber)),
        deleteAdmin: (id) => dispatch( deleteAdmin(id)),
    };
}

const mapStateToProps = state => ({
    admins: state.admins.admins,
    loading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (Admins);
