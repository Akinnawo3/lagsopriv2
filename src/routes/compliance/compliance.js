import React, {useState, useEffect, Fragment, useRef} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {Col, Row} from "reactstrap";
import DougnutProjection from "./components/doughnut";

const Compliance = ({match}) => {
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Compliance"} match={match} />
      <Row>
        <Col md={8}>
          <Row>
            <Col md={4}>
              <DougnutProjection />
            </Col>
            <Col md={8}>Line Graph</Col>
            <Col>Table</Col>
          </Row>
        </Col>
        <Col md={4}>Lines</Col>
      </Row>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    // getUsers: (page_no, loading, start_date, end_date) => dispatch(getUsers(page_no, loading, start_date, end_date)),
    // deleteUser: (auth_id, users) => dispatch(deleteUser(auth_id, users)),
    // getUserCount: (start_date, end_date) => dispatch(getUserCount(start_date, end_date)),
    // getUserExport: (user_type, driver_category, driver_account_status, start_date, end_date) => dispatch(getUserExport(user_type, driver_category, driver_account_status, start_date, end_date)),
    // searchUsers: (searchData) => dispatch(searchUsers(searchData)),
    // ResetUserDetails: (body, emailData) => dispatch(ResetUserDetails(body, emailData)),
    // changeKycStatus: (auth_id, kyc_status) => dispatch(changeKycStatus(auth_id, kyc_status)),
    // sendVerificationRequest: (id_type, id_value, first_name, last_name) => dispatch(sendVerificationRequest(id_type, id_value, first_name, last_name)),
  };
}

const mapStateToProps = (state) => ({
  //   users: state.users.users,
  //   userCount: state.users.userCount,
  //   loading: state.loading.loading,
  //   loadingStatus: state.loading.loadingStatus,
  //   dataMode: state.authUser.userProfile.data_mode,
  //   verificationResult: state.idVerification.verificationResult,
});

export default connect(mapStateToProps, mapDispatchToProps)(Compliance);
