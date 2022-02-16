import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Button, Row, Col} from "reactstrap";
import {getRevenueSplitData, updateRevenueSplitData} from "Actions/revenueSplitAction";
import {connect} from "react-redux";
import {verifyUserPermssion} from "../../container/DefaultLayout";

const PaymentsServiceComponent = ({match, getRevenueSplitData, revenueSplitData, updateRevenueSplitData}) => {
  useEffect(() => {
    getRevenueSplitData();
  }, []);

  const [parameterModalOpen, setParameterModalOpen] = useState(false);
  const [breakDownModalOpen, setBreakDownModalOpen] = useState(false);

  const [dailyTax, setDailyTax] = useState("");
  const [refleeting, setRefleeting] = useState("");
  const [techCo, setTechCo] = useState("");
  const [assetCo, setAssetCo] = useState("");
  const [comms, setComms] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [commercialDebtService, setCommercialDebtService] = useState("");
  const [socialDebtService, setSocialDebtService] = useState("");

  const updateValues = (e) => {
    e.preventDefault();
    setBreakDownModalOpen(false);
    const data = {
      commercial_debt_service: commercialDebtService,
      social_debt_service: socialDebtService,
      daily_tax: dailyTax,
      refleeting,
      tech_co: techCo,
      asset_co: assetCo,
      comms,
      maintenance,
    };
    updateRevenueSplitData(data);
  };

  const openBreakDownModal = () => {
    setBreakDownModalOpen(true);
    setCommercialDebtService(revenueSplitData.commercial_debt_service);
    setSocialDebtService(revenueSplitData.social_debt_service);
    setMaintenance(revenueSplitData.maintenance);
    setDailyTax(revenueSplitData.daily_tax);
    setRefleeting(revenueSplitData.refleeting);
    setTechCo(revenueSplitData.tech_co);
    setAssetCo(revenueSplitData.asset_co);
    setComms(revenueSplitData.comms);
  };

  return (
    <div className="table-wrapper">
      <div className="row">
        <div className="col col-xs-12 col-md-8">
          <RctCollapsibleCard heading="Revenue Split" style={{minHeight: "70vh"}}>
            <div className="px-2">
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
                            <strong>{` ₦${revenueSplitData?.commercial_debt_service}`}</strong>
                          </div>
                        </li>
                        <li className="ml-3">
                          <div className="d-flex justify-content-between">
                            <div>Social Driver</div>
                            <strong>{` ₦${revenueSplitData?.social_debt_service}`}</strong>
                          </div>
                        </li>
                      </ol>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Dail LASG Tax</div>
                        <strong>{` ₦${revenueSplitData?.daily_tax}`}</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Tec co</div>
                        <strong>{revenueSplitData?.tech_co}</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Re-fleeting</div>
                        <strong>{revenueSplitData?.refleeting}</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Asset co</div>
                        <strong>{revenueSplitData?.asset_co}</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Communication</div>
                        <strong>{revenueSplitData?.comms}</strong>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex justify-content-between">
                        <div>Maintenance and Insurance</div>
                        <strong>{revenueSplitData?.maintenance}</strong>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
              <div classsName="d-flex">
                <button className="btn btn-info mr-3" onClick={() => verifyUserPermssion("create_setup", openBreakDownModal)}>
                  Edit
                </button>
                {/* <button
                  className="btn border-info px-3"
                  onClick={() => setParameterModalOpen(true)}
                >
                  Add Stakeholder
                </button> */}
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
              <Button type="submit" variant="contained" className="text-white btn-info mr-2">
                Add Parameter
              </Button>
              <Button variant="contained" className="btn btn-outline-danger" onClick={() => setParameterModalOpen(false)}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>

        {/* breakdoen modal     */}
        <Modal isOpen={breakDownModalOpen} toggle={() => setBreakDownModalOpen(false)} size="md" scrollable>
          <ModalHeader toggle={() => setBreakDownModalOpen(false)}>Update fee</ModalHeader>
          <Form onSubmit={updateValues}>
            <ModalBody>
              <Row>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Commercial Driver</Label>
                    <Input type="number" name="name" value={commercialDebtService} onChange={(e) => setCommercialDebtService(e.target.value)} required />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Social Driver</Label>
                    <Input type="text" name="number" value={socialDebtService} onChange={(e) => setSocialDebtService(e.target.value)} required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Daily LASG Tax</Label>
                    <Input type="text" name="number" value={dailyTax} onChange={(e) => setDailyTax(e.target.value)} required />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Tech co</Label>
                    <Input type="text" name="number" value={techCo} onChange={(e) => setTechCo(e.target.value)} required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Re-fleeting</Label>
                    <Input type="text" name="number" value={refleeting} onChange={(e) => setRefleeting(e.target.value)} required />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Asset co</Label>
                    <Input type="text" name="number" value={assetCo} onChange={(e) => setAssetCo(e.target.value)} required />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Communication</Label>
                    <Input type="text" name="number" value={comms} onChange={(e) => setComms(e.target.value)} required />
                  </FormGroup>
                </Col>
                <Col sm="12" md="6">
                  <FormGroup>
                    <Label for="lastName">Maintenance and Insurance</Label>
                    <Input type="text" name="number" value={maintenance} onChange={(e) => setMaintenance(e.target.value)} required />
                  </FormGroup>
                </Col>
              </Row>
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
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getRevenueSplitData: (spinner) => dispatch(getRevenueSplitData(spinner)),
    updateRevenueSplitData: (data) => dispatch(updateRevenueSplitData(data)),
  };
}

const mapStateToProps = (state) => ({
  revenueSplitData: state.revenueSplit.revenueSplitData,
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsServiceComponent);
