import React, { useEffect, useState } from "react";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
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

const OneOffPayment = () => {
  const [parameterModalOpen, setParameterModalOpen] = useState(false);
  const [breakDownModalOpen, setBreakDownModalOpen] = useState(false);
  return (
    <div className="row">
      <div className="col col-xs-12 col-md-10">
        <RctCollapsibleCard
          heading="One-off Payment"
          style={{ minHeight: "70vh" }}
        >
          <div className="px-2 mt-1">
            <div className="row">
              <div className="col col-sm-12 col-md-4 mr-3 d-flex flex-column">
                <Card className="text-primary bg-light p-2 mb-3">
                  <CardBody className="pb-0">
                    <div className="text-value text-left text-muted fw-bold">
                      Commercial Driver Fee
                    </div>
                  </CardBody>
                  <div
                    className="chart-wrapper mx-3 d-flex align-items-center justify-content-between"
                    style={{ height: "70px" }}
                  >
                    <span
                      className="pr-2 font-xl"
                      style={{ fontSize: "2.5rem" }}
                    >
                      ₦ 200
                    </span>
                  </div>
                </Card>
                <Card className="text-primary bg-light p-2">
                  <CardBody className="pb-0">
                    <div className="text-value text-muted fw-bold">
                      Social Driver Fee
                    </div>
                  </CardBody>
                  <div
                    className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between"
                    style={{ height: "70px" }}
                  >
                    <span className=" font-xl" style={{ fontSize: "2.5rem" }}>
                      ₦ 120
                    </span>
                  </div>
                </Card>
              </div>

              <div className=" col-sm-12 col-md-7 ">
                <div>
                  <h3 className="fw-bold">Breakdown</h3>
                  <div className="text-muted">
                    Percentege of Cost of Asset
                    <ul className="list-group">
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Commercial Driver </div>
                        </span>
                        <strong>1,500,000</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Social Driver </div>
                        </span>
                        <strong>750,000</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="text-muted mt-3">
                    Others
                    <ul className="list-group">
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Registration and Insurance </div>
                        </span>
                        <strong>1,500,000</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Dashcam 1st month rent </div>
                        </span>
                        <strong>750,000</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>
                            Soft Skill training,medicals,security check..
                          </div>
                        </span>
                        <strong>750,000</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> LASDRI </div>
                        </span>
                        <strong>750,000</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> DMS Subscription </div>
                        </span>
                        <strong>750,000</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> E-taxi License </div>
                        </span>
                        <strong>750,000</strong>
                      </li>
                    </ul>
                    <div classsName="d-flex">
                      <button
                        className="btn btn-info mr-3"
                        onClick={() => setParameterModalOpen(true)}
                      >
                        Add Parameter
                      </button>
                      <button
                        className="btn border-info"
                        onClick={() => setBreakDownModalOpen(true)}
                      >
                        Edit Breakdown
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RctCollapsibleCard>
      </div>
      {/* parameter modal */}
      <Modal
        isOpen={parameterModalOpen}
        toggle={() => setParameterModalOpen(false)}
        size="sm"
        scrollable
      >
        <ModalHeader toggle={() => setParameterModalOpen(false)}>
          Add Parameter
        </ModalHeader>
        <Form onSubmit={() => null}>
          <ModalBody>
            <FormGroup>
              <Label for="lastName">Name</Label>
              <Input
                type="text"
                name="name"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Amount</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              variant="contained"
              className="text-white btn-info mr-2"
            >
              Add Parameter
            </Button>
            <Button
              variant="contained"
              className="btn btn-outline-danger"
              onClick={() => setParameterModalOpen(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* breakdoen modal     */}
      <Modal
        isOpen={breakDownModalOpen}
        toggle={() => setBreakDownModalOpen(false)}
        size="md"
      >
        <ModalHeader toggle={() => setBreakDownModalOpen(false)}>
          One-off fee Breakdown
        </ModalHeader>
        <Form onSubmit={() => null}>
          <ModalBody>
            <small className="fw-bold">Percentage Cost of Asset</small>
            <FormGroup>
              <Label for="lastName">Commercial Driver</Label>
              <Input
                type="text"
                name="name"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Social Driver</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <small className="fw-bold mt-3">Others</small>
            <FormGroup>
              <Label for="lastName">Registration and Insurance</Label>
              <Input
                type="text"
                name="name"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Dashcam 1st month rent</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">
                Softskills training, medicals, security check..
              </Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">LASDRI</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">DMS Subscription</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">E-taxi License</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              variant="contained"
              className="text-white  btn-info mr-2"
            >
              Save Update
            </Button>
            <Button
              variant="contained"
              className="btn btn-outline-danger"
              onClick={() => setBreakDownModalOpen(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};
export default OneOffPayment;
