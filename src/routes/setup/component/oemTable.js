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
import Button from "@material-ui/core/Button";
// import Upload from "./upload";
import {Form, FormGroup, Label, Input, Badge, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import EmptyData from "Components/EmptyData/EmptyData";
import {getVehiclesCount} from "Actions/vehicleAction";
import {Link} from "react-router-dom";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";
import SearchComponent from "Components/SearchComponent/SearchComponent";
import {verifyUserPermssion} from "../../../container/DefaultLayout";
import {useHistory} from "react-router-dom";
import {getOems, getOemCount, creatOEM, updateOEM} from "Actions/oemAction";
const qs = require("qs");

const OemTable = ({getOems, oems, oemsCount, loadingStatus, loading, header, creatOEM, updateOEM}) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [addNewUserModal, setAddNewUserModal] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [formData, setFormData] = useState({name: "", email: "", password: "", phoneNumber: "", address: ""});
  const [addNewUserModal1, setAddNewUserModal1] = useState(false);
  const [searchData, setSearchData] = useState("");
  const inputEl = useRef(null);
  const [excelExport, setExcelExport] = useState([]);
  const [deleteId, setDeleteId] = useState(null);

  const d = new Date();
  let year = d.getFullYear();

  // useEffect(() => {
  //   if (vehicles) {
  //     let result = vehicles.map((vehicle) => {
  //       return {
  //         SerialNo: vehicle.car_number,
  //         plateNo: vehicle.car_number_plate,
  //         model: vehicle.car_model,
  //         make: vehicle.car_make,
  //         color: vehicle.car_color,
  //         vehicleId: vehicle.vehicle_id,
  //         assigned: vehicle.assigned ? "Yes" : "No",
  //         driverAuthId: vehicle.driver_auth_id,
  //       };
  //     });
  //     setExcelExport(result);
  //   }
  // }, [vehicles]);

  console.log(oems);
  console.log(oemsCount);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getOems(pageNumber);
    window.scrollTo(0, 0);
  };

  // const getPreviousData = () => {
  //   getVehicles(1, assign);
  // };

  // const getSearchData = (searchData) => {
  //   searchVehicles(searchData, assign);
  // };

  // const handleCount = () => {
  //   getVehiclesCount(assign);
  // };

  const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});
  const {name, email, password, phoneNumber, address} = formData;
  const opnAddNewUserModal = (e) => {
    e.preventDefault();
    setAddNewUserModal(true);
  };

  const onAddUpdateUserModalClose1 = () => {
    setAddNewUserModal1(false);
  };

  const opnAddNewUserEditModal = (id) => {
    oems.map((oem) => {
      if (oem.auth_id === id) {
        setFormData({...formData, name: oem.name, email: oem.email, password: oem.password, phoneNumber: oem.phone_number, address: oem.address});
        setUpdateId(oem.auth_id);
      }
    });
    setAddNewUserModal(true);
    setEditUser(true);
  };

  const onAddUpdateUserModalClose = () => {
    if (editUser) {
      setFormData({...formData, name: "", email: "", password: "", phoneNumber: "", address: ""});
    }
    setUpdateId(null);
    setAddNewUserModal(false);
    setEditUser(false);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    onAddUpdateUserModalClose();
    !editUser ? await creatOEM({name, email, password, phone_number: phoneNumber, address}) : await updateOEM({name, email, phone_number: phoneNumber, address}, updateId);
  };

  // const sampleData = [
  //   {
  //     plateNo: "DVFGR9o",
  //     type: "sedan",
  //     model: "2013",
  //     make: "toyota",
  //     desc: "A vehicle",
  //   },
  // ];

  const onDelete = (id) => {
    inputEl.current.open();
    setDeleteId(id);
  };

  return (
    <div>
      {!loading && (
        <RctCollapsibleCard heading={header} fullBlock>
          {/* <li className="list-inline-item search-icon d-inline-block ml-2 mb-2">
            <SearchComponent getPreviousData={getPreviousData} getSearchedData={getSearchData} setCurrentPage={setCurrentPage} getCount={handleCount} placeHolder={"Plate No"} />
          </li> */}
          <div className="float-right">
            {/* {oems.length > 0 && (
              <CSVLink data={excelExport} filename={"vehicles.csv"} className="btn-sm btn-outline-default mr-10 bg-primary text-white" target="_blank">
                <i className="zmdi zmdi-download mr-2"></i>
                Export to Excel
              </CSVLink>
            )} */}
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
            {/* <a href="#" onClick={(e) => opnAddNewUserModal1(e)} color="primary" className="btn-sm btn-outline-default mr-10 bg-danger text-white">
              <i className="zmdi zmdi-upload mr-2"></i>Upload
            </a> */}

            <a href="#" onClick={(e) => verifyUserPermssion("create_vehicle", () => opnAddNewUserModal(e))} color="primary" className="caret btn-sm mr-10">
              Add New OEM <i className="zmdi zmdi-plus"></i>
            </a>
          </div>
          {!loading && oems.length > 0 && (
            <div className="table-responsive" style={{minHeight: "50vh"}}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Name</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Phone Number </TableCell>
                    <TableCell>Email </TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {oems.map((oem, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{oem.name}</TableCell>
                        <TableCell>{oem.address}</TableCell>
                        <TableCell>{oem.phone_number}</TableCell>
                        <TableCell>{oem.email}</TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn" onClick={(e) => opnAddNewUserEditModal(oem.auth_id)}>
                            <i className="ti-pencil"></i>
                          </button>
                          <button type="button" className="rct-link-btn ml-lg-3 text-danger ml-2" onClick={() => onDelete(oem.auth_id)}>
                            <i className="ti-trash"></i>
                          </button>
                          {/* <button type="button" className="rct-link-btn text-primary ml-3" title="view details">
                            <Link to={`/admin/vehicles/${vehicle.vehicle_id}`}>
                              <i className="ti-eye" />
                            </Link>
                          </button> */}
                        </TableCell>
                      </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
          )}

          {!loading && oems.length > 0 && (
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={oemsCount} onChange={paginate} />
            </div>
          )}
          {oems.length < 1 && <EmptyData />}
        </RctCollapsibleCard>
      )}
      <Modal isOpen={addNewUserModal} toggle={() => onAddUpdateUserModalClose()}>
        <ModalHeader toggle={() => onAddUpdateUserModalClose()}>{editUser ? "Update OEM" : "Add New OEM"}</ModalHeader>
        <Form onSubmit={onSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="name">OEM Name</Label>
              <Input type="text" name="name" value={name} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" name="address" value={address} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="text" name="email" value={email} onChange={onChange} required />
            </FormGroup>
            <FormGroup>
              <Label for="phoneNumber">Phone Number</Label>
              <Input type="tel" name="phoneNumber" value={phoneNumber} onChange={onChange} required />
            </FormGroup>
            {!updateId && (
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="text" name="password" value={password} onChange={onChange} required max={year} />
              </FormGroup>
            )}
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-success">
              Submit
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      {/* <Modal isOpen={addNewUserModal1} toggle={() => onAddUpdateUserModalClose1()}>
        <ModalHeader toggle={() => onAddUpdateUserModalClose1()}>Upload Vehicle</ModalHeader>
        <ModalBody></ModalBody>
      </Modal> */}
      <DeleteConfirmationDialog
        ref={inputEl}
        title="Are You Sure You Want To Delete?'"
        message="This will delete OEM permanently."
        onConfirm={() => {
          deleteVehicle(deleteId, vehicles);
          inputEl.current.close();
        }}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getOems: (page_no, spinner) => dispatch(getOems(page_no, spinner)),
  getOemCount: () => dispatch(getOemCount()),
  creatOEM: (body) => dispatch(creatOEM(body)),
  updateOEM: (body, authID) => dispatch(updateOEM(body, authID)),
});
const mapStateToProps = (state) => ({
  oems: state.oem.oems,
  oemsCount: state.oem.oemsCount,
  // drivers: state.driver.drivers,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(OemTable);
