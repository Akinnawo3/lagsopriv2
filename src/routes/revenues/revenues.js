import React, {useEffect} from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {OverallTrafficStatusWidget} from "Components/Widgets";
import IntlMessages from "Util/IntlMessages";
import ChartConfig from "Constants/chart-config";
import {getChartRevenueData} from "../../actions/revenueSplitAction";
import {connect} from "react-redux";
import RevenueChart from "./revenueChart";
import RevenueTable from "./revenueTable";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";

const revenues = ({match, getChartRevenueData, revenueChartData}) => {
  return (
    <div>
      <PageTitleBar title={"Revenue"} match={match} />
      <RevenueChart />
    </div>
  );
};

re;
function mapDispatchToProps(dispatch) {
  return {
    getChartRevenueData: (spinner, startDate, endDate) => dispatch(getChartRevenueData(spinner, startDate, endDate)),
  };
}
const mapStateToProps = (state) => ({
  loadingStatus: state.loading.loadingStatus,
  revenueChartData: state.revenueSplit.chartRevenueData,
});
export default connect(mapStateToProps, mapDispatchToProps)(revenues);
