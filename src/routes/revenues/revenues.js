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
      {/* <RevenueChart /> */}
Esse sit commodo irure anim ea excepteur sit eu ut fugiat laborum et non. Incididunt esse officia labore mollit et tempor reprehenderit voluptate qui exercitation dolor ad veniam laborum. Amet culpa exercitation aliquip sit ad deserunt officia enim ad in. Non quis est ut velit adipisicing. Eiusmod elit eiusmod incididunt amet est tempor pariatur commodo. Aliquip ut sint nostrud amet aliquip deserunt nulla quis consequat minim consequat.Veniam aliquip ullamco aliquip nisi incididunt aliquip proident consequat dolor. In et adipisicing fugiat nulla amet aute officia culpa quis voluptate laboris voluptate adipisicing esse. Laborum dolor commodo in laborum eu quis id ut sint sit occaecat sit incididunt. Aliqua officia do sint esse qui. Ut laborum laboris excepteur aute amet id amet enim. Sit sint enim proident Lorem. Consectetur magna mollit nisi eiusmod nisi mollit ipsum ad voluptate exercitation laborum aute laboris commodo.      <RevenueTable />
    </div>
  );
};

re
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
