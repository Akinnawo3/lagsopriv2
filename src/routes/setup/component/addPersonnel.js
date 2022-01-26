import React, {useState} from "react";
import {Col, Row} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {NotificationManager} from "react-notifications";
import {createAdmin, updateAdmin} from "Actions/adminAction";
import {Form, Modal, ModalHeader, ModalBody, Label, Input, Button} from "reactstrap";
import {verifyUserPermssion} from "../../../container/DefaultLayout";
const AddPersonnel = ({match, history, updateAdmin, createAdmin}) => {
  const permissionArray = history?.location?.state?.editedAdmin?.access_tab ? history?.location?.state?.editedAdmin?.access_tab : [];
  const [permissionModalOpen, setPermissionModalOpen] = useState(false);
  const [permissions, setPermissions] = useState(permissionArray);

  const {first_name, last_name, phone_number, email, auth_id} = history?.location?.state?.editedAdmin ? history?.location?.state?.editedAdmin : {};

  const data = history?.location?.state?.editedAdmin
    ? {
        first_name,
        last_name,
        phone_number,
        email,
      }
    : {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
      };

  const [adminData, setAdminData] = useState(data);

  const viewPermissions = [
    {label: "Dashboard", value: "dashboard"},
    {label: "Users", value: "users"},
    {label: "Passengers", value: "passengers"},
    {label: "Personnels", value: "personnels"},
    {label: "Drivers", value: "drivers"},
    {label: "Vehicles", value: "vehicles"},
    {label: "Trip Manifest", value: "trip_manifest"},
    {label: "FDTs and Schedules", value: "FDTs_and_Schedules"},
    {label: "Emergency", value: "emergency"},
    {label: "Ticket", value: "tickets"},
    {label: "Partners", value: "partners"},
    {label: "Support", value: "support"},
    {label: "Ratings and review", value: "ratings_and_reviews"},
    {label: "Activity Log", value: "activity_log"},
    {label: "Referral", value: "referral"},
    {label: "Trip Payments", value: "trip_payments"},
    {label: "Service payments", value: "service_payments"},
    {label: "Maintenance & repairs", value: "maintenance_&_repairs"},
    {label: "Promo", value: "promo"},
    {label: "Maps", value: "maps"},
    {label: "Setup", value: "setup"},
    {label: "Notifications", value: "notifications"},
  ];
  const createPermissions = [
    {label: "Vehicle", value: "vehicle"},
    {label: "Partners", value: "partners"},
    {label: " Ticket", value: "tickets"},
    {label: "Emergency Numbers", value: "emergency_numbers"},
    {label: "Emergency Emails", value: "emergency_emails"},
    {label: "Maintenance & repairs", value: "maintenance_&_repairs"},
    {label: "Personnel", value: "personnel"},
    {label: "Promo Code", value: "promo_code"},
    {label: "Setup", value: "setup"},
  ];
  const deletePermission = [
    {label: "User", value: "user"},
    {label: "Emergency Number", value: "emergency_number"},
    {label: "Emergency Email", value: "emergency_email"},
    {label: "Promo Code", value: "promo_code"},
  ];

  const updatePermisions = [
    {label: "Driver Status", value: "driver_status"},
    {label: "Vehicles", value: "vehicles"},
    {label: "Emergency Status", value: "emergency_status"},
    {label: "Maintenance & Repairs", value: "maintenance_and_repairs"},
    {label: "Ticket Status", value: "ticket_status"},
    {label: "Promo Codes", value: "promo_code"},
    {label: "Partner Status", value: "partner_status"},
  ];

  const otherPermissions = [{label: "Assign Vehicle to Driver", value: "assign_vehicle_to_driver"}];

  const handleCheck = (e) => {
    if (e.target.checked) {
      setPermissions([...permissions, e.target.value]);
    } else {
      setPermissions(permissions.filter((item) => item !== e.target.value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!permissions.length) {
      NotificationManager.error("Select Admin Permissions");
    } else {
      if (history?.location?.state?.editedAdmin) {
        verifyUserPermssion("create_personnel", () => updateAdmin({...adminData, access_tab: permissions.join()}, auth_id));
      } else {
        verifyUserPermssion("create_personnel", () => createAdmin({...adminData, access_tab: permissions.join()}));
      }
    }
  };

  const onChange = (e) => {
    setAdminData({...adminData, [e.target.name]: e.target.value});
  };

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Add Personnel"} match={match} />
      <div className="row">
        <div className="col col-xs-12 col-md-10">
          <RctCollapsibleCard heading="Personnel Details" style={{minHeight: "70vh"}}>
            <div className="px-2 ">
              <div className="row">
                <div className="col col-sm-12 col-md-4">
                  <Form onSubmit={handleSubmit}>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="first_name" value={adminData.first_name} onChange={onChange} required />
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="last_name" value={adminData.last_name} onChange={onChange} required />
                    <Label for="phoneNumber">Phone Number </Label>
                    <Input type="tel" name="phone_number" value={adminData.phone_number} onChange={onChange} required />
                    <Label for="email">Email </Label>
                    <Input type="email" name="email" value={adminData.email} onChange={onChange} required />

                    <Label for="email">Permissions </Label>
                    <Input type="select" name="email" onClick={() => setPermissionModalOpen(true)} required>
                      <option>Select Permissions</option>
                    </Input>
                    <Button type="submit" variant="contained" className="text-white btn-info mt-3 ">
                      Save
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </RctCollapsibleCard>
        </div>

        {/* permission modal     */}
        <Modal isOpen={permissionModalOpen} toggle={() => setPermissionModalOpen(false)} size="lg">
          <ModalHeader toggle={() => setPermissionModalOpen(false)}>Permissions</ModalHeader>
          <Form onSubmit={() => null}>
            <ModalBody>
              <Form>
                <Row>
                  <Col sm="12" md="3" className="p-0 m-o" style={{background: "#FBFBFB"}}>
                    <div>
                      <div className="text-center py-3 text-white" style={{background: "#1FBEE7"}}>
                        VIEW
                      </div>
                      <div className="mt-3 ml-4 ">
                        {viewPermissions.map((item, key) => (
                          <div key={key}>
                            <input type="checkbox" name={`view_${item.value}`} value={`view_${item.value}`} onChange={handleCheck} checked={(() => permissions.includes(`view_${item.value}`))()} />
                            <label for="vehicle1" className="ml-2">
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col sm="12" md="3" className="p-0 m-0" style={{background: "#FFF9F2"}}>
                    <div>
                      <div className="text-center py-3 text-white" style={{background: "#E38100"}}>
                        CREATE
                      </div>
                      <div className="mt-3 ml-4 ">
                        {createPermissions.map((item, key) => (
                          <div key={key}>
                            <input
                              type="checkbox"
                              name={`create_${item.value}`}
                              value={`create_${item.value}`}
                              onChange={handleCheck}
                              checked={(() => permissions.includes(`create_${item.value}`))()}
                            />
                            <label for="vehicle1" className="ml-2">
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col sm="12" md="3" className="p-0 m-0" style={{background: "#FFFBFC"}}>
                    <div>
                      <div className="text-center py-3 text-white" style={{background: "orange"}}>
                        UPDATE
                      </div>
                      <div className="mt-3 ml-4 ">
                        {updatePermisions.map((item, key) => (
                          <div key={key}>
                            <input
                              type="checkbox"
                              name={`update_${item.value}`}
                              value={`update_${item.value}`}
                              onChange={handleCheck}
                              checked={(() => permissions.includes(`update_${item.value}`))()}
                            />
                            <label for="vehicle1" className="ml-2">
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col sm="12" md="3" className="p-0 m-0" style={{background: "#FFFBFB"}}>
                    <div>
                      <div className="text-center py-3 text-white" style={{background: "#DD2418"}}>
                        DELETE
                      </div>
                      <div className="mt-3 ml-4 ">
                        {deletePermission.map((item, key) => (
                          <div key={key}>
                            <input
                              type="checkbox"
                              name={`delete_${item.value}`}
                              value={`delete_${item.value}`}
                              onChange={handleCheck}
                              checked={(() => permissions.includes(`delete_${item.value}`))()}
                            />
                            <label for="vehicle1" className="ml-2">
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                      <div className="text-center py-3 text-white mt-4" style={{background: "purple"}}>
                        OTHERS
                      </div>
                      <div className="mt-3 ml-4 ">
                        {otherPermissions.map((item, key) => (
                          <div key={key}>
                            <input type="checkbox" name={item.value} value={item.value} onChange={handleCheck} checked={(() => permissions.includes(item.value))()} />
                            <label for="vehicle1" className="ml-2">
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>

            <div className="text-center my-3">
              <Button variant="contained" className="btn btn-outline-info  mr-3" onClick={() => setPermissionModalOpen(false)}>
                Done
              </Button>
              <Button variant="contained" className="text-white  btn-danger" onClick={() => setPermissions([])}>
                Remove all
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    createAdmin: (adminData) => dispatch(createAdmin(adminData)),
    updateAdmin: (adminData, auth_id) => dispatch(updateAdmin(adminData, auth_id)),
  };
}
export default connect(null, mapDispatchToProps)(AddPersonnel);
