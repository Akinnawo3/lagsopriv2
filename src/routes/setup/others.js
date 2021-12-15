import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Button} from "reactstrap";
import {connect} from "react-redux";

import Areas from "Routes/area/areas";
import CancellationReasons from "Routes/cancellationReasons/cancellationReasons";
import {createCustomerCare, createWaitingTime, deleteCustomerCare, getCustomerCare, updateCustomerCare, createSocialDriverFee, createCommercialDriverFee} from "Actions/customerCareAction";
import {verifyUserPermssion} from "../../container/DefaultLayout";

const Others = ({match, createCustomerCare, createWaitingTime, getCustomerCare, customerCareNumbers, loading}) => {
  const {waiting_time} = customerCareNumbers;
  const [customerCareModal, setCustomerCareModal] = useState(false);
  const [customercareNumber, setCustomercareNumber] = useState();
  const [waitingTimeModal, setWaitingTimeModal] = useState(false);
  const [waitingTime, setWaitingTime] = useState("");

  useEffect(() => {
    getCustomerCare(true);
  }, []);

  // console.log(customerCareNumbers?.customer_care_line[0]?.split(","));
  console.log(waitingTime);

  const updateCustomerCareNumber = (e) => {
    e.preventDefault();
    setCustomerCareModal(false);
    createCustomerCare(customercareNumber);
  };

  const updateWaitingTime = (e) => {
    e.preventDefault();
    setWaitingTimeModal(false);
    createWaitingTime(waitingTime);
  };
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Others"} match={match} />
      {/* {!loading && ( */}
      <div className="row">
        <div className="col col-xs-12 col-md-10">
          <RctCollapsibleCard style={{minHeight: "70vh"}}>
            <div className="row">
              <div className="col col-sm-12 col-md-10">
                <div className="fw-bold">Customer Lines</div>

                <div className="d-flex mt-3">
                  <div>
                    <FormGroup>
                      <Label for="lastName">Customer Care Line</Label>
                      <Input type="text" name="number" value={customerCareNumbers.customer_care_line[0]} required />
                    </FormGroup>

                    {/* {customerCareNumbers?.customer_care_line[0]
                      ?.split(",")
                      .map((item, index) => {
                        <FormGroup key={index}>
                          <Label for="lastName">{`Line ${index + 1}`}</Label>
                          <Input
                            type="text"
                            name="number"
                            value={item}
                            required
                          />
                        </FormGroup>;
                      })} */}
                  </div>
                  <div className="ml-3 mt-1 ">
                    <Button variant="contained" className="btn btn-outline-primary mt-4" onClick={() => verifyUserPermssion("create_setup", () => setCustomerCareModal(true))}>
                      Update
                    </Button>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="fw-bold mt-3">Total Waiting Time</div>

                <div className="d-flex mt-3">
                  <div>
                    <Form>
                      <div>
                        <Form onSubmit={updateWaitingTime} className="d-flex align-items-center">
                          <FormGroup>
                            <Label for="lastName">Waiting Time</Label>
                            <Input type="text" name="number" value={customerCareNumbers.waiting_time} onChange={(e) => setWaitingTime(e.target.value)} required />
                          </FormGroup>
                          <Button variant="contained" className="btn btn-outline-primary mt-2 ml-2" onClick={() => verifyUserPermssion("create_setup", () => setWaitingTimeModal(true))}>
                            Update
                          </Button>
                        </Form>
                      </div>
                    </Form>
                  </div>
                </div>
                <hr className="m-0" />
                <div className="fw-bold mt-3 ">
                  <div> Cancellation Reasons</div>
                  <CancellationReasons />
                </div>

                {/* <hr className="m-0 mb-3" /> */}
                {/* <div className="fw-bold my-2">Areas</div> */}
                {/* <Areas /> */}
              </div>
            </div>
          </RctCollapsibleCard>
        </div>
      </div>
      {/* )} */}

      {/* customer care modal */}
      <Modal isOpen={customerCareModal} toggle={() => setCustomerCareModal(false)} size="sm">
        <ModalHeader toggle={() => setCustomerCareModal(false)}>Add Customer Care Number</ModalHeader>
        <Form onSubmit={updateCustomerCareNumber}>
          <ModalBody>
            <FormGroup>
              <Label for="lastName">Number</Label>
              <Input
                type="text"
                name="name"
                // value={customerCare}
                onChange={(e) => setCustomercareNumber(e.target.value)}
                required
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-info mr-2">
              Add Number
            </Button>
            <Button variant="contained" className="btn btn-outline-danger" onClick={() => setCustomerCareModal(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* waiting time modal */}
      <Modal isOpen={waitingTimeModal} toggle={() => setWaitingTimeModal(false)} size="sm">
        <ModalHeader toggle={() => setWaitingTimeModal(false)}>Update Waiting Time</ModalHeader>
        <Form onSubmit={updateWaitingTime}>
          <ModalBody>
            <FormGroup>
              <Label for="lastName">Waiting Time (Minutes)</Label>
              <Input
                type="text"
                name="name"
                // value={customerCare}
                onChange={(e) => setWaitingTime(e.target.value)}
                required
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-info mr-2">
              Update Time
            </Button>
            <Button variant="contained" className="btn btn-outline-danger" onClick={() => setWaitingTimeModal(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getCustomerCare: (spinner) => dispatch(getCustomerCare(spinner)),
    createCustomerCare: (customer_care) => dispatch(createCustomerCare(customer_care)),
    createWaitingTime: (waiting_time) => dispatch(createWaitingTime(waiting_time)),
  };
}

const mapStateToProps = (state) => ({
  customerCareNumbers: state.customerCare.customerCareNumbers,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Others);
