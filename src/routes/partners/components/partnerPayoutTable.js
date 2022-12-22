import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import Pagination from "react-js-pagination";
import EmptyData from "Components/EmptyData/EmptyData";
import { useHistory } from "react-router-dom";
import { getPartnerPayout, getPartnerPayoutCount } from "Actions/partnersAction";
import { getCashoutStatus, getCashoutStatusColor } from "Helpers/helpers";
import { Badge, Card, CardBody, Col, Row } from "reactstrap";

const qs = require("qs");

const PartnerDriverTable = ({ payouts, isLoading, payoutsCount, getPartnerPayout, partner_id, header, getPartnerPayoutCount,getWalletBalance,wallet }) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, { ignoreQueryPrefix: true }).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getPartnerPayout(partner_id, pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getPartnerPayout(partner_id, currentPage);
    getPartnerPayoutCount(partner_id);
    getWalletBalance(partner_id);
  }, [partner_id]);

  console.log(payouts, "oooooooo");

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{ minHeight: "70vh" }}>
        <Row className="my-4">
          {/* <Col xs="12" sm="6" lg="3">
          <Card className="text-white bg-secondary">
            <CardBody className="pb-0">
              <div className="text-value">Balance</div>
            </CardBody>
            <div
              className="chart-wrapper mx-3 d-flex align-items-center justify-content-center"
              style={{ height: "70px" }}
            >
              <span className="pr-2 font-xl" style={{ fontSize: "1.5rem" }}>
                ₦{wallet.toLocaleString()}
              </span>
            </div>
          </Card>
        </Col> */}
          <Col xs="12" sm="6" lg="4">
            <Card className="text-success bg-light p-2">
              <CardBody className="pb-0">
                <div className="text-value text-muted fw-bold">Balance</div>
              </CardBody>
              <div className="chart-wrapper mx-3 d-flex align-items-center  justify-content-between" style={{ height: "70px" }}>
                <span className=" font-xl" style={{ fontSize: "2.5rem" }}>
                  ₦{wallet?.partner_earning?.toLocaleString()}
                </span>
                <i className="ti-arrow-up font-lg" />
              </div>
            </Card>
          </Col>
        </Row>
        {!isLoading && payouts?.length > 0 && (
          <>
            <div className="table-responsive" style={{ minHeight: "50vh" }}>
              <Table>
                <TableHead>
                  <TableRow hover>
                    <TableCell>Date</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Account Number</TableCell>
                    <TableCell>Bank</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <Fragment>
                    {payouts.map((earning, key) => (
                      <TableRow hover key={key}>
                        <TableCell>{new Date(earning?.created).toDateString()}</TableCell>
                        <TableCell>{earning?.account_data?.account_name}</TableCell>
                        <TableCell>{earning?.account_data?.account_number}</TableCell>
                        <TableCell>{earning?.account_data?.bank_name}</TableCell>
                        <TableCell>₦{earning?.actual_amount?.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge color={getCashoutStatusColor(earning?.status)}>{getCashoutStatus(earning?.status)}</Badge>
                        </TableCell>
                        {/*<TableCell>*/}
                        {/*  <button type="button" className="rct-link-btn text-primary" title="view details">*/}
                        {/*    <Link to={`/admin/payouts/${payout.auth_id}`}>*/}
                        {/*      <i className="ti-eye" />*/}
                        {/*    </Link>*/}
                        {/*  </button>*/}
                        {/*</TableCell>*/}
                      </TableRow>
                    ))}
                  </Fragment>
                </TableBody>
              </Table>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0 mt-3 mr-2">
              <Pagination activePage={currentPage} itemClass="page-item" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={payoutsCount} onChange={paginate} />
            </div>
          </>
        )}
        {payouts?.length === 0 && !isLoading && <EmptyData />}
      </RctCollapsibleCard>
      {/*<DeleteConfirmationDialog ref={exportRef} title={'Are you sure you want to Export File?'} message={'This will send the excel file to your email'} onConfirm={confirmExport} />*/}
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPartnerPayout: (auth_id, page, date_type) => dispatch(getPartnerPayout(auth_id, page, date_type)),
    getPartnerPayoutCount: (auth_id, page, date_type) => dispatch(getPartnerPayoutCount(auth_id, page, date_type)),
    getWalletBalance: (auth_id) => dispatch(getWalletBalance(auth_id)),

  };
}

const mapStateToProps = (state) => ({
  payouts: state.partners.partnerPayout,
  payoutsCount: state.partners.partnerPayoutCount,
  wallet: state.wallets.wallet,

});

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDriverTable);
