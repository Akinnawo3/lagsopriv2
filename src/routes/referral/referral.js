import React, {useState, useEffect, Fragment} from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Badge, Input, Modal, ModalBody} from "reactstrap";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";
import Spinner from "Components/spinner/Spinner";
const qs = require("qs");

import {getReferral, getReferralCount, getReferralPaymentDetails} from "Actions/referrerAction";
import EmptyData from "Components/EmptyData/EmptyData";
import Pagination from "react-js-pagination";
import {calculatePostDate} from "../../helpers/helpers";

const Referral = ({history, match, referrals, referralCount, getReferral, getReferralCount, getReferralPaymentDetails, referralPaymentDetails, loading}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    if (pageFromQuery === undefined || referrals.length < 1) {
      getReferral(currentPage, true);
      getReferralCount();
    }
  }, []);

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getReferral(pageNumber);
    window.scrollTo(0, 0);
  };

  const showReferralDetails = async (referalID) => {
    setLoadingDetails(true);
    setIsOpen(true);
    await getReferralPaymentDetails(referalID);
    setLoadingDetails(false);
  };

  console.log(referralPaymentDetails);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Referral"} match={match} />
      {!loading && referrals.length > 0 && (
        <RctCollapsibleCard heading="Referrals" fullBlock style={{minHeight: "70vh"}}>
          <div className="d-flex align-items-center justify-content-between">
            <div className="float-right d-flex align-items-center p-3"></div>
          </div>
          <div className="table-responsive" style={{minHeight: "50vh"}}>
            <Table>
              <TableHead>
                <TableRow hover>
                  <TableCell>Date</TableCell>
                  <TableCell>Referrer Name</TableCell>
                  <TableCell>Referrer Number</TableCell>
                  <TableCell>Referee Name</TableCell>
                  <TableCell>Referee Number</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <Fragment>
                  {referrals.map((item, key) => (
                    <TableRow hover key={item.id}>
                      <TableCell>{calculatePostDate(item?.createdAt)}</TableCell>
                      <TableCell>{item.referrer.first_name + " " + item.referrer.last_name}</TableCell>
                      <TableCell>{item.referrer.phone_number}</TableCell>
                      <TableCell>{item.referee.first_name + " " + item.referee.last_name}</TableCell>
                      <TableCell>{item.referee.phone_number}</TableCell>
                      <TableCell>
                        <Badge color={item.status === 0 ? "warning" : "success"}>{item.status === 0 ? "Pending" : "Confirmed"}</Badge>
                      </TableCell>
                      {/* <TableCell>{item.status === 1 && <i className="ti-eye" onClick={() => showReferralDetails(item.referral_id)} />}</TableCell> */}
                      <TableCell>
                        <i className="ti-eye" onClick={() => showReferralDetails(item.referral_id)} />
                      </TableCell>
                    </TableRow>
                  ))}
                </Fragment>
              </TableBody>
            </Table>
          </div>
          <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
            <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={referralCount} onChange={paginate} />
          </div>
        </RctCollapsibleCard>
      )}

      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalBody className="p-4" style={{minHeight: "250px"}}>
          <div style={{color: "#2E407B"}}>Transaction Details</div>
          <div style={{marginTop: "40px", color: "#898888", fontSize: "12px"}}>
            {loadingDetails && <Spinner />}
            {!loadingDetails && referralPaymentDetails && (
              <div>
                <ul className="list-group">
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Amount</strong>
                    </span>
                    {referralPaymentDetails?.amount}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Referee ID</strong>
                    </span>
                    {referralPaymentDetails?.referee_id}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Referee Number</strong>
                    </span>
                    {referralPaymentDetails?.referee_number}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Referee Trip Amount</strong>
                    </span>
                    {referralPaymentDetails?.referee_trip_data.amount}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Referee Trip ID</strong>
                    </span>
                    {referralPaymentDetails?.referee_trip_data.trip_id}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Referee Trip Reference</strong>
                    </span>
                    {referralPaymentDetails?.referee_trip_data.trip_ref}
                  </li>
                  <li className="list-group-item text-right">
                    <span className="pull-left">
                      <strong>Referrer ID</strong>
                    </span>
                    {referralPaymentDetails?.referrer_id}
                  </li>
                </ul>
              </div>
            )}
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getReferral: (page_no, spinner) => dispatch(getReferral(page_no, spinner)),
    getReferralCount: () => dispatch(getReferralCount()),
    getReferralPaymentDetails: (referralID) => dispatch(getReferralPaymentDetails(referralID)),
  };
}

const mapStateToProps = (state) => ({
  referrals: state.referrals.referrals,
  referralCount: state.referrals.referralCount,
  referralPaymentDetails: state.referrals.referralPaymentDetails,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Referral);
