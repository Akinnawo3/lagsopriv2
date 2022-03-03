import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Form, FormGroup, Label, Input} from "reactstrap";
import Button from "@material-ui/core/Button";
import Pagination from "react-js-pagination";
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import {connect} from "react-redux";
import MobileSearchForm from "Components/Header/MobileSearchForm";
import Upload from "./components/upload";
import {createArea, deleteArea, getAreas, getAreasCount, searchAreas, updateArea} from "Actions/areaAction";
import EmptyData from "Components/EmptyData/EmptyData";
import {CSVLink} from "react-csv";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {verifyUserPermssion} from "../../container/DefaultLayout";
import {lgaList} from "./lgaList";

const Areas = ({match, getAreas, areas, createArea, updateArea, loading, deleteArea, getAreaCount, areaCount, searchArea}) => {
  const [addNewAreaModal, setAddNewAreaModal] = useState(false);
  const [editArea, setEditArea] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [formData, setFormData] = useState({lga: "", areaName: "", lon: "", lat: "", oldArea: ""});
  const inputEl = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [excelExport, setExcelExport] = useState([]);
  const [addNewAreaModal1, setAddNewAreaModal1] = useState(false);

  useEffect(() => {
    getAreas(1, true);
    getAreaCount();
  }, []);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    getAreas(pageNumber);
    window.scrollTo(0, 0);
  };

  const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const {lga, areaName, lat, lon, oldArea} = formData;

  const opnAddNewAreaModal = (e) => {
    e.preventDefault();
    setAddNewAreaModal(true);
  };

  const opnAddUploadAreaModal = (e) => {
    e.preventDefault();
    setAddNewAreaModal1(true);
  };

  const onAddUpdateAreaModalClose1 = () => {
    setAddNewAreaModal1(false);
  };

  const opnAddNewAreaEditModal = (area_id) => {
    areas.map((area) => {
      if (area.area_id === area_id) {
        setFormData({
          lga: area?.lga,
          areaName: area?.area_name,
          lon: area?.location?.coordinates ? area?.location?.coordinates[0] : "",
          lat: area?.location?.coordinates ? area?.location?.coordinates[1] : "",
          oldArea: area.area_name,
        });
        setUpdateId(area.area_id);
      }
    });
    setAddNewAreaModal(true);
    setEditArea(true);
  };

  const onAddUpdateAreaModalClose = () => {
    setFormData({
      lga: "",
      areaName: "",
      lat: "",
      lon: "",
    });
    setUpdateId(null);
    setAddNewAreaModal(false);
    setEditArea(false);
  };

  const onDelete = (area_id) => {
    inputEl.current.open();
    setDeleteId(area_id);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    onAddUpdateAreaModalClose();
    !editArea ? await createArea(areaName, lga, lat.toString(), lon.toString()) : await updateArea(updateId, areaName, lga, lat.toString(), lon.toString(), oldArea);
  };

  useEffect(() => {
    if (areas) {
      let result = areas.map((area) => {
        return {
          areaName: area?.area_name,
          lga: area?.lga,
        };
      });
      setExcelExport(result);
    }
  }, [areas]);

  const sampleData = [
    {
      area_name: "Lekki Phase 1",
      lga: "oti-osa",
      lon: 3.374413,
      lat: 6.518576,
    },
    {
      area_name: "Lekki Phase 5",
      lga: "oti-osa",
      lon: 3.372213,
      lat: 6.218576,
    },
    {
      area_name: "Lekki Phase 3",
      lga: "oti-osa",
      lon: 3.37432,
      lat: 6.518576,
    },
    {
      area_name: "Lekki Phase 4",
      lga: "oti-osa",
      lon: 3.372213,
      lat: 6.218576,
    },
  ];

  const getPreviousData = () => {
    getAreas(currentPage);
  };

  const getSearchData = (searchData) => {
    searchArea(searchData);
  };

  const handleCount = () => {
    getAreaCount();
  };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Areas"} match={match} />
      {!loading && (
        <RctCollapsibleCard heading="Areas" fullBlock>
          <>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              <div className="search-wrapper">
                <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} placeHolder={"Area name"} />
              </div>
            </li>
            <div className="float-right">
              {/* <CSVLink
                            // headers={headers}
                            data={excelExport}
                            filename={"areas.csv"}
                            className="btn-sm btn-outline-default mr-10 bg-primary text-white"
                            target="_blank"
                        >
                            <i className="zmdi zmdi-download mr-2"></i>
                            Export to Excel
                        </CSVLink> */}
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
              <a href="#" onClick={(e) => opnAddUploadAreaModal(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white">
                <i className="zmdi zmdi-upload mr-2"></i>Upload
              </a>
              <a href="#" onClick={(e) => verifyUserPermssion("create_setup", () => opnAddNewAreaModal(e))} color="primary" className="caret btn-sm mr-10">
                <button className="ml-2 btn btn-outline-primary btn-sm rounded">Add New</button>
              </a>
            </div>
            {areas.length > 0 && (
              <div className="table-responsive" style={{minHeight: "50vh"}}>
                <Table>
                  <TableHead>
                    <TableRow hover>
                      <TableCell>Area Name</TableCell>
                      <TableCell>LGA</TableCell>
                      <TableCell>Coordinate </TableCell>
                      <TableCell>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <Fragment>
                      {areas.map((area, key) => (
                        <TableRow hover key={key}>
                          <TableCell>{area.area_name}</TableCell>
                          <TableCell>{area.lga}</TableCell>
                          <TableCell>{area?.location?.coordinates && `Lon:${area?.location?.coordinates[0]} - Lat:${area?.location?.coordinates[1]}`}</TableCell>
                          <TableCell>
                            <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewAreaEditModal(area.area_id)}>
                              <i className="ti-pencil"></i>
                            </button>
                            <button type="button" className="rct-link-btn ml-lg-3 text-danger" onClick={() => onDelete(area.area_id)}>
                              <i className="ti-trash"></i>
                            </button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </Fragment>
                  </TableBody>
                </Table>
              </div>
            )}
            {areas.length < 1 && <EmptyData />}

            {!loading && areas.length > 0 && (
              <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={areaCount} onChange={paginate} />
              </div>
            )}
          </>
          //{" "}
        </RctCollapsibleCard>
      )}
      <Modal isOpen={addNewAreaModal} toggle={() => onAddUpdateAreaModalClose()} size="sm">
        <ModalHeader toggle={() => onAddUpdateAreaModalClose()}>{editArea ? "Update Area" : "Create New Area"}</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label>Area Name</Label>
              <Input type="text" name="areaName" value={areaName} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label>LGA</Label>
              <Input type="select" name="lga" value={lga} onChange={onChange} required>
                <option value="" hidden>
                  --Select LGA --
                </option>
                {lgaList.map((item) => (
                  <option value={item.value.toLowerCase()}>{item.label}</option>
                ))}
              </Input>
            </FormGroup>
            <div className="d-flex ">
              <FormGroup className="mr-2">
                <Label>LON</Label>
                <Input type="number" name="lon" step="any" value={lon} onChange={onChange} required />
              </FormGroup>
              <FormGroup className="ml-2">
                <Label>LAT</Label>
                <Input type="number" min={-90} max={90} step="any" name="lat" value={lat} onChange={onChange} required />
              </FormGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-info mr-2">
              Add
            </Button>
            <Button variant="contained" className="btn btn-outline-danger" onClick={() => onAddUpdateAreaModalClose()}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <Modal isOpen={addNewAreaModal1} toggle={() => onAddUpdateAreaModalClose1()}>
        <ModalHeader toggle={() => onAddUpdateAreaModalClose1()}>Upload Area</ModalHeader>
        <ModalBody>
          <Upload oncloseModal={onAddUpdateAreaModalClose1} />
        </ModalBody>
      </Modal>
      <DeleteConfirmationDialog
        ref={inputEl}
        title="Are You Sure You Want To Delete?"
        message="This will delete area permanently."
        onConfirm={() => {
          deleteArea(deleteId, areas);
          inputEl.current.close();
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getAreas: (page_no, spinner) => dispatch(getAreas(page_no, spinner)),
    getAreaCount: () => dispatch(getAreasCount()),
    createArea: (area_name, lga, lat, lon) => dispatch(createArea(area_name, lga, lat, lon)),
    searchArea: (data) => dispatch(searchAreas(data)),
    updateArea: (area_id, area_name, lga, lat, lon, old_area) => dispatch(updateArea(area_id, area_name, lga, lat, lon, old_area)),
    deleteArea: (area_id, areas) => dispatch(deleteArea(area_id, areas)),
  };
}

const mapStateToProps = (state) => ({
  areas: state.areas.areas,
  areaCount: state.areas.areaCount,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Areas);
