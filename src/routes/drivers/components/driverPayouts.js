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
import { Badge } from "reactstrap";
import { getDriverPayout, getDriverPayoutCount } from "../../../actions/driverAction";

const qs = require("qs");

const DriverPayoutsTable = ({ payouts, isLoading, payoutsCount, driverId, header, getDriverPayout,getDriverPayoutCount }) => {
  const history = useHistory();
  const pageFromQuery = qs.parse(history.location.search, { ignoreQueryPrefix: true }).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });

  const paginate = (pageNumber) => {
    history.push(`${history.location.pathname}?page=${pageNumber}`);
    setCurrentPage(pageNumber);
    getDriverPayout(driverId, pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getDriverPayout(driverId, currentPage);
    getDriverPayoutCount(driverId);
  }, [driverId]);

  console.log(payouts, "oooooooo");

  return (
    <div>
      <RctCollapsibleCard heading={header} fullBlock style={{ minHeight: "70vh" }}>
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

              <Pagination activePage={currentPage} itemClass="page-item undo-folding" linkClass="page-link" itemsCountPerPage={20} totalItemsCount={payoutsCount} onChange={paginate} />
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
    getDriverPayout: (auth_id, page, date_type) => dispatch(getDriverPayout(auth_id, page, date_type)),
    getDriverPayoutCount: (auth_id, page, date_type) => dispatch(getDriverPayoutCount(auth_id, page, date_type)),
  };
}

const mapStateToProps = (state) => ({
  payouts: state.driver.driverPayout,
  payoutsCount: state.driver.driverPayoutCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverPayoutsTable);


