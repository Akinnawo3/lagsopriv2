import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {Button, Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import Spinner from "Components/spinner/Spinner";
import {sendVerificationRequest} from "../../actions/idVerificationAction";
import PageTitleBar from "../../components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "../../components/RctCollapsibleCard/RctCollapsibleCard";
import {VERIFICATION_RESULT} from "../../actions/types";

const IdVerification = ({match, loadingStatus, sendVerificationRequest, verificationResult, updateVerificationResult}) => {
  const [idNo, setIdNo] = useState("");
  const [idType, setIdType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await sendVerificationRequest(idType, idNo, firstName, lastName);
    if (res) {
      setIdNo("");
      setIdType("");
      setFirstName("");
      setLastName("");
    }
  };

  useEffect(() => {
    updateVerificationResult();
  }, []);

  const idTypes = [
    {name: "NIN", value: "nin"},
    {name: "DRIVING LICENCE", value: "driver_license"},
    {name: "LASSRA", value: "lassra"},
    {name: "LASDRI", value: "lasdri"},
  ];
  console.log(verificationResult);
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Id Verification"} match={match} />
      <div className="row">
        <div className="col col-xs-12 col-md-10">
          <RctCollapsibleCard style={{minHeight: ""}}>
            <Row>
              <Col md={5}>
                <Form onSubmit={onSubmit}>
                  <FormGroup>
                    <Label for="firstName">Id Number</Label>
                    <Input type="text" name="idNo" value={idNo} onChange={(e) => setIdNo(e.target.value)} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="firstName">Id Type</Label>
                    <Input type="select" name="idNo" value={idType} onChange={(e) => setIdType(e.target.value)} required>
                      <option selected hidden value="">
                        -- Select Id Type --
                      </option>
                      {idTypes.map((item, id) => (
                        <option key={id} value={item.value}>
                          {item.name}
                        </option>
                      ))}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>First Name</Label>
                    <Input type="text" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  </FormGroup>

                  <Button disabled={loadingStatus} type="submit" variant="contained" className="text-white btn-success mb-3">
                    Submit
                  </Button>
                </Form>
              </Col>
              <Col md={7}>
                {loadingStatus && (
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <Spinner />
                    <h3 className="fw-bold mt-3">verifying id </h3>
                  </div>
                )}
                {!loadingStatus && (
                  <div>
                    {/* {isTest && (
                      <div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <div className="fw-bold text-danger">This is test enironment so there is no verification API call </div>
                        </div>
                        <div className="mt-2 text-right">
                          <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                            Verify {idVerificationType(idType)}
                          </button>
                        </div>
                      </div>
                    )} */}
                    {verificationResult?.status === "error" && (
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="fw-bold text-danger">{verificationResult?.msg} </div>
                      </div>
                    )}
                    {verificationResult?.status === "error" && (
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="fw-bold text-danger">{verificationResult?.message} </div>
                      </div>
                    )}
                    {verificationResult?.status === "success" && (
                      <div>
                        <ul className="list-group">
                          <div className="rounded rounded-circle">
                            <img src={`data:image/png;base64, ${verificationResult?.data?.photo}`} alt="Red dot" />
                            {/* <img alt="" src={verificationResult?.data?.photo} /> */}
                          </div>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Name</strong>
                            </span>
                            {`${verificationResult?.data?.firstname} ${verificationResult?.data?.middlename} ${verificationResult?.data?.lastname}`}
                          </li>

                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>First Name Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.data?.firstname?.toUpperCase() === firstName.toUpperCase() ? "Yes" : "No"} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Last Name Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.data?.lastname?.toUpperCase() === lastName?.toUpperCase() ? "Yes" : "No"} `}
                          </li>
                          {/* <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Phone Number Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.data?.phone === driver?.phone_number ? "Yes" : "No"} `}
                          </li> */}
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Birth Date</strong>
                            </span>
                            {`${verificationResult?.data?.birthdate} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Gender</strong>
                            </span>
                            {`${verificationResult?.data?.gender} `}
                          </li>
                          {idType === "driver_licence" && (
                            <li className="list-group-item text-right">
                              <span className="pull-left">
                                <strong>Expiry Date</strong>
                              </span>
                              {`${verificationResult?.data?.expiryDate}`}
                            </li>
                          )}
                          {/* <div className="mt-2 text-right">
                            <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                              Verify {idVerificationType(idType)}
                            </button>
                          </div> */}
                        </ul>
                      </div>
                    )}
                    {/* status "1" is for lasdri when valid status 
              status "0" is for lasdri when valid but expired */}
                    {(verificationResult?.status === "1" || verificationResult?.status === "0") && (
                      <div>
                        <ul className="list-group">
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Message</strong>
                            </span>
                            {`${verificationResult?.message}`}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Name</strong>
                            </span>
                            {`${verificationResult?.f_name} ${verificationResult?.m_name} ${verificationResult?.surname}`}
                          </li>

                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>First Name Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.f_name?.toUpperCase() === firstName?.toUpperCase() ? "Yes" : "No"} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Last Name Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.surname?.toUpperCase() === lastName?.toUpperCase() ? "Yes" : "No"} `}
                          </li>
                          {/* <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Phone Number Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.phone_no === driver?.phone_number ? "Yes" : "No"} `}
                          </li> */}

                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>DATE OF BIRTH</strong>
                            </span>
                            {`${verificationResult?.dob} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>PHONE NUMBER</strong>
                            </span>
                            {`${verificationResult?.phone_no} `}
                          </li>
                        </ul>
                        {/* <div className="mt-2 text-right">
                          <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                            Verify {idVerificationType(idType)}
                          </button>
                        </div> */}
                      </div>
                    )}
                    {/* status "00" is for lassra when valid */}
                    {verificationResult?.code === "00" && (
                      <div>
                        <ul className="list-group">
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Message</strong>
                            </span>
                            {`${verificationResult?.message}`}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>NAME</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.firstName} ${verificationResult?.biographicData[0]?.middleName} ${verificationResult?.biographicData[0]?.surname}`}
                          </li>

                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>First Name Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.firstName?.toUpperCase() === firstName.toUpperCase() ? "Yes" : "No"} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Last Name Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.surname?.toUpperCase() === firstName?.toUpperCase() ? "Yes" : "No"} `}
                          </li>
                          {/* <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>Phone Number Matches Reg. Details</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.phoneNumber === "+234" + driver?.phone_number.substring(1) ? "Yes" : "No"} `}
                          </li> */}

                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>GENDER</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.gender} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>DATE OF BIRTH</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.dob} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>PHONE NUMBER</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.phoneNumber} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>EMAIL</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.email} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>ADDRESS</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.houseNo} ${verificationResult?.biographicData[0]?.streetName} ${verificationResult?.biographicData[0]?.town} `}
                          </li>
                          <li className="list-group-item text-right">
                            <span className="pull-left">
                              <strong>L.G.A</strong>
                            </span>
                            {`${verificationResult?.biographicData[0]?.lga} `}
                          </li>
                        </ul>
                        {/* <div className="mt-2 text-right">
                          <button className=" btn rounded btn-primary" onClick={() => verifyId(idType)}>
                            Verify {idVerificationType(idType)}
                          </button>
                        </div> */}
                      </div>
                    )}
                    {/* to handle internal server error */}
                    {Object.keys(verificationResult).length !== 0 && verificationResult?.code === undefined && (
                      <div>
                        <ul className="list-group">
                          <li className="list-group-item text-center">
                            <div className="text-danger fw-bold">{`${verificationResult}`}</div>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </Col>
            </Row>
          </RctCollapsibleCard>
        </div>
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    sendVerificationRequest: (id_type, id_value, first_name, last_name) => dispatch(sendVerificationRequest(id_type, id_value, first_name, last_name)),
    updateVerificationResult: () =>
      dispatch({
        type: VERIFICATION_RESULT,
        payload: {},
      }),
  };
}

const mapStateToProps = (state) => ({
  loadingStatus: state.loading.loadingStatus,
  verificationResult: state.idVerification.verificationResult,
});
export default connect(mapStateToProps, mapDispatchToProps)(IdVerification);
