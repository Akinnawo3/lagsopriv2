import React, {useEffect, useState} from "react";
import {Badge, Card, CardBody, Col, Row} from "reactstrap";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {connect} from "react-redux";
import {stringToNumber} from "Helpers/helpers";
import {Form, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Button} from "reactstrap";
import {
  createCustomerCare,
  createWaitingTime,
  createVerificationFee,
  deleteCustomerCare,
  getCustomerCare,
  updateCustomerCare,
  createSocialDriverFee,
  createCommercialDriverFee,
} from "Actions/customerCareAction";
import {verifyUserPermssion} from "../../../container/DefaultLayout";

const OneOffPayment = ({match, getCustomerCare, customerCareNumbers, createCustomerCare, createWaitingTime, createVerificationFee, createSocialDriverFee, createCommercialDriverFee, loading}) => {
  const [breakDownModalOpen, setBreakDownModalOpen] = useState(false);
  const [breakDownModalOpenLoan, setBreakDownModalOpenLoan] = useState(false);

  // non-loan driver total amount
  const [costAssetComm, setCostAssetComm] = useState("");

  // loan driver total amount
  const [costAssetSoc, setCostAssetSoc] = useState("");

  const [insurance, setInsurance] = useState("");
  const [dashcam, setDashcam] = useState("");
  const [softSkillsPlusOthers, setSoftSkillsPlusOthers] = useState("");
  const [lasdri, setLasdri] = useState("");
  const [dmsSub, setDmsSub] = useState("");
  const [eTaxi, setEtaxi] = useState("");

  const [insuranceLoan, setInsuranceLoan] = useState("");
  const [dashcamLoan, setDashcamLoan] = useState("");
  const [softSkillsPlusOthersLoan, setSoftSkillsPlusOthersLoan] = useState("");
  const [lasdriLoan, setLasdriLoan] = useState("");
  const [dmsSubLoan, setDmsSubLoan] = useState("");
  const [eTaxiLoan, setEtaxiLoan] = useState("");

  const updateOneOffPayment = async (e) => {
    e.preventDefault();
    setBreakDownModalOpen(false);
    setBreakDownModalOpenLoan(false);

    const general_payload = {
      cost_of_asset: "",
      insurance,
      dashcam,
      soft_skills_plus_others: softSkillsPlusOthers,
      lasdri,
      dms_subscription: dmsSub,
      e_taxi_sub: eTaxi,
    };
    const general_payload_loan = {
      cost_of_asset: "",
      insurance_loan: insuranceLoan,
      dashcam_loan: dashcamLoan,
      soft_skills_plus_others_loan: softSkillsPlusOthersLoan,
      lasdri_loan: lasdriLoan,
      dms_subscription_loan: dmsSubLoan,
      e_taxi_sub_loan: eTaxiLoan,
    };

    // to update for commercial driver take note of the cost_of_asset (thets were the ajor difference is)
    // NowNon-Loan Drivers
    await createCommercialDriverFee({
      ...general_payload,
      cost_of_asset: costAssetComm,
      total:
        stringToNumber(costAssetComm) +
        stringToNumber(insurance) +
        stringToNumber(dashcam) +
        stringToNumber(softSkillsPlusOthers) +
        stringToNumber(lasdri) +
        stringToNumber(dmsSub) +
        stringToNumber(eTaxi),
    });

    // to update for socail driver take note of the cost_of_asset (thets where the major difference is)
    //Now Loan Drivers
    await createSocialDriverFee({
      ...general_payload_loan,
      cost_of_asset: costAssetSoc,
      total:
        stringToNumber(costAssetSoc) +
        stringToNumber(insuranceLoan) +
        stringToNumber(dashcamLoan) +
        stringToNumber(softSkillsPlusOthersLoan) +
        stringToNumber(lasdriLoan) +
        stringToNumber(dmsSubLoan) +
        stringToNumber(eTaxiLoan),
    });
    // console.log({
    //   ...general_payload_loan,
    //   cost_of_asset: costAssetSoc,
    //   total:
    //     stringToNumber(costAssetSoc) +
    //     stringToNumber(insuranceLoan) +
    //     stringToNumber(dashcamLoan) +
    //     stringToNumber(softSkillsPlusOthersLoan) +
    //     stringToNumber(lasdriLoan) +
    //     stringToNumber(dmsSubLoan) +
    //     stringToNumber(eTaxiLoan),
    // });
  };

  const openBreakDownModal = (type) => {
    type === "non-loan" && setBreakDownModalOpen(true);
    type === "loan" && setBreakDownModalOpenLoan(true);
    console.log(customerCareNumbers?.com_driver_fee);

    setCostAssetComm(customerCareNumbers?.com_driver_fee?.cost_of_asset);
    setCostAssetSoc(customerCareNumbers?.soc_driver_fee?.cost_of_asset);

    // non loan extras
    setInsurance(customerCareNumbers?.com_driver_fee?.insurance);
    setDashcam(customerCareNumbers?.com_driver_fee?.dashcam);
    setSoftSkillsPlusOthers(customerCareNumbers?.com_driver_fee?.soft_skills_plus_others);
    setLasdri(customerCareNumbers?.com_driver_fee?.lasdri);
    setDmsSub(customerCareNumbers?.com_driver_fee?.dms_subscription);
    setEtaxi(customerCareNumbers?.com_driver_fee?.e_taxi_sub);
    //  loan extras
    setInsuranceLoan(customerCareNumbers?.soc_driver_fee?.insurance_loan);
    setDashcamLoan(customerCareNumbers?.soc_driver_fee?.dashcam_loan);
    setSoftSkillsPlusOthersLoan(customerCareNumbers?.soc_driver_fee?.soft_skills_plus_others_loan);
    setLasdriLoan(customerCareNumbers?.soc_driver_fee?.lasdri_loan);
    setDmsSubLoan(customerCareNumbers?.soc_driver_fee?.dms_subscription_loan);
    setEtaxiLoan(customerCareNumbers?.soc_driver_fee?.e_taxi_sub_loan);
  };

  useEffect(() => {
    getCustomerCare(true);
  }, []);

  return (
    <div className="row">
      <div className="col col-xs-12">
        <RctCollapsibleCard heading="One-off Payment" style={{minHeight: "70vh"}}>
          <div className="px-2 mt-1">
            <div className="row">
              {/* <div className="col col-sm-12 col-md-4 mr-3 d-flex flex-column"></div> */}

              <div className=" col-sm-12 col-md-6">
                <div>
                  <h3 className="fw-bold">Breakdown (Self Sponsored Drivers)</h3>
                  <Card className="text-primary bg-light p-2 mb-3">
                    <CardBody className="pb-0">
                      <div className="text-value text-left text-muted fw-bold">Total fee </div>
                    </CardBody>
                    <div className="chart-wrapper mx-3 d-flex align-items-center justify-content-between" style={{height: "70px"}}>
                      <span className="pr-2 font-xl" style={{fontSize: "2.5rem"}}>
                        {`₦${customerCareNumbers?.com_driver_fee?.total.toLocaleString()}`}
                      </span>
                    </div>
                  </Card>
                  <div className="text-muted">
                    Percentege of Cost of Asset
                    <ul className="list-group">
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> Self Sponsored Drivers </div>
                        </span>
                        <strong>{customerCareNumbers?.com_driver_fee?.cost_of_asset}</strong>
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
                        <strong>{customerCareNumbers?.com_driver_fee?.insurance}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Dashcam 1st month rent </div>
                        </span>
                        <strong>{customerCareNumbers?.com_driver_fee?.dashcam}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Soft Skill training,medicals,security check..</div>
                        </span>
                        <strong>{customerCareNumbers?.com_driver_fee?.soft_skills_plus_others}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> LASDRI </div>
                        </span>
                        <strong>{customerCareNumbers?.com_driver_fee?.lasdri}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> DMS Subscription </div>
                        </span>
                        <strong>{customerCareNumbers?.com_driver_fee?.dms_subscription}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> E-taxi License </div>
                        </span>
                        <strong>{customerCareNumbers?.com_driver_fee?.e_taxi_sub}</strong>
                      </li>
                    </ul>
                    <div classsName="d-flex mt-2">
                      {/* <button
                        className="btn border-info mr-3"
                        onClick={() => setParameterModalOpen(true)}
                      >
                        Add Parameter
                      </button> */}
                      <button className="btn border-info my-3" onClick={() => verifyUserPermssion("create_setup", () => openBreakDownModal("non-loan"))}>
                        Edit Breakdown
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" col-sm-12 col-md-6">
                <div>
                  <h3 className="fw-bold">Breakdown (Loan Drivers)</h3>
                  <Card className="text-primary bg-light p-2 mb-3">
                    <CardBody className="pb-0">
                      <div className="text-value text-muted fw-bold">Total Fee</div>
                    </CardBody>
                    <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{height: "70px"}}>
                      <span className=" font-xl" style={{fontSize: "2.5rem"}}>
                        {`₦${customerCareNumbers?.soc_driver_fee?.total.toLocaleString()}`}
                      </span>
                    </div>
                  </Card>
                  <div className="text-muted">
                    Percentege of Cost of Asset
                    <ul className="list-group">
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Loan Drivers </div>
                        </span>
                        <strong>{customerCareNumbers?.soc_driver_fee?.cost_of_asset}</strong>
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
                        <strong>{customerCareNumbers?.soc_driver_fee?.insurance_loan}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Dashcam 1st month rent </div>
                        </span>
                        <strong>{customerCareNumbers?.soc_driver_fee?.dashcam_loan}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div>Soft Skill training,medicals,security check..</div>
                        </span>
                        <strong>{customerCareNumbers?.soc_driver_fee?.soft_skills_plus_others_loan}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> LASDRI </div>
                        </span>
                        <strong>{customerCareNumbers?.soc_driver_fee?.lasdri_loan}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> DMS Subscription </div>
                        </span>
                        <strong>{customerCareNumbers?.soc_driver_fee?.dms_subscription_loan}</strong>
                      </li>
                      <li className="list-group-item text-right">
                        <span className="pull-left">
                          <div> E-taxi License </div>
                        </span>
                        <strong>{customerCareNumbers?.soc_driver_fee?.e_taxi_sub_loan}</strong>
                      </li>
                    </ul>
                    <div classsName="d-flex mt-2">
                      {/* <button
                        className="btn border-info mr-3"
                        onClick={() => setParameterModalOpen(true)}
                      >
                        Add Parameter
                      </button> */}

                      <button className="btn border-info btn-info mt-3 " onClick={() => verifyUserPermssion("create_setup", () => openBreakDownModal("loan"))}>
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

      {/*driver breakdown modal (non-loan)*/}
      <Modal isOpen={breakDownModalOpen} toggle={() => setBreakDownModalOpen(false)} size="md">
        <ModalHeader toggle={() => setBreakDownModalOpen(false)}>One-off fee Breakdown (Self Sponsored Drivers)</ModalHeader>
        <Form onSubmit={updateOneOffPayment}>
          <ModalBody>
            <small className="fw-bold">Percentage Cost of Asset</small>
            <FormGroup>
              {/* <Label for="lastName" > Driver (Non-loan Driver)</Label> */}
              <Input type="text" name="name" value={costAssetComm} onChange={(e) => setCostAssetComm(e.target.value)} required />
            </FormGroup>

            <small className="fw-bold mt-3">Others</small>
            <FormGroup>
              <Label for="lastName">Registration and Insurance</Label>
              <Input type="text" name="name" value={insurance} onChange={(e) => setInsurance(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Dashcam 1st month rent</Label>
              <Input type="text" name="number" value={dashcam} onChange={(e) => setDashcam(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Softskills training, medicals, security check..</Label>
              <Input type="text" name="number" value={softSkillsPlusOthers} onChange={(e) => setSoftSkillsPlusOthers(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">LASDRI</Label>
              <Input type="text" name="number" value={lasdri} onChange={(e) => setLasdri(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">DMS Subscription</Label>
              <Input type="text" name="number" value={dmsSub} onChange={(e) => setDmsSub(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">E-taxi License</Label>
              <Input type="text" name="number" value={eTaxi} onChange={(e) => setEtaxi(e.target.value)} required />
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

      {/*driver breakdown modal (loan)*/}
      <Modal isOpen={breakDownModalOpenLoan} toggle={() => setBreakDownModalOpenLoan(false)} size="md">
        <ModalHeader toggle={() => setBreakDownModalOpenLoan(false)}>One-off fee Breakdown (Loan Drivers)</ModalHeader>
        <Form onSubmit={updateOneOffPayment}>
          <ModalBody>
            <small className="fw-bold">Percentage Cost of Asset</small>

            <FormGroup>
              <Label for="lastName"> Driver (Loan Driver)</Label>
              <Input type="text" name="number" value={costAssetSoc} onChange={(e) => setCostAssetSoc(e.target.value)} required />
            </FormGroup>
            <small className="fw-bold mt-3">Others</small>
            <FormGroup>
              <Label for="lastName">Registration and Insurance</Label>
              <Input type="text" name="name" value={insuranceLoan} onChange={(e) => setInsuranceLoan(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Dashcam 1st month rent</Label>
              <Input type="text" name="number" value={dashcamLoan} onChange={(e) => setDashcamLoan(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Softskills training, medicals, security check..</Label>
              <Input type="text" name="number" value={softSkillsPlusOthersLoan} onChange={(e) => setSoftSkillsPlusOthersLoan(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">LASDRI</Label>
              <Input type="text" name="number" value={lasdriLoan} onChange={(e) => setLasdriLoan(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">DMS Subscription</Label>
              <Input type="text" name="number" value={dmsSubLoan} onChange={(e) => setDmsSubLoan(e.target.value)} required />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">E-taxi License</Label>
              <Input type="text" name="number" value={eTaxiLoan} onChange={(e) => setEtaxiLoan(e.target.value)} required />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" variant="contained" className="text-white  btn-info mr-2">
              Save Update
            </Button>
            <Button variant="contained" className="btn btn-outline-danger" onClick={() => setBreakDownModalOpenLoan(false)}>
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
    createVerificationFee: (verification_fee) => dispatch(createVerificationFee(verification_fee)),
    createSocialDriverFee: (soc_driver_fee) => dispatch(createSocialDriverFee(soc_driver_fee)),
    createCommercialDriverFee: (com_driver_fee) => dispatch(createCommercialDriverFee(com_driver_fee)),
  };
}

const mapStateToProps = (state) => ({
  customerCareNumbers: state.customerCare.customerCareNumbers,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(OneOffPayment);
