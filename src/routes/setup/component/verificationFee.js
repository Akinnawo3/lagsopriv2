import React, {useEffect, useState} from "react";
import {Badge, Card, CardBody, Col, Row} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {stringToNumber} from "Helpers/helpers";
import {Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Button} from "reactstrap";

import {createVerificationFee, getCustomerCare} from "Actions/customerCareAction";
import {connect} from "react-redux";
import {verifyUserPermssion} from "../../../container/DefaultLayout";

const VerificationFee = ({getCustomerCare, customerCareNumbers, createVerificationFee}) => {
  const [parameterModalOpen, setParameterModalOpen] = useState(false);
  const [breakDownModalOpen, setBreakDownModalOpen] = useState(false);

  const [driverLicence, setDriverLicence] = useState("");
  const [nin, setNin] = useState("");
  const [lassra, setLassra] = useState("");
  const [lasdri, setlasdri] = useState("");
  const [medicalsAndsSecurity, setMedicalsAndSecurity] = useState("");

  useEffect(() => {
    getCustomerCare(true);
  }, []);

  const updateVerificationFee = (e) => {
    e.preventDefault();
    setBreakDownModalOpen(false);
    createVerificationFee({
      driver_licence: driverLicence,
      nin,
      lassra,
      lasdri,
      medicalsAndsSecurity,
      total: stringToNumber(driverLicence) + stringToNumber(nin) + stringToNumber(lassra) + stringToNumber(lasdri) + stringToNumber(medicalsAndsSecurity),
    });
  };

  const editBreakDdown = () => {
    setBreakDownModalOpen(true);
    setDriverLicence(customerCareNumbers?.verification_fee.driver_licence);
    setNin(customerCareNumbers?.verification_fee.nin);
    setLassra(customerCareNumbers?.verification_fee.lassra);
    setlasdri(customerCareNumbers?.verification_fee.lasdri);
    setMedicalsAndSecurity(customerCareNumbers?.verification_fee.medicalsAndsSecurity);
  };

  return (
    <div className="row">
      <div className="col col-xs-12 col-md-9">
        <RctCollapsibleCard heading="Verification Fee" style={{minHeight: "70vh"}}>
          <div className="px-2">
            <div className="row mt-4">
              <div className="cl col-sm-12 col-md-6">
                <Card className="text-primary bg-light p-2 mb-4 w-75">
                  <CardBody className="pb-0">
                    <div className="text-value text-left text-muted fw-bold">Total</div>
                  </CardBody>
                  <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-between" style={{height: "60px"}}>
                    <span className="pr-2 font-xl" style={{fontSize: "2.5rem"}}>
                      {` ???${customerCareNumbers?.verification_fee?.total?.toLocaleString()}`}
                    </span>
                  </div>
                </Card>
                <div className="fw-bold text-muted ">Breakdown</div>
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Drivers' License Verification </div>
                    </span>
                    <strong>{`${customerCareNumbers?.verification_fee?.driver_licence}`}</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>NIN Verification </div>
                    </span>
                    <strong>{`${customerCareNumbers?.verification_fee?.nin}`}</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>LASSRA Verification </div>
                    </span>
                    <strong>{`${customerCareNumbers?.verification_fee?.lassra}`}</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>LASDRI Verification </div>
                    </span>
                    <strong>{`${customerCareNumbers?.verification_fee?.lasdri}`}</strong>
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <div>Medicals and security check </div>
                    </span>
                    <strong>{`${customerCareNumbers?.verification_fee?.medicalsAndsSecurity}`}</strong>
                  </li>
                </ul>
                <div classsName="d-flex mt-3">
                  {/* <button
                    className="btn border-info mr-3"
                    onClick={() => setParameterModalOpen(true)}
                  >
                    Add Parameter
                  </button> */}
                  <button className="btn btn-info " onClick={() => verifyUserPermssion("create_setup", editBreakDdown)}>
                    Edit Breakdown
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RctCollapsibleCard>
      </div>

      {/* parameter modal */}
      <Modal isOpen={parameterModalOpen} toggle={() => setParameterModalOpen(false)} size="sm">
        <ModalHeader toggle={() => setParameterModalOpen(false)}>Add Parameter</ModalHeader>
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
            <Button type="submit" variant="contained" className="text-white btn-info mr-2">
              Add Parameter
            </Button>
            <Button variant="contained" className="btn btn-outline-danger" onClick={() => setParameterModalOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      {/* breakdown modal     */}
      <Modal isOpen={breakDownModalOpen} toggle={() => setBreakDownModalOpen(false)} size="md" scrollable>
        <ModalHeader toggle={() => setBreakDownModalOpen(false)}>Edit Verification Fee Breakdown</ModalHeader>
        <Form onSubmit={updateVerificationFee}>
          <ModalBody>
            <FormGroup>
              <Label for="lastName">Drivers' License Verification</Label>
              <Input type="text" name="name" value={driverLicence} onChange={(e) => setDriverLicence(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">NIN Verification</Label>
              <Input type="text" name="number" value={nin} onChange={(e) => setNin(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">LASSRA Verification</Label>
              <Input type="text" name="number" value={lassra} onChange={(e) => setLassra(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">LASDRI Verification</Label>
              <Input type="text" name="number" value={lasdri} onChange={(e) => setlasdri(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Medicals and Security Check</Label>
              <Input type="text" name="number" value={medicalsAndsSecurity} onChange={(e) => setMedicalsAndSecurity(e.target.value)} required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white  btn-info mr-2">
              Save Update
            </Button>
            <Button variant="contained" className="btn btn-outline-danger" onClick={() => setBreakDownModalOpen(false)}>
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
    createVerificationFee: (verification_fee) => dispatch(createVerificationFee(verification_fee)),
  };
}

const mapStateToProps = (state) => ({
  customerCareNumbers: state.customerCare.customerCareNumbers,
});

export default connect(mapStateToProps, mapDispatchToProps)(VerificationFee);
