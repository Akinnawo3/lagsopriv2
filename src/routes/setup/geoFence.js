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
// import Upload from "./components/upload";
import EmptyData from "Components/EmptyData/EmptyData";
import {CSVLink} from "react-csv";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {verifyUserPermssion} from "../../container/DefaultLayout";
import {createGeoFence, getGeoFence, getGeoFenceCount} from "../../actions/geoFencingAction";

const GeoFence = ({match, loading, createGeoFence, getGeoFence, getGeoFenceCount, geofencesCount, geofences}) => {
  const [addNewGeoFenceModal, setAddNewGeoFenceModal] = useState(false);
  const [geoFenceName, setGeoFenceName] = useState("");
  const [geoFenceDescription, setGeoFenceDescription] = useState("");
  const [locations, setLocations] = useState()

  const [editGeoFence, setEditGeoFence] = useState(false);

  const [updateId, setUpdateId] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const inputEl = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  // const [excelExport, setExcelExport] = useState([]);
  // const [addNewAreaModal1, setAddNewAreaModal1] = useState(false);

  useEffect(() => {
    getGeoFence(1, true);
    getGeoFenceCount();
  }, []);

  console.log(geofences);
  console.log(geofencesCount);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  //   getAreas(pageNumber);
  //   window.scrollTo(0, 0);
  // };

  // const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  // const {lga, areaName} = formData;

  // const opnAddNewAreaModal = (e) => {
  //   e.preventDefault();
  //   setAddNewAreaModal(true);
  // };

  const onGeoFenceModalOpen = (e) => {
    e.preventDefault();
    setAddNewGeoFenceModal(true);
  };

  // const onAddUpdateAreaModalClose1 = () => {
  //   setAddNewAreaModal1(false);
  // };

  // const opnAddNewAreaEditModal = (area_id) => {
  //   areas.map((area) => {
  //     if (area.area_id === area_id) {
  //       setFormData({
  //         lga: area.lga,
  //         areaName: area.area_name,
  //       });
  //       setUpdateId(area.area_id);
  //     }
  //   });
  //   setAddNewAreaModal(true);
  //   setEditGeoFence(true);
  // };

  const onGeoFenceModalClose = () => {
    setUpdateId(null);
    setAddNewGeoFenceModal(false);
    setEditGeoFence(false);
  };

  // const onDelete = (area_id) => {
  //   inputEl.current.open();
  //   setDeleteId(area_id);
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    onGeoFenceModalClose();
    const locations = [coord1, coord2, coord1];
    !editGeoFence ? await createGeoFence(geoFenceName, geoFenceDescription, locations) : null;
  };

  // useEffect(() => {
  //   if (areas) {
  //     let result = areas.map((area) => {
  //       return {
  //         areaName: area?.area_name,
  //         lga: area?.lga,
  //       };
  //     });
  //     setExcelExport(result);
  //   }
  // }, [areas]);

  // const sampleData = [
  //   {
  //     area_name: "Lekki Phase 1",
  //     lga: "oti-osa",
  //   },
  //   {
  //     area_name: "Lekki Phase 5",
  //     lga: "oti-osa",
  //   },
  //   {
  //     area_name: "Lekki Phase 3",
  //     lga: "oti-osa",
  //   },
  //   {
  //     area_name: "Lekki Phase 4",
  //     lga: "oti-osa",
  //   },
  // ];

  // const getPreviousData = () => {
  //   getAreas(currentPage);
  // };

  // const getSearchData = (searchData) => {
  //   searchArea(searchData);
  // };

  // const handleCount = () => {
  //   getAreaCount();
  // };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Areas"} match={match} />
      {!loading && (
        <RctCollapsibleCard heading="Areas" fullBlock>
          <>
            <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
              {/* <div className="search-wrapper">
                <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} placeHolder={"Area name"} />
              </div> */}
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
              {/* <CSVLink
                // headers={headers}
                data={sampleData}
                filename={"sampleAreas.csv"}
                className="btn-sm btn-outline-default mr-10 bg-success text-white"
                target="_blank"
              >
                <i className="zmdi zmdi-download mr-2"></i>
                Sample excel to upload
              </CSVLink> */}
              {/* <a href="#" onClick={(e) => onGeoFenceModalOpen(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white">
                <i className="zmdi zmdi-upload mr-2"></i>Upload
              </a> */}
              <a href="#" onClick={(e) => verifyUserPermssion("create_setup", () => onGeoFenceModalOpen(e))} color="primary" className="caret btn-sm mr-10">
                <button className="ml-2 btn btn-outline-primary btn-sm rounded">Add New</button>
              </a>
            </div>
            {/* {areas.length > 0 && ( */}
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Geo-Fence Name</TableCell>
                    <TableCell></TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {/* {areas.map((area, key) => ( */}
                    <TableRow hover key={"key"}>
                      <TableCell>hardcoded cell</TableCell>
                    </TableRow>
                    {/* ))} */}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            {/* )} */}
            {/* {areas.length < 1 && <EmptyData />} */}

            {/* {!loading && areas.length > 0 && (
              <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
                <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={areaCount} onChange={paginate} />
              </div>
            )} */}
          </>
        </RctCollapsibleCard>
      )}
      <Modal isOpen={addNewGeoFenceModal} toggle={() => onGeoFenceModalClose()} size="sm">
        <ModalHeader toggle={() => onGeoFenceModalClose()}>{editGeoFence ? "Update Area" : "Create New Area"}</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label>Geo-Fence Name</Label>
              <Input type="text" name="geoFenceName" value={geoFenceName} onChange={(e) => setGeoFenceName(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label>Geo-Fence Description</Label>
              <Input type="textarea" name="geoFenceDescription" value={geoFenceDescription} onChange={(e) => setGeoFenceDescription(e.target.value)} required />
            </FormGroup>
            <small className="text-muted fw-bold">Coordinate 1</small>
            <div className="d-flex">
              <FormGroup className="mr-2">
                <Label>Long</Label>
                <Input type="number" name="geoFenceName" value={coord1.lon} onChange={(e) => setCoord1({...coord1, lon: e.target.value})} required />
              </FormGroup>
              <FormGroup className="ml-2">
                <Label>Lat</Label>
                <Input type="number" name="geoFenceName" value={coord1.lat} onChange={(e) => setCoord1({...coord1, lat: e.target.value})} required />
              </FormGroup>
            </div>
            <small className="text-muted fw-bold">Coordinate 2</small>
            <div className="d-flex">
              <FormGroup className="mr-2">
                <Label>Long</Label>
                <Input type="number" name="geoFenceName" value={coord2.lon} onChange={(e) => setCoord2({...coord2, lon: e.target.value})} required />
              </FormGroup>
              <FormGroup className="ml-2">
                <Label>Lat</Label>
                <Input type="number" name="geoFenceName" value={coord2.lat} onChange={(e) => setCoord2({...coord2, lat: e.target.value})} required />
              </FormGroup>
            </div>
            <small className="text-muted fw-bold">Coordinate 3</small>
            <div className="d-flex">
              <FormGroup className="mr-2">
                <Label>Long</Label>
                <Input type="number" name="geoFenceName" value={coord1.lon} onChange={(e) => setCoord1({...coord1, lon: e.target.value})} required />
              </FormGroup>
              <FormGroup className="ml-2">
                <Label>Lat</Label>
                <Input type="number" name="geoFenceName" value={coord1.lat} onChange={(e) => setCoord1({...coord1, lat: e.target.value})} required />
              </FormGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-info mr-2">
              Add
            </Button>
            <Button variant="contained" className="btn btn-outline-danger" onClick={() => onGeoFenceModalClose()}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      {/* <Modal isOpen={addNewGeoFenceModal} toggle={() => onAddUpdateAreaModalClose1()}>
        <ModalHeader toggle={() => onAddUpdateAreaModalClose1()}>Upload Area</ModalHeader>
        <ModalBody>
          <Upload oncloseModal={onAddUpdateAreaModalClose1} />
        </ModalBody>
      </Modal> */}
      {/* <DeleteConfirmationDialog
        ref={inputEl}
        title="Are You Sure You Want To Delete?"
        message="This will delete area permanently."
        onConfirm={() => {
          deleteArea(deleteId, areas);
          inputEl.current.close();
        }}
      /> */}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    // getAreas: (page_no, spinner) => dispatch(getAreas(page_no, spinner)),
    // getAreaCount: () => dispatch(getAreasCount()),
    createGeoFence: (name, description, locations) => dispatch(createGeoFence(name, description, locations)),
    getGeoFence: (page_no, spinner) => dispatch(getGeoFence(page_no, spinner)),
    getGeoFenceCount: () => dispatch(getGeoFenceCount()),
    // searchArea: (data) => dispatch(searchAreas(data)),
    // updateArea: (area_id, area_name, lga) => dispatch(updateArea(area_id, area_name, lga)),
    // deleteArea: (area_id, areas) => dispatch(deleteArea(area_id, areas)),
  };
}

const mapStateToProps = (state) => ({
  geofences: state.geoFence.geofences,
  geofencesCount: state.geoFence.geofencesCount,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(GeoFence);
