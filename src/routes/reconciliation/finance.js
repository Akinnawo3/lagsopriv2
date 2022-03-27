import React, {useEffect} from "react";
import {connect} from "react-redux";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getChartRevenueData} from "Actions/revenueSplitAction";
import FinanceTable from "Routes/reconciliation/component/financeTable";

const revenues = ({match, getChartRevenueData, revenueChartData}) => {
    return (
        <div>
            <PageTitleBar title={"Finance"} match={match} />
            <FinanceTable />
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
export default connect(mapStateToProps, mapDispatchToProps)(revenues);

