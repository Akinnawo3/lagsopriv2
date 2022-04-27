import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import PartnerDriverTable from "Routes/partners/components/partnerDriverTable";
import {getPartner, getPartnerDriverCount, getPartnerDrivers} from "Actions/partnersAction";
const qs = require("qs");

const PartnerDrivers = ({history, getPartnerDrivers, drivers, match, getPartnerDriverCount, partnerDetails, getPartner}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const id = qs.parse(history.location.search, {ignoreQueryPrefix: true}).id;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || drivers.length < 1) {
      if(partnerDetails?.auth_id || id) {
        history.push(`${history.location.pathname}?id=${id ? id : partnerDetails?.auth_id}`);
        getPartner(id ? id : partnerDetails?.auth_id)
        getPartnerDrivers(id ? id : partnerDetails?.auth_id, currentPage, true);
        getPartnerDriverCount(id ? id :partnerDetails?.auth_id);
      }
    }
  }, [partnerDetails?.auth_id, id]);


  return (
    <div className="table-wrapper">
      <PageTitleBar title={partnerDetails?.first_name ? `${partnerDetails?.first_name} Drivers` : 'Partner Drivers'} match={match} />
      <PartnerDriverTable  partner_id={id ? id : partnerDetails?.auth_id} header="All Drivers" match={match} />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getPartnerDrivers: (partner_id, page_no, spinner, start_date, end_date ) => dispatch(getPartnerDrivers(partner_id, page_no, spinner, start_date, end_date )),
    getPartnerDriverCount: (partner_id, start_date, end_date ) => dispatch(getPartnerDriverCount(partner_id, start_date, end_date )),
    getPartner: (id) => dispatch(getPartner(id)),
  };
}

const mapStateToProps = (state) => ({
  drivers: state.partners.partnerDrivers,
  driversCount: state.partners.partnerDriversCount,
  partnerDetails: state.partners.partner,
});

export default connect(mapStateToProps, mapDispatchToProps)(PartnerDrivers);
