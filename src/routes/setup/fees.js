import React, {useState} from "react";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// import TripFare from "Routes/setup/component/tripFare";
// import OneOffPayment from "Routes/setup/component/oneOffPayment";
// import VerificationFee from "Routes/setup/component/verificationFee";

import TripFare from "./component/tripFare";
import OneOffPayment from "./component/oneOffPayment";
import VerificationFee from "./component/verificationFee";
import ReferralFee from "./component/referralFee";
import CostOfAsset from "./component/costOfAsset";

const Fees = ({match}) => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="table-wrapper">
      <PageTitleBar title={"Fees"} match={match} />

      <div className="d-flex my-3">
        <div className={`py-2 px-3 border border-primary ${activeTab === 1 && "text-white"} ${activeTab === 1 && "bg-primary"}`} style={{borderRadius: "26px"}} onClick={() => setActiveTab(1)}>
          Trip Fare
        </div>
        <div className={`py-2 px-3 border border-primary mx-2 ${activeTab === 2 && "text-white"} ${activeTab === 2 && "bg-primary"}`} style={{borderRadius: "26px"}} onClick={() => setActiveTab(2)}>
          One-off Payment{" "}
        </div>
        <div className={`py-2 px-3 border border-primary mx-2  ${activeTab === 3 && "text-white"} ${activeTab === 3 && "bg-primary"}`} style={{borderRadius: "26px"}} onClick={() => setActiveTab(3)}>
          Verification Fee
        </div>
        <div className={`py-2 px-3 border border-primary mx-2 ${activeTab === 4 && "text-white"} ${activeTab === 4 && "bg-primary"}`} style={{borderRadius: "26px"}} onClick={() => setActiveTab(4)}>
          Referral Fee
        </div>
        <div className={`py-2 px-3 border border-primary ${activeTab === 5 && "text-white"} ${activeTab === 5 && "bg-primary"}`} style={{borderRadius: "26px"}} onClick={() => setActiveTab(5)}>
          Cost of Asset
        </div>
      </div>

      <div className="mt-4">
        {activeTab === 1 && <TripFare />}
        {activeTab === 2 && <OneOffPayment />}
        {activeTab === 3 && <VerificationFee />}
        {activeTab === 4 && <ReferralFee />}
        {activeTab === 5 && <CostOfAsset />}
      </div>
    </div>
  );
};

export default Fees;
