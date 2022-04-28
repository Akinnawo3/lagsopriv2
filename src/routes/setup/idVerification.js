import React from "react";
import PageTitleBar from "../../components/PageTitleBar/PageTitleBar";
import RctCollapsibleCard from "../../components/RctCollapsibleCard/RctCollapsibleCard";

const IdVerification = ({match}) => {
  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Id Verification"} match={match} />
      <div className="row">
        <div className="col col-xs-12 col-md-10">
          <RctCollapsibleCard style={{minHeight: "70vh"}}></RctCollapsibleCard>
        </div>
      </div>
    </div>
  );
};

export default IdVerification;
