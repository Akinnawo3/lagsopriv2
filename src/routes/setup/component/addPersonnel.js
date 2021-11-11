import React, { useState } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

import {
  Form,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Input,
  Button,
} from "reactstrap";

const AddPersonnel = ({ match }) => {
  const [permissionModalOpen, setPermissionModalOpen] = useState(false);

  const viewPermissions = [
    "Passengers",
    "Drivers",
    "Vehicles",
    "Trip Manifest",
    "FDTs and Schedules",
    "Emergency",
    "Ticket",
    "Partners",
    "Support",
    "Ratings and review",
  ];
  const createPermissions = [
    "Vehicle",
    "Passengers",
    "Drivers",
    "Partners",
    "Support",
    "Map",
    "Export Date",
    "Partners",
  ];
  const deletePermission = ["Trip Payment", "Service Payment"];
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Add Personnel"} match={match} />
      <div className="row">
        <div className="col col-xs-12 col-md-10">
          <RctCollapsibleCard
            heading="Personnel Details"
            style={{ minHeight: "70vh" }}
          >
            <div className="px-2 ">
              <div className="row">
                <div className="col col-sm-12 col-md-4">
                  <Form onSubmit={() => null}>
                    <Label for="firstName">First Name</Label>
                    <Input
                      type="text"
                      name="firstName"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                    <Label for="lastName">Last Name</Label>
                    <Input
                      type="text"
                      name="lastName"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                    <Label for="phoneNumber">Phone Number </Label>
                    <Input
                      type="tel"
                      name="phoneNumber"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                    <Label for="email">Email </Label>
                    <Input
                      type="email"
                      name="email"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />

                    <Label for="email">Permissions </Label>

                    <Input
                      type="select"
                      name="email"
                      onClick={() => setPermissionModalOpen(true)}
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    >
                      <option>Select Permissions</option>
                    </Input>
                    <Button
                      type="submit"
                      variant="contained"
                      className="text-white btn-info mt-3 "
                    >
                      Update
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </RctCollapsibleCard>
        </div>

        {/* permission modal     */}
        <Modal
          isOpen={permissionModalOpen}
          toggle={() => setPermissionModalOpen(false)}
          size="lg"
        >
          <ModalHeader toggle={() => setPermissionModalOpen(false)}>
            Permissions
          </ModalHeader>
          <Form onSubmit={() => null}>
            <ModalBody>
              <Form>
                <Row>
                  <Col
                    sm="12"
                    md="4"
                    className="p-0 m-o"
                    style={{ background: "#FBFBFB" }}
                  >
                    <div>
                      <div
                        className="text-center py-3 text-white"
                        style={{ background: "#1FBEE7" }}
                      >
                        VIEW
                      </div>
                      <div className="mt-3 ml-4 ">
                        {viewPermissions.map((item, key) => (
                          <div key={key}>
                            <input
                              type="checkbox"
                              name="dashboard"
                              value="Bike"
                            />
                            <label for="vehicle1" className="ml-2">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col
                    sm="12"
                    md="4"
                    className="p-0 m-0"
                    style={{ background: "#FFF9F2" }}
                  >
                    <div>
                      <div
                        className="text-center py-3 text-white"
                        style={{ background: "#E38100" }}
                      >
                        CREATE
                      </div>
                      <div className="mt-3 ml-4 ">
                        {createPermissions.map((item, key) => (
                          <div key={key}>
                            <input
                              type="checkbox"
                              name="dashboard"
                              value="Bike"
                            />
                            <label for="vehicle1" className="ml-2">
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                  <Col
                    sm="12"
                    md="4"
                    className="p-0 m-0"
                    style={{ background: "#FFFBFB" }}
                  >
                    <div>
                      <div
                        className="text-center py-3 text-white"
                        style={{ background: "#DD2418" }}
                      >
                        DELETE
                      </div>
                      <div className="mt-3 ml-4 ">
                        {deletePermission.map((item, key) => (
                          <div key={key}>
                            <input
                              type="checkbox"
                              name="dashboard"
                              value="Bike"
                            />
                            <label for="vehicle1" className="ml-2">
                              {item}
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
              <Button
                type="submit"
                variant="contained"
                className="text-white  btn-info mr-3"
              >
                Save
              </Button>
              <Button
                variant="contained"
                className="btn btn-outline-danger"
                onClick={() => setPermissionModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </Modal>
      </div>
    </div>
  );
};
export default AddPersonnel;
