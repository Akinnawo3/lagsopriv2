import React, { useState } from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
const Others = ({ match }) => {
  const [customerCareModal, setCustomerCareModal] = useState(false);
  const [cancellationReasonsModal, setCancellationReasonsModal] =
    useState(false);
  const [areaModal, setAreaModal] = useState(false);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Others"} match={match} />
      <div className="row">
        <div className="col col-xs-12 col-md-10">
          <RctCollapsibleCard style={{ minHeight: "70vh" }}>
            <div className="row">
              <div className="col col-sm-12 col-md-9">
                <div className="fw-bold">Customer Lines</div>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </small>
                <div className="d-flex mt-3">
                  <div>
                    <FormGroup>
                      <Label for="lastName">Line 1</Label>
                      <Input
                        type="text"
                        name="number"
                        // value={customerCare}
                        // onChange={onChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="lastName">Line 2</Label>
                      <Input
                        type="text"
                        name="number"
                        // value={customerCare}
                        // onChange={onChange}
                        required
                      />
                    </FormGroup>
                  </div>
                  <div className="ml-3 mt-2 ">
                    <Button
                      variant="contained"
                      className="btn btn-outline-primary mt-4"
                      onClick={() => setCustomerCareModal(true)}
                    >
                      Add New
                    </Button>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="fw-bold mt-3">Total Waiting Time</div>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </small>
                <div className="d-flex mt-3">
                  <div>
                    <FormGroup>
                      <Label for="lastName">Waiting Time</Label>
                      <Input
                        type="text"
                        name="number"
                        // value={customerCare}
                        // onChange={onChange}
                        required
                      />
                    </FormGroup>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="fw-bold mt-3 d-flex align-items-center">
                  <div> Cancellation Reasons</div>{" "}
                  <button
                    className="ml-2 btn btn-outline-primary btn-sm rounded"
                    onClick={() => setCancellationReasonsModal(true)}
                  >
                    Add New
                  </button>
                </div>
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </small>
                <div className="mt-3">
                  <Table>
                    <TableHead>
                      <TableRow hover>
                        <TableCell> Reason</TableCell>
                        <TableCell>User type</TableCell>
                        <TableCell>Action</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow hover>
                        <TableCell>Long Pick up time</TableCell>
                        <TableCell>Driver</TableCell>
                        <TableCell>
                          <button
                            type="button"
                            className="rct-link-btn ml-lg-3 text-danger"
                            onClick={() => null}
                          >
                            <i className="ti-trash"></i>
                          </button>
                        </TableCell>
                      </TableRow>
                      <TableRow hover>
                        <TableCell>Taking too long to find co-riders</TableCell>
                        <TableCell>Rider</TableCell>
                        <TableCell>
                          <button
                            type="button"
                            className="rct-link-btn ml-lg-3 text-danger"
                            onClick={() => null}
                          >
                            <i className="ti-trash"></i>
                          </button>
                        </TableCell>
                      </TableRow>
                      <TableRow hover>
                        <TableCell>I changed my mind</TableCell>
                        <TableCell>Both</TableCell>
                        <TableCell>
                          <button
                            type="button"
                            className="rct-link-btn ml-lg-3 text-danger"
                            onClick={() => null}
                          >
                            <i className="ti-trash"></i>
                          </button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
                <div className="fw-bold mt-3">Referral Compensation</div>
                <small>This is the compensation for referrals</small>
                <div className="d-flex mt-3">
                  <div>
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
                  </div>
                </div>
                <hr className="m-0" />
                <div className="fw-bold mt-3 d-flex align-items-center">
                  <div> Area </div>
                  <button className="ml-2 btn btn-outline-primary btn-sm rounded">
                    Add New
                  </button>
                </div>
                <small className="my-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </small>
                <div className="row mt-2">
                  <div className="cl col-sm-12 col-md-6">
                    <ul className="list-group">
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Lorem ipsum dolor sit amet </div>
                        </span>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Lorem ipsum dolor sit amet </div>
                        </span>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Lorem ipsum dolor sit amet </div>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </RctCollapsibleCard>
        </div>
      </div>

      {/* customer care modal */}
      <Modal
        isOpen={customerCareModal}
        toggle={() => setCustomerCareModal(false)}
        size="sm"
      >
        <ModalHeader toggle={() => setCustomerCareModal(false)}>
          Add Customer Care Number
        </ModalHeader>
        <Form onSubmit={() => null}>
          <ModalBody>
            <FormGroup>
              <Label for="lastName">Number</Label>
              <Input
                type="text"
                name="name"
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
              Add Number
            </Button>
            <Button
              variant="contained"
              className="btn btn-outline-danger"
              onClick={() => setCustomerCareModal(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* cancellation reasons modal */}
      <Modal
        isOpen={cancellationReasonsModal}
        toggle={() => setCancellationReasonsModal(false)}
        size="sm"
      >
        <ModalHeader toggle={() => setCancellationReasonsModal(false)}>
          Add Cancellation reason
        </ModalHeader>
        <Form onSubmit={() => null}>
          <ModalBody>
            <FormGroup>
              <Label for="lastName">Reason</Label>
              <Input
                type="textarea"
                name="name"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">User Type</Label>
              <Input
                type="select"
                name="name"
                // value={customerCare}
                // onChange={onChange}
                required
              >
                <option>Driver</option>
                <option>Rider</option>
                <option>Both</option>
              </Input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              variant="contained"
              className="text-white btn-info mr-2"
            >
              Save
            </Button>
            <Button
              variant="contained"
              className="btn btn-outline-danger"
              onClick={() => setCancellationReasonsModal(false)}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default Others;
