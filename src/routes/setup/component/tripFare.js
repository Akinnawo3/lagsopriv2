import React, { useEffect, useState } from "react";
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

const TripFare = () => {
  const [parameterModalOpen, setParameterModalOpen] = useState(false);
  const [breakDownModalOpen, setBreakDownModalOpen] = useState(false);
  return (
    <div className="row">
      <div className="col col-xs-12 col-md-9">
        <RctCollapsibleCard heading="Trip Fare" style={{ minHeight: "70vh" }}>
          <div className="px-2">
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint
            </small>
            <div className="row mt-4">
              <div className="cl col-sm-12 col-md-6">
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Base </div>
                    </span>
                    <strong>220</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Waiting </div>
                    </span>
                    <strong>50</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Distance </div>
                    </span>
                    <strong>81.4</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Time </div>
                    </span>
                    <strong>27.0</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Delay </div>
                    </span>
                    <strong>48.6</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Toll </div>
                    </span>
                    <strong>100</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Tax </div>
                    </span>
                    <strong>20</strong>
                  </li>
                </ul>
              </div>
            </div>
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
        scrollable
      >
        <ModalHeader toggle={() => setBreakDownModalOpen(false)}>
          Update Trip Fare
        </ModalHeader>
        <Form onSubmit={() => null}>
          <ModalBody>
            <FormGroup>
              <Label for="lastName">Base</Label>
              <Input
                type="text"
                name="name"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Waiting</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Distance</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Time</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Delay</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Toll</Label>
              <Input
                type="text"
                name="number"
                // value={customerCare}
                // onChange={onChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Tax</Label>
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

export default TripFare;
