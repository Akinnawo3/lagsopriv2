import React, {useEffect, useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {connect} from "react-redux";
import {getOems, getOemCount} from "Actions/oemAction";
import OemTable from "./component/oemTable";
const qs = require("qs");

const Oem = ({history, match, getOems, getOemCount, oems, oemsCount}) => {
  const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
  });
  useEffect(() => {
    if (pageFromQuery === undefined || drivers.length < 1) {
      getOems(currentPage, "", true);
      getOemCount();
    }
  }, []);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"OEM"} match={match} />
      <OemTable header="OEM" />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getOems: (page_no, spinner) => dispatch(getOems(page_no, spinner)),
    getOemCount: () => dispatch(getOemCount()),
  };
}

const mapStateToProps = (state) => ({
  oems: state.oem.oems,
  oemsCount: state.oem.oemsCount,
  // drivers: state.driver.drivers,
  loading: state.loading.loading,
  loadingStatus: state.loading.loadingStatus,
});

export default connect(mapStateToProps, mapDispatchToProps)(Oem);
