import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import PartnerTable from "Routes/partners/components/partnerTable";
import {getPartners, getPartnersCount} from "Actions/partnersAction";
import {getUserExport} from "Actions/userAction";
const qs = require("qs");

const Partners = ({history, match, getPartners, getPartnersCount, partners}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || partners.length < 1) {
      getPartners(currentPage, true);
      getPartnersCount();
    }
  }, []);
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Partners"} match={match} />
      <PartnerTable assign={""} header="All Partners" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPartners: (page_no, spinner) => dispatch(getPartners(page_no, spinner)),
    getPartnersCount: () => dispatch(getPartnersCount()),

  };
}

const mapStateToProps = (state) => ({
  partners: state.partners.partners,
  partnersCount: state.partners.partnersCount,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
