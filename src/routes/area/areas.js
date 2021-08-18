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
import MobileSearchForm from "Components/Header/MobileSearchForm";
import Upload from "./components/upload";
import {createArea, deleteArea, getAreas, getAreasCount, updateArea} from "Actions/areaAction";
import localGovt from "Assets/data/localGovt/localGovt";
import EmptyData from "Components/EmptyData/EmptyData";
import {CSVLink} from "react-csv";
// import CSVLink from "react-csv/src/components/Link";

const  Areas = ({match, getAreas, areas, createArea, updateArea, loading, deleteArea, getAreaCount, areaCount}) => {
    const [addNewAreaModal, setAddNewAreaModal] = useState(false)
    const [editArea, setEditArea] = useState(false)
    const [updateId, setUpdateId] = useState(null)
    const [deleteId, setDeleteId] = useState(null)
    const [formData, setFormData] = useState({localGovtName: '', areaName: ''})
    const [searchData, setSearchData] = useState('')
    const inputEl = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [excelExport, setExcelExport] = useState([])
    const [addNewAreaModal1, setAddNewAreaModal1] = useState(false)

    useEffect(()=> {
        getAreas(1, true);
        getAreaCount()
    },[])

    const paginate = pageNumber => {
        setCurrentPage(pageNumber);
        getAreas(pageNumber)
        window.scrollTo(0, 0);
    };

    const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const {localGovtName, areaName} = formData

    const opnAddNewAreaModal = (e) => {
        e.preventDefault();
        setAddNewAreaModal(true)
    }

  const  opnAddUploadAreaModal = (e) => {
      e.preventDefault();
      setAddNewAreaModal1(true)
  }


    const onAddUpdateAreaModalClose1 = () => {
        setAddNewAreaModal1(false);
    }

    const opnAddNewAreaEditModal = (id) => {
        areas.map(area => {
            if(area.id === id){
                setFormData(
                    {
                        // localGovtName: area.local_govt_name,
                        areaName: area.area_name,
                    })
                setUpdateId(area.id)
            }
        })
        setAddNewAreaModal(true)
        setEditArea(true)
    }

    const onAddUpdateAreaModalClose = () => {
        setFormData(
            {
                localGovtName: '', areaName: ''
            })
        setUpdateId(null)
        setAddNewAreaModal(false);
        setEditArea(false);
    }

    const onDelete = (id) => {
        inputEl.current.open();
        setDeleteId(id)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        onAddUpdateAreaModalClose()
        !editArea?  await createArea( areaName) : await updateArea(updateId, areaName)


    };

    const onChangeSearch = (e) =>{
        e.preventDefault();
        setSearchData(e.target.value );
    };


    useEffect(()=> {
        if(areas) {
            let result = areas.map(area=> {
                return {
                    areaName: area['area_name'],
                }
            })
            setExcelExport(result)
        }
    },[areas])

    const sampleData = [
        {
            area_name: 'Lekki Phase 1'
        }
    ]


    return (
        <div className="table-wrapper">
            <PageTitleBar title={"Areas"} match={match} />
            {!loading &&
            <RctCollapsibleCard heading="Areas" fullBlock>
                <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
                    {!loading && areas.length > 0 &&
                    <div className="search-wrapper">
                        <Input type="search" className="search-input-lg" name="searchData" value={searchData} onChange={onChangeSearch} placeholder="Search.." />
                    </div>}
                    {/*<IconButton mini="true" className="search-icon-btn" onClick={() => this.openMobileSearchForm()}>*/}
                    {/*    <i className="zmdi zmdi-search"></i>*/}
                    {/*</IconButton>*/}
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
                    <a href="#" onClick={(e) => opnAddUploadAreaModal(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>
                    <a href="#" onClick={(e) => opnAddNewAreaModal(e)} color="primary" className="caret btn-sm mr-10">Create New Area <i className="zmdi zmdi-plus"></i></a>
                </div>
                {areas.length > 0 &&
                <div className="table-responsive" style={{minHeight: "50vh"}}>
                    <Table>
                        <TableHead>
                            <TableRow hover>
                                {/*<TableCell>Local Govt Name</TableCell>*/}
                                <TableCell>Area Name</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <Fragment>
                                {areas.map((area, key) => (
                                    <TableRow hover key={key}>
                                        {/*<TableCell>{area.local_govt_name}</TableCell>*/}
                                        <TableCell>{area.area_name}</TableCell>
                                        <TableCell>
                                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewAreaEditModal(area.id)}><i className="ti-pencil"></i></button>
                                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(area.id)}><i className="ti-trash"></i></button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </Fragment>
                        </TableBody>
                    </Table>
                </div>}
                {areas.length < 1 && <EmptyData />}

                {!loading && areas.length > 0 &&
                <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                    <Pagination
                        activePage={currentPage}
                        itemClass="page-item"
                        linkClass="page-link"
                        itemsCountPerPage={20}
                        totalItemsCount={areaCount}
                        onChange={paginate}
                    />
                </div>}
            </RctCollapsibleCard>
            }
            <Modal isOpen={addNewAreaModal} toggle={() => onAddUpdateAreaModalClose()}>
                <ModalHeader toggle={() => onAddUpdateAreaModalClose()}>
                    {editArea ? 'Update Area': 'Create New Area'}
                </ModalHeader>
                <Form onSubmit={onSubmit}>
                    <ModalBody>
                                {/*<FormGroup>*/}
                                {/*    <Label>Local Govt Name</Label>*/}
                                {/*    <Input type="select" name="localGovtName" onChange={onChange} value={localGovtName} required>*/}
                                {/*        <option value="">select</option>*/}
                                {/*        {localGovt.map(local=> (*/}
                                {/*            <option key={local} value={local}>{local}</option>*/}
                                {/*        ))}*/}
                                {/*    </Input>*/}
                                {/*</FormGroup>*/}
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
            <Modal isOpen={addNewAreaModal1} toggle={() => onAddUpdateAreaModalClose1()}>
                <ModalHeader toggle={() => onAddUpdateAreaModalClose1()}>
                    Upload Area
                </ModalHeader>
                <ModalBody>
                    <Upload oncloseModal={onAddUpdateAreaModalClose1} />
                </ModalBody>
            </Modal>
            <DeleteConfirmationDialog
                ref={inputEl}
                title="Are You Sure Want To Delete?"
                message="This will delete area permanently."
                onConfirm={() => {
                    deleteArea(deleteId, areas);
                    inputEl.current.close();
                }}
            />
        </div>
    );

}

function mapDispatchToProps(dispatch) {
    return {
        getAreas: (page_no, spinner) => dispatch(getAreas(page_no, spinner)),
        getAreaCount: () => dispatch(getAreasCount()),
        createArea: (area_name) => dispatch(createArea( area_name)),
        updateArea: (id, area_name) => dispatch(updateArea(id, area_name)),
        deleteArea: (id, areas) => dispatch( deleteArea(id, areas)),
    };
}

const mapStateToProps = state => ({
    areas: state.areas.areas,
    areaCount: state.areas.areaCount,
    loading: state.loading.loading,
});

export default connect( mapStateToProps, mapDispatchToProps) (Areas);
