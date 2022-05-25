import React, {Fragment, useState} from "react";
import {Badge, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {calculatePostDate} from "Helpers/helpers";
import AsyncSelectComponent from "Routes/drivers/components/AsyncSelect";
import Button from "@material-ui/core/Button";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {NotificationManager} from "react-notifications";
import Table from "@material-ui/core/Table";
import {
  assignVehicleToPartner,
  changePartnerStatus,
  getPartners,
  getPartnersCount,
  revokePartnerVehicle
} from "Actions/partnersAction";
import {connect} from "react-redux";
import emailMessages from "Assets/data/email-messages/emailMessages";
import {Link} from "react-router-dom";
import DeleteConfirmationDialog from "Components/DeleteConfirmationDialog/DeleteConfirmationDialog";

const PartnerProfile = ({partnerDetails, assignVehicleToPartner, id, changePartnerStatus, revokePartnerVehicle, driversCount}) => {

  const [formData, setFormData] = useState({
    firstname: partnerDetails?.first_name,
    lastname: partnerDetails?.last_name,
    email: partnerDetails?.email,
    vehicle: "",
  });

  const {firstname, lastname, email} = formData
  const [addVehicleModal, setAddVehicleModal] = useState(false);
  const [vIModal, setViModal] = useState(false)
  const [CACModal, setCACModal] = useState(false)
  const [vehiclesModal, setVehiclesModal] = useState(false)


  const onChange = (e) => {
    // checking if the argument "e" is from a form input element or from the asyncSelect component, i checked for e.target.name.. if its not defined then the argument isnt passed from a form input
    e?.target?.name ? setFormData({...formData, [e.target.name]: e.target.value}) : setFormData({...formData, vehicle: e.value});
  };

console.log(partnerDetails)

  return (
    <div className="row" style={{fontSize: "0.8rem"}}>


      <div className="col-sm-6">
        <div className="tab-content px-4">
          <div className="tab-pane active" id="home">
            <ul className="list-group">
              {partnerDetails?.partner_data?.account_type === 'organization' &&
                  <>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Organisation Name</strong>
                </span>
                      {partnerDetails?.first_name}
                    </li>
                  </>
              }
              {partnerDetails?.partner_data?.account_type === 'individual' &&
                  <>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>First name</strong>
                </span>
                      {partnerDetails?.first_name}
                    </li>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Last name</strong>
                </span>
                      {partnerDetails?.last_name}
                    </li>
                  </>
              }
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Phone number</strong>
                </span>
                {partnerDetails?.phone_number}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Email</strong>
                </span>
                {partnerDetails?.email}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>{partnerDetails?.partner_data?.account_type === 'individual' ? 'Home address' : 'Office address'}</strong>
                </span>
                {partnerDetails?.home_address}
              </li>
              {partnerDetails?.partner_data?.account_type === 'individual' &&
                  <>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Gender</strong>
                </span>
                      {partnerDetails?.gender}
                    </li>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>NIN</strong>
                </span>
                      {partnerDetails?.nin_id?.value}
                    </li>
                  </>
              }
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Account type</strong>
                </span>
                {partnerDetails?.partner_data?.account_type}
              </li>
              {partnerDetails?.partner_data?.account_type === 'organization' &&
                  <>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Contact person name</strong>
                </span>
                      {partnerDetails?.partner_data?.next_kin?.name}
                    </li>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Contact person phone number</strong>
                </span>
                      {partnerDetails?.partner_data?.next_kin?.phone_number}
                    </li>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Contact person email</strong>
                </span>
                      {partnerDetails?.partner_data?.next_kin?.email}
                    </li>
                  </>
              }
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Status</strong>
                </span>
                <Badge color={partnerDetails?.partner_data?.partner_status === 4 ? "success" : "warning"}>{partnerDetails?.partner_data?.partner_status === 4 ? "Verified" : "Pending"}</Badge>
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Registration Date</strong>
                </span>
                {calculatePostDate(partnerDetails.createdAt)}
              </li>
            </ul>
          </div>
        </div>
        <div>
          {partnerDetails?.partner_data?.partner_status === 4 &&
              <Button onClick={() => setAddVehicleModal(true)} className="bg-warning mt-3 text-white">
                Assign Vehicle
              </Button>
          }
          {partnerDetails?.partner_data?.partner_status !== 4 &&
              <Button onClick={() =>  changePartnerStatus(partnerDetails?.auth_id, "4", partnerDetails, emailMessages.approvedPartnerMessage, "Partner Approved")} className="bg-success mt-3 text-white">
                Verify
              </Button>
          }
        </div>
      </div>
      <div className="col-sm-6">
        <div className="tab-content px-4">
          <div className="tab-pane active" id="home">
            <ul className="list-group">
              {partnerDetails?.partner_data?.account_type === 'individual' &&
                  <>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>State of origin</strong>
                </span>
                      {partnerDetails?.state}
                    </li>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Occupation</strong>
                </span>
                      {partnerDetails?.occupation}
                    </li>
                  </>
              }

              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Bank name</strong>
                </span>
                {partnerDetails?.partner_data?.bank_data.bank_name}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Account name</strong>
                </span>
                {partnerDetails?.partner_data?.bank_data?.account_name}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Account number</strong>
                </span>
                {partnerDetails?.partner_data?.bank_data?.bank_account}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Has driver?</strong>
                </span>
                {driversCount > 0 ? 'Yes' : 'No'}
              </li>
              {driversCount > 0  &&
                  <>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>No of driver(s)</strong>
                </span>
                      {driversCount}
                    </li>
                    <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Driver(s)</strong>
                </span>
                      <Link to={`/admin/partners/partner-drivers`}>
                        <i className="ti-eye" />
                      </Link>
                    </li>
                  </>
              }
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Asset payment?</strong>
                </span>
                {partnerDetails?.partner_data?.asset_payment?.status ? 'Yes' : 'No'}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Vehicles interested</strong>
                </span>
                <button type="button" className="rct-link-btn text-primary" title="view details" onClick={() => setViModal(true)}>
                  <i className="ti-eye" />
                </button>
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>No of vehicle(s)</strong>
                </span>
                {partnerDetails?.vehicle_data?.length}
              </li>
              <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>Vehicles</strong>
                </span>
                <button type="button" className="rct-link-btn text-primary" title="view details" onClick={() => setVehiclesModal(true)}>
                  <i className="ti-eye" />
                </button>
              </li>
              {partnerDetails?.partner_data?.account_type === 'organization' &&
                  <li className="list-group-item text-right">
                <span className="pull-left">
                  <strong>CAC document</strong>
                </span>
                    <button type="button" className="rct-link-btn text-primary" title="view details" onClick={() => setCACModal(true)}>
                      <i className="ti-eye" />
                    </button>
                  </li>
              }
            </ul>
          </div>
        </div>
      </div>

      {/*Interested vehicles modal*/}
      <Modal isOpen={vIModal} toggle={() =>setViModal(!vIModal)}>
        <ModalHeader toggle={() =>  setViModal(!vIModal)}>Interested vehicles</ModalHeader>
        <ModalBody>

          <Table>
            <TableHead>
              <TableRow hover>
                <TableCell>Date</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Fragment>
                {partnerDetails?.partner_data?.vehicle_interested?.length  > 0 && partnerDetails?.partner_data?.vehicle_interested.map((data, key) => (
                    <TableRow hover key={key}>
                      <TableCell>{calculatePostDate(data.createdAt)}</TableCell>
                      <TableCell>{data.unit}</TableCell>
                      <TableCell>
                        <Badge color={data.status === 1 ? "success" : "warning"}>{data.status === 1 ? "Fulfilled" : "Pending"}</Badge>
                      </TableCell>
                    </TableRow>
                ))}
              </Fragment>
            </TableBody>
          </Table>
        </ModalBody>
      </Modal>


      {/*Vehicles modal*/}
      <Modal isOpen={vehiclesModal} toggle={() =>setVehiclesModal(!vehiclesModal)}>
        <ModalHeader toggle={() =>  setVehiclesModal(!vehiclesModal)}>vehicles</ModalHeader>
        <ModalBody>

          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Plate No</TableCell>
                  <TableCell>Serial No</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {partnerDetails?.vehicle_data?.length  > 0 && partnerDetails?.vehicle_data.map((vehicle, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{vehicle.car_number_plate}</TableCell>
                        <TableCell>{vehicle.car_number}</TableCell>
                        <TableCell>{vehicle.car_make}</TableCell>
                        <TableCell>{vehicle.car_model}</TableCell>
                        <TableCell>
                          <button type="button" className="rct-link-btn text-primary ml-3" title="view details">
                            <Link to={`/admin/vehicles/${vehicle.vehicle_id}`}>
                              <i className="ti-eye" />
                            </Link>
                          </button>
                          <Button onClick={() => revokePartnerVehicle(vehicle?._id, vehicle, partnerDetails)} className="bg-danger mt-3 text-white ml-3">
                            Revoke
                          </Button>
                        </TableCell>
                      </TableRow>
                  ))}
                </Fragment>
              </TableBody>
            </Table>
          </div>
        </ModalBody>
      </Modal>

      {/*add vehicles  modal*/}
      <Modal isOpen={addVehicleModal} toggle={() =>setAddVehicleModal(!addVehicleModal)}>
        <ModalHeader toggle={() =>  setAddVehicleModal(!addVehicleModal)}>Assign Vehicle</ModalHeader>
        <ModalBody>
          <div>
            <Form onSubmit={(e) => {
              e.preventDefault();
              if(!formData?.vehicle?.vehicle_id) {
                return NotificationManager.error('Select vehicle to continue')
              }
              assignVehicleToPartner(formData?.vehicle?.vehicle_id, id, setAddVehicleModal)
            }}>
              <FormGroup>
                <Label for="userName">First Name</Label>
                <Input onChange={onChange} readOnly={true} type="text" name="firstname" value={firstname} />
              </FormGroup>
              <FormGroup>
                <Label for="userName">Last Name</Label>
                <Input onChange={onChange} readOnly={true} type="text" name="lastname" value={lastname} />
              </FormGroup>
              <FormGroup>
                <Label for="userEmail">Email</Label>
                <Input onChange={onChange} type="email" name="email" readOnly={true} value={email} />
              </FormGroup>
              <AsyncSelectComponent onChange={onChange} />
              {/* <AsyncSelect cacheOptions defaultOptions loadOptions={() => [{label: "one", value: 1},{label: "two", value: 2}]} onChange={() => null} />; */}
              <ModalFooter>
                <Button type="submit" variant="contained" className="text-white btn-success">
                  Assign
                </Button>
              </ModalFooter>
            </Form>
          </div>
        </ModalBody>
      </Modal>


      {/*CAC document  modal*/}
      <Modal size='lg' isOpen={CACModal} toggle={() =>setCACModal(!CACModal)}>
        <ModalHeader toggle={() =>  setCACModal(!CACModal)}>CAC document</ModalHeader>
        <ModalBody>
          <img
              src={partnerDetails?.avatar}
              style={{width: '100%'}}
              // alt="user profile"
              // className="rounded-circle"
              // width="200"
              // height="200"
          />
        </ModalBody>
        <ModalFooter>
          <Button type="submit" variant="contained" className="text-white btn-success">
           Download
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    assignVehicleToPartner: (vehicle_id, auth_id, setAddVehicleModal) => dispatch(assignVehicleToPartner(vehicle_id, auth_id, setAddVehicleModal)),
    changePartnerStatus: (auth_id, partner_status, partnerData, message_type, subject) => dispatch(changePartnerStatus(auth_id, partner_status, partnerData, message_type, subject)),
    revokePartnerVehicle: (vehicle_id, vehicleDetails, partnerDetails) => dispatch(revokePartnerVehicle(vehicle_id, vehicleDetails, partnerDetails)),



  };
}

const mapStateToProps = (state) => ({
  partners: state.partners.partners,
  partnersCount: state.partners.partnersCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
  driversCount: state.partners.partnerDriversCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(PartnerProfile)
