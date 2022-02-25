import React, {useState, useEffect, Fragment, useRef} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import {CSVLink} from "react-csv";
import Pagination from "react-js-pagination";
import {createVehicles, deleteVehicle, getVehicles, searchVehicles, updateVehicle} from "Actions/vehicleAction";
import Button from "@material-ui/core/Button";
import Upload from "./upload";
import {Form, FormGroup, Label, Input, Badge, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import EmptyData from "Components/EmptyData/EmptyData";
import {getVehiclesCount} from "Actions/vehicleAction";
import {getVehiclesByOem} from "Actions/oemAction";
import {Link} from "react-router-dom";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {verifyUserPermssion} from "../../../container/DefaultLayout";
import {useHistory} from "react-router-dom";
const qs = require("qs");

const VehicleTable = ({getVehicles, vehicles, loading, createVehicles, updateVehicle, vehiclesCount, assign, header, deleteVehicle, getVehiclesCount, searchVehicles, oems, getVehiclesByOem}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [addNewUserModal, setAddNewUserModal] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [formData, setFormData] = useState({plateNo: "", make: "", model: "", desc: "", color: "", oem: ""});
  const [addNewUserModal1, setAddNewUserModal1] = useState(false);
  const [searchData, setSearchData] = useState("");
  const inputEl = useRef(null);
  const [excelExport, setExcelExport] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  const d = new Date();
  let year = d.getFullYear();

  useEffect(() => {
    if (vehicles) {
      let result = vehicles.map((vehicle) => {
        return {
          SerialNo: vehicle.car_number,
          plateNo: vehicle.car_number_plate,
          model: vehicle.car_model,
          make: vehicle.car_make,
          color: vehicle.car_color,
          vehicleId: vehicle.vehicle_id,
          assigned: vehicle.assigned ? "Yes" : "No",
          driverAuthId: vehicle.driver_auth_id,
        };
      });
      setExcelExport(result);
    }
  }, [vehicles]);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getVehicles(pageNumber, assign);
    window.scrollTo(0, 0);
  };

  const getPreviousData = () => {
    getVehicles(1, assign);
  };

  const getSearchData = (searchData) => {
    searchVehicles(searchData, assign);
  };

  const handleCount = () => {
    getVehiclesCount(assign);
  };

  const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const onOemSelect = async (e) => {
    console.log(e.target.value)
    // await getVehiclesByOem(1, false, e.target.value);
    setFormData({...formData, [e.target.name]: e.target.value});
  };
  const {plateNo, model, make, desc, color, oem} = formData;

  const opnAddNewUserModal = (e) => {
    e.preventDefault();
    setAddNewUserModal(true);
  };

  const onAddUpdateUserModalClose1 = () => {
    setAddNewUserModal1(false);
  };

  const opnAddNewUserEditModal = (id) => {
    vehicles.map((vehicle) => {
      if (vehicle.vehicle_id === id) {
        setFormData({...formData, plateNo: vehicle.car_number_plate, model: vehicle.car_model, make: vehicle.car_make, desc: vehicle.car_desc, color: vehicle.car_color, oem: oem_id});
        setUpdateId(vehicle.vehicle_id);
      }
    });
    setAddNewUserModal(true);
    setEditUser(true);
  };

  const onAddUpdateUserModalClose = () => {
    if (editUser) {
      setFormData({...formData, plateNo: "", type: "", model: "", desc: "", make: "", color: "", oem: ""});
    }
    setUpdateId(null);
    setAddNewUserModal(false);
    setEditUser(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // onAddUpdateUserModalClose();
    !editUser ? await createVehicles(plateNo, make, model, desc, color, oem) : await updateVehicle(updateId, plateNo, make, model, desc, color, currentPage, assign);
  };

  const sampleData = [
    {
      plateNo: "DVFGR9o",
      type: "sedan",
      model: "2013",
      make: "toyota",
      desc: "A vehicle",
    },
  ];

  const onDelete = (id) => {
    inputEl.current.open();
    setDeleteId(id);
  };
  return (
    <div>
      {!loading && (
        <RctCollapsibleCard heading={header} fullBlock>
          <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} placeHolder={"Plate No"} />
          </li>
          <div className="float-right">
            {vehicles.length > 0 && (
              <CSVLink data={excelExport} filename={"vehicles.csv"} className="btn-sm btn-outline-default mr-10 bg-primary text-white" target="_blank">
                <i className="zmdi zmdi-download mr-2"></i>
                Export to Excel
              </CSVLink>
            )}
            {/*<CSVLink*/}
            {/*	// headers={headers}*/}
            {/*	data={sampleData}*/}
            {/*	filename={"sampleVehicles.csv"}*/}
            {/*	className="btn-sm btn-outline-default mr-10 bg-success text-white"*/}
            {/*	target="_blank"*/}
            {/*>*/}
            {/*	<i className="zmdi zmdi-download mr-2"></i>*/}

            {/*	Sample excel to upload*/}
            {/*</CSVLink>*/}
            {/*<a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white"><i className="zmdi zmdi-upload mr-2"></i>Upload</a>*/}
            <a href="#" onClick={(e) => verifyUserPermssion("create_vehicle", () => opnAddNewUserModal(e))} color="primary" className="caret btn-sm mr-10">
              Add New Vehicle <i className="zmdi zmdi-plus"></i>
            </a>
          </div>
          {!loading && vehicles.length > 0 && (
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Plate No</TableCell>
                    <TableCell>Serial No</TableCell>
                    <TableCell>Model</TableCell>
                    <TableCell>Year</TableCell>
                    <TableCell>status</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {vehicles.map((vehicle, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{vehicle.car_number_plate}</TableCell>
                        <TableCell>{vehicle.car_number}</TableCell>
                        <TableCell>{vehicle.car_make}</TableCell>
                        <TableCell>{vehicle.car_model}</TableCell>
                        <TableCell>
                          <Badge color={vehicle.assigned ? "success" : "danger"}>{vehicle.assigned ? "Assigned" : "Unassigned"}</Badge>
                        </TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(vehicle.vehicle_id)}>
                            <i className="ti-pencil"></i>
                          </button>
                          <button type="button" className="rct-link-btn ml-lg-3 text-danger ml-2" onClick={() => onDelete(vehicle.vehicle_id)}>
                            <i className="ti-trash"></i>
                          </button>
                          <button type="button" className="rct-link-btn text-primary ml-3" title="view details">
                            <Link to={`/admin/vehicles/${vehicle.vehicle_id}`}>
                              <i className="ti-eye" />
                            </Link>
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
          )}

          {!loading && vehicles.length > 0 && (
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={vehiclesCount} onChange={paginate} />
            </div>
          )}
          {vehicles.length < 1 && <EmptyData />}
        </RctCollapsibleCard>
      )}
      <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
        <ModalHeader toggle={() => onAddUpdateUserModalClose()}>{editUser ? "Update Vehicle" : "Add New Vehicle"}</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="firstName">Plate No</Label>
              <Input type="text" name="plateNo" value={plateNo} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Model</Label>
              <Input type="text" name="make" value={make} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="text">Year</Label>
              <Input type="number" name="model" value={model} onChange={onChange} required max={year} />
            </FormGroup>
            <FormGroup>
              <Label for="text">Colour</Label>
              <Input type="text" name="color" value={color} onChange={onChange} required />
            </FormGroup>

            <FormGroup>
              <Label>OEM</Label>
              <Input type="select" name="oem" value={oem} onChange={(e) => onOemSelect(e)} required>
                <option value="" selected hidden>
                  --Select OEM --
                </option>
                {oems.map((item) => (
                  <option value={item.auth_id} selected={oem === item.auth_id}>
                    {item.name}
                  </option>
                ))}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label>OEM</Label>
              <Input type="select" name="oem" value={oem} onChange={onChange} required>
                <option value="" selected hidden>
                  --Select OEM --
                </option>
                {oems.map((item) => (
                  <option value={item.auth_id} selected={oem === item.auth_id}>
                    {item.name}
                  </option>
                ))}
              </Input>{" "}
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-success">
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <Modal isOpen={addNewUserModal1} toggle={() => onAddUpdateUserModalClose1()}>
        <ModalHeader toggle={() => onAddUpdateUserModalClose1()}>Upload Vehicle</ModalHeader>
        <ModalBody>
          <Upload oncloseModal={onAddUpdateUserModalClose1} />
        </ModalBody>
      </Modal>
      <DeleteConfirmationDialog
        ref={inputEl}
        title="Are You Sure You Want To Delete?'"
        message="This will delete Vehicle permanently."
        onConfirm={() => {
          deleteVehicle(deleteId, vehicles);
          inputEl.current.close();
        }}
      />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getVehicles: (page_no, assign, spinner, car_number_plate) => dispatch(getVehicles(page_no, assign, spinner, car_number_plate)),
    getVehiclesCount: (assign, car_number_plate) => dispatch(getVehiclesCount(assign, car_number_plate)),
    searchVehicles: (data, assign) => dispatch(searchVehicles(data, assign)),
    deleteVehicle: (vehicle_id, vehicles) => dispatch(deleteVehicle(vehicle_id, vehicles)),
    createVehicles: (car_number_plate, car_make, car_model, car_desc, car_color, oem) => dispatch(createVehicles(car_number_plate, car_make, car_model, car_desc, car_color, oem)),
    updateVehicle: (vehicle_id, car_number_plate, car_make, car_model, car_desc, car_color, page_no, assign) =>
      dispatch(updateVehicle(vehicle_id, car_number_plate, car_make, car_model, car_desc, car_color, page_no, assign)),
    getVehiclesByOem: (page_no, spinner, oem_id) => dispatch(getVehiclesByOem(page_no, spinner, oem_id)),
  };
}

const mapStateToProps = (state) => ({
  vehicles: state.vehicle.vehicles,
  vehiclesCount: state.vehicle.vehiclesCount,
  drivers: state.driver.drivers,
  oems: state.oem.oems,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(VehicleTable);
