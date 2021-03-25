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
import Spinner from "../../spinner/Spinner";
import IconButton from "@material-ui/core/IconButton";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import {CSVLink} from "react-csv";
import Upload from "./components/upload";
import {createArea, deleteArea, getAreas, updateArea} from "Actions/areaAction";
import localGovt from "Assets/data/localGovt/localGovt";

const  Areas = ({match, getAreas, areas, createArea, updateArea, loading, deleteArea}) => {
    const [addNewUserModal, setAddNewUserModal] = useState(false)
    const [editUser, setEditUser] = useState(false)
    const [updateId, setUpdateId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [formData, setFormData] = useState({localGovtName: '', areaName: ''})
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
        getAreas();
    },[])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {localGovtName, areaName} = formData

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
        areas.map(area => {
            if(area.id === id){
                setFormData(
                    {
                        localGovtName: area.localGovtName,
                        areaName: area.areaName,
                    })
                setUpdateId(area.id)
            }
        })
        setAddNewUserModal(true)
        setEditUser(true)
    }

    const onAddUpdateUserModalClose = () => {
        setFormData(
            {
                localGovtName: '', areaName: ''
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
        !editUser?  await createArea(localGovtName, areaName) : await updateArea(updateId, localGovtName, areaName)


    };

    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearchData(e.target.value );
    };

    useEffect(()=> {
        if(searchData && areas){
            setCurrentPage(1)
            const search = areas.filter(area => {
                return (area.areaName.toLowerCase().includes(searchData.toLowerCase()) || area.localGovtName.toLowerCase().includes(searchData.toLowerCase()))
            });
            setPosts(search)
        } else if(searchData === "") {
            setPosts(areas.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
        }
    },[searchData]);

    useEffect(()=> {
        if(areas) {
            setPosts(areas.sort((a, b) => parseFloat(b.id) - parseFloat(a.id)))
            let result = areas.map(area=> {
                return {
                    localGovtName: area['localGovtName'],
                    areaName: area['areaName'],
                }
            })
            setExcelExport(result)
        }
    },[areas])

    const sampleData = [
        {
            localGovtName: 'Ibeju-Lekki',
            areaName: 'Onasa'
        }
    ]

    const removeDeleteId = ()=> {
        setDeleteId(null)
    }

    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Areas"} match={match} />
            {loading && <Spinner />}
            {!loading &&
            <RctCollapsibleCard heading="Areas" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    <div className="search-wrapper">
                        <Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
                    </div>
                    <IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>
                        <i className="zmdi zmdi-search"></i>
                    </IconButton>
                    <MobileSearchForm
                        // isOpen={isMobileSearchFormVisible}
                        // onClose={() => this.setState({ isMobileSearchFormVisible: false })}
                    />
                </li>
                <div className="float-right">
                    <CSVLink
                        // headers={headers}
                        data={excelExport}
                        filename={"areas.csv"}
                        className="btn-sm btn-outline-default mr-10 bg-primary text-white"
                        target="_blank"
                    >
                        <i className="zmdi zmdi-download mr-2"></i>
                        Export to Excel
                    </CSVLink>
                    <CSVLink
                        // headers={headers}
                        data={sampleData}
                        filename={"sampleAreas.csv"}
                        className="btn-sm btn-outline-default mr-10 bg-success text-white"
                        target="_blank"
                    >
                        <i className="zmdi zmdi-download mr-2"></i>

                        Sample excel to upload
                    </CSVLink>
                    <a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>
                    <a href="#" onClick={(e) => opnAddNewUserModal(e)} color="primary" className="caret btn-sm mr-10">Create New Area <i className="zmdi zmdi-plus"></i></a>
                </div>
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                <TableCell>Local Govt Name</TableCell>
                                <TableCell>Area Name</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {posts && currentPosts.map((area, key) => (
                                    <TableRow hover key={key}>
                                        <TableCell>{area.localGovtName}</TableCell>
                                        <TableCell>{area.areaName}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(area.id)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(area.id)}><i className="ti-close"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                    {posts.length < 1 && <div className="d-flex align-items-center justify-content-center w-100 p-5">No Area Found</div>}
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
                    {editUser ? 'Update Area': 'Create New Area'}
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                                <FormGroup>
                                    <Label>Local Govt Name</Label>
                                    <Input type="select" name="localGovtName" onChange={onChange} value={localGovtName} required>
                                        <option value="">select</option>
                                        {localGovt.map(local=> (
                                            <option key={local} value={local}>{local}</option>
                                        ))}
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Area Name</Label>
                                    <Input type="text"  name="areaName" value={areaName} onChange={onChange}  required />
                                </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" variant="contained" className="text-white btn-success">Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            <Modal isOpen={addNewUserModal1} toggle={() => onAddUpdateUserModalClose1()}>
                <ModalHeader toggle={() => onAddUpdateUserModalClose1()}>
                    Upload Area
                </ModalHeader>
                <ModalBody>
                    <Upload oncloseModal={onAddUpdateUserModalClose1} />
                </ModalBody>
            </Modal>
            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure Want To Delete?"
                message="This will delete area permanently."
                onConfirm={() => {
                    deleteArea(deleteId);
                    inputEl.current.close();
                }}
                removeDeleteId={removeDeleteId}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getAreas: () => dispatch(getAreas()),
        createArea: (localGovtName, areaName) => dispatch(createArea(localGovtName, areaName)),
        updateArea: (id, localGovtName, areaName) => dispatch(updateArea(id, localGovtName, areaName)),
        deleteArea: (id) => dispatch( deleteArea(id)),
    };
}

const mapStateToProps = state => ({
    areas: state.areas.areas,
    loading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (Areas);
