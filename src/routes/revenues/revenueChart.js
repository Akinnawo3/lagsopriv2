import React, {useEffect} from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {OverallTrafficStatusWidget} from "Components/Widgets";
import IntlMessages from "Util/IntlMessages";
import ChartConfig from "Constants/chart-config";
import {getChartRevenueData} from "../../actions/revenueSplitAction";
import {connect} from "react-redux";

const RevenuesChart = ({getChartRevenueData, revenueChartData}) => {
  useEffect(() => {
    getChartRevenueData(true);
  }, []);

  console.log(revenueChartData);

  const trafficStatus = {
    chartLabels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "oct", "Nov", "Dec"],
    chartDatasets: [
      {
        label: "Series A",
        backgroundColor: ChartConfig.color.primary,
        borderColor: ChartConfig.color.primary,
        borderWidth: 1,
        hoverBackgroundColor: ChartConfig.color.primary,
        hoverBorderColor: ChartConfig.color.primary,
        data: [65, 59, 80, 81, 56, 55, 40, 34, 78, 26, 98, 100],
      },
    ],
    onlineSources: "3500",
    today: "17,020",
    lastMonth: "20.30%",
  };

  return (
    <div>
      <RctCollapsibleCard
        customClasses="trafic-bar-chart"
        colClasses="col-sm-12 col-md-12 col-lg-5 d-sm-full"
        heading={<IntlMessages id="widgets.revenue" />}
        collapsible
        reloadable
        closeable
        fullBlock
      >
        <OverallTrafficStatusWidget chartData={trafficStatus} />
      </RctCollapsibleCard>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    getChartRevenueData: (spinner, startDate, endDate) => dispatch(getChartRevenueData(spinner, startDate, endDate)),
  };
}
const mapStateToProps = (state) => ({
  loadingStatus: state.loading.loadingStatus,
  revenueChartData: state.revenueSplit.chartRevenueData,
});
export default connect(mapStateToProps, mapDispatchToProps)(RevenuesChart);
