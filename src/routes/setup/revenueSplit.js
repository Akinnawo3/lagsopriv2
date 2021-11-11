import React, { useState } from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
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
  Row,
  Col,
} from "reactstrap";
const RevenueSplit = ({ match }) => {
  const [parameterModalOpen, setParameterModalOpen] = useState(false);
  const [breakDownModalOpen, setBreakDownModalOpen] = useState(false);
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Revenue Split"} match={match} />
      <div className="row">
        <div className="col col-xs-12 col-md-8">
          <RctCollapsibleCard
            heading="Revenue Split"
            style={{ minHeight: "70vh" }}
          >
            <div className="px-2">
              <small>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint
              </small>
              <div className="row mt-4 ml-2">
                <div className="cl col-sm-12 col-md-6">
                  <ol>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Debt Service</div>
                      </div>
                      <ol type="a">
                        <li className="ml-3">
                          <div className="d-flex justify-content-between">
                            <div>Commercial Driver</div>
                            <strong>8709.23</strong>
                          </div>
                        </li>
                        <li className="ml-3">
                          <div className="d-flex justify-content-between">
                            <div>Social Driver</div>
                            <strong>959.17.23</strong>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Dail LASG Tax</div>
                        <strong>Cummulative of all Tax</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Tec co</div>
                        <strong>17%</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Re-fleeting</div>
                        <strong>1.5%</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Asset co</div>
                        <strong>1.50%</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Communication</div>
                        <strong>1.0%</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Maintenance and Insurance</div>
                        <strong>4%</strong>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div classsName="d-flex">
                <button
                  className="btn btn-info mr-3"
                  onClick={() => setBreakDownModalOpen(true)}
                >
                  Edit
                </button>
                <button
                  className="btn border-info px-3"
                  onClick={() => setParameterModalOpen(true)}
                >
                  Add Stakeholder
                </button>
              </div>
            </div>
          </RctCollapsibleCard>
        </div>
        {/* parameter modal */}
        <Modal
          isOpen={parameterModalOpen}
          toggle={() => setParameterModalOpen(false)}
          size="sm"
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
                <Label for="lastName">Percentage</Label>
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
          scrollable
        >
          <ModalHeader toggle={() => setBreakDownModalOpen(false)}>
            Update fee
          </ModalHeader>
          <Form onSubmit={() => null}>
            <ModalBody>
              <Row>
                <Col sm="12" md="6">
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
                </Col>
                <Col sm="12" md="6">
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
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Daily LASG Tax</Label>
                    <Input
                      type="text"
                      name="number"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Tech co</Label>
                    <Input
                      type="text"
                      name="number"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Re-fleeting</Label>
                    <Input
                      type="text"
                      name="number"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Asset co</Label>
                    <Input
                      type="text"
                      name="number"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Communication</Label>
                    <Input
                      type="text"
                      name="number"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Maintenance and Insurance</Label>
                    <Input
                      type="text"
                      name="number"
                      // value={customerCare}
                      // onChange={onChange}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
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
    </div>
  );
};

export default RevenueSplit;
