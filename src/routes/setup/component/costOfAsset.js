import React, {useEffect, useState} from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Button} from "reactstrap";
import {Badge, Card, CardBody, Col, Row} from "reactstrap";
import {connect} from "react-redux";
import {createCostOfAsset, getCustomerCare} from "Actions/customerCareAction";
import {verifyUserPermssion} from "../../../container/DefaultLayout";

const CostOfAsset = ({getCustomerCare, customerCareNumbers, createCostOfAsset}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [amount, setAmount] = useState("");
  const updateAsset = () => {
    setAmount(customerCareNumbers?.asset_amount);
    setModalOpen(true);
  };
  useEffect(() => {
    getCustomerCare(true);
  }, []);

  const updateReferralBonus = (e) => {
    e.preventDefault();
    setModalOpen(false);
    createCostOfAsset(amount);
  };

  console.log(customerCareNumbers?.asset_amount);

  return (
    <div className="row">
      <div className="col col-xs-12 col-md-9">
        <RctCollapsibleCard heading="Total Cost of Asset" style={{minHeight: "70vh"}}>
          <div className="px-2">
            <div className="row mt-4">
              <div className="cl col-sm-12 col-md-6">
                <Card className="text-primary bg-light p-2 mb-4 w-75">
                  <CardBody className="pb-0">
                    <div className="text-value text-left text-muted fw-bold">Total </div>
                  </CardBody>
                  <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-between" style={{height: "60px"}}>
                    <span className="pr-2 font-xl" style={{fontSize: "2.5rem"}}>
                      {` ₦${customerCareNumbers?.asset_amount}`}
                    </span>
                  </div>
                </Card>

                <div classsName="d-flex mt-3">
                  <button className="btn btn-info " onClick={() => verifyUserPermssion("create_setup", updateAsset)}>
                    Update Fee
                  </button>
                </div>
              </div>
            </div>
          </div>
        </RctCollapsibleCard>
      </div>

      <Modal isOpen={modalOpen} toggle={() => setModalOpen(false)} size="sm">
        <ModalHeader toggle={() => setModalOpen(false)}>Update Fee</ModalHeader>
        <Form onSubmit={updateCostOfAsset}>
          <ModalBody>
            <FormGroup>
              <Label for="lastName">Amount</Label>
              <Input type="text" name="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white btn-info mr-2">
              Update
            </Button>
            <Button variant="contained" className="btn btn-outline-danger" onClick={() => setModalOpen(false)}>
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
    createCostOfAsset: (asset_amount) => dispatch(createCostOfAsset(asset_amount)),
  };
}

const mapStateToProps = (state) => ({
  customerCareNumbers: state.customerCare.customerCareNumbers,
});
export default connect(mapStateToProps, mapDispatchToProps)(CostOfAsset);
