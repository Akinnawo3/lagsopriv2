/**
 * Tickets
 */
import React, {useState, useEffect, Fragment} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getSupportTickets, getSupportTicketsCount} from "Actions/supportAction";
import SupportTable from "Routes/support/components/supportTable";
const qs = require("qs");

const ClosedSupport = ({history, match, getSupportTickets, getSupportTicketsCount, support}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || support.length < 1) {
      getSupportTickets(currentPage, 3, true);
      getSupportTicketsCount(4);
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Tickets"} match={match} />
      <SupportTable support_type={4} header={"Closed Tickets"} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getSupportTickets: (page_no, status, spinner) => dispatch(getSupportTickets(page_no, status, spinner)),
    getSupportTicketsCount: (status) => dispatch(getSupportTicketsCount(status)),
  };
}

const mapStateToProps = (state) => ({
  support: state.support.support,
  supportCount: state.support.supportCount,
  ticketTypes: state.ticketTypes.ticketTypes,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClosedSupport);
