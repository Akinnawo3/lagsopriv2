// /**
//  * Finance
//  */
// import React, {useState, useEffect} from "react";
// import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
// import {connect} from "react-redux";
// import {
//     getFinance,
//     getFinanceBalance,
//     getFinanceBalanceStatus,
//     getFinanceSuccessChart,
//     getFinanceUnsuccessChart
// } from "Actions/paymentAction";
// import {Doughnut, Line} from 'react-chartjs-2';
// import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
// import ChartConfig from "Constants/chart-config";
// import {Input} from "reactstrap";
// const qs = require("qs");
// let dateArray = new Date().toLocaleString().split(',')[0].split('/')
// let today = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`
// let lastDayOfMonthArray = new Date(new Date().getFullYear(), new Date().getMonth()+1, 0).toLocaleString().split(',')[0].split('/');
// let start_month = `${dateArray[2]}-${dateArray[1]}-01`
// let end_month = `${lastDayOfMonthArray[2]}-${lastDayOfMonthArray[1]}-${lastDayOfMonthArray[0]}`
// let year = new Date().getFullYear()
// let start_year = `${year}-01-01`
// let end_year = `${year}-12-31`
//
// const options = {
//     legend: {
//         display: false,
//         labels: {
//             fontColor: ChartConfig.legendFontColor
//         }
//     },
//     cutoutPercentage: 80
// };
//
//
//
// const Earnings = ({amount, title, color = '#BE7009', imgUrl = 'naira-purple.png'}) => (
//       <div className='col-sm-3'>
//           <RctCollapsibleCard colClasses='w-100'>
//               <div className='d-flex align-items-center justify-content-center'>
//                   <img src={require(`Assets/img/${imgUrl}`)} width="50" height="50" />
//                   <div style={{color: color}} className="ml-3">
//                       <div style={{fontSize: '28px'}}>
//                           {amount}
//                       </div>
//                       <div style={{fontSize: '14px'}}>
//                           {title}
//                       </div>
//                   </div>
//               </div>
//           </RctCollapsibleCard>
//       </div>
// )
//
// const DoughnutChart = ({data, handleChange}) => (
//     <RctCollapsibleCard colClasses='w-100'>
//         <div className='d-flex justify-content-between align-items-center pb-3'>
//             <div style={{color: '#202020'}}>
//                 Payment status
//             </div>
//             <Input  type="select"   required style={{width: '120px', marginRight: '-5px'}} onChange={e => handleChange(e.target.value)}>
//                 <option value="total">Total</option>
//                 <option value="today">Today</option>
//                 <option value="month">This Month</option>
//                 <option value="year">This Year</option>
//             </Input>
//         </div>
//         {/*<div style={{position: 'absolute', width: '150px', height: '150px', left: 0, top: 0, bottom: 0, right: 0, margin: 'auto'}} className='d-flex align-items-center justify-content-center'>*/}
//         {/*    <div>*/}
//         {/*        <div style={{color: '#0B132A', fontSize: '32px'}}>*/}
//         {/*            078*/}
//         {/*        </div>*/}
//         {/*        <div style={{color: '#747474', fontSize: '19px'}}>*/}
//         {/*            Trips*/}
//         {/*        </div>*/}
//         {/*    </div>*/}
//         {/*</div>*/}
//         <Doughnut data={data} options={options} height={100} width={100} />
//         <div className='d-flex justify-content-between align-items-center'>
//             <div className='d-flex align-items-center justify-content-center'>
//                 <div style={{width: '10px', height: '10px', borderRadius: '5px', backgroundColor: '#DD2418'}} />
//                 <div style={{color: '#DD2418'}} className='ml-1'>
//                     Pending
//                 </div>
//             </div>
//
//             <div className='d-flex align-items-center justify-content-center'>
//                 <div style={{width: '10px', height: '10px', borderRadius: '5px', backgroundColor: '#24C790'}} />
//                 <div style={{color: '#24C790'}} className='ml-1'>
//                     Successful
//                 </div>
//             </div>
//         </div>
//         <div style={{height: '15px'}} />
//     </RctCollapsibleCard>
// )
//
// const LineChart = ({data}) => (
//     <RctCollapsibleCard heading="Earnings">
//         <div>
//             <Line data={data} options={options} />
//         </div>
//     </RctCollapsibleCard>
// )
//
// const Finance = (props) => {
//     const {
//         history,
//         match,
//         getFinance,
//         finance,
//         getFinanceBalance,
//         getFinanceBalanceStatus,
//         financeToday,
//         financeTotal,
//         financeSuccessful,
//         financeUnsuccessful,
//         financeSuccessfulChart,
//         financeUnsuccessfulChart,
//         getFinanceSuccessChart,
//         getFinanceUnsuccessChart,
//     } = props
//   const pageFromQuery = qs.parse(history.location.search, {ignoreQueryPrefix: true}).page;
//   const [currentPage, setCurrentPage] = useState(() => {
//     return pageFromQuery === undefined ? 1 : parseInt(pageFromQuery, 10);
//   });
//
//   useEffect(() => {
//       getFinance()
//       getFinanceBalance()
//       getFinanceBalance(today)
//       getFinanceBalanceStatus(1)
//       getFinanceBalanceStatus(2)
//       getFinanceUnsuccessChart()
//       getFinanceSuccessChart()
//   }, []);
//
//
//   const handleChange = (value) => {
//       if(value === 'today') {
//           getFinanceUnsuccessChart(today)
//           getFinanceSuccessChart(today)
//       } else if(value === 'month')  {
//           getFinanceUnsuccessChart(start_month, end_month)
//           getFinanceSuccessChart(start_month, end_month)
//       } else if(value === 'year') {
//           getFinanceUnsuccessChart(start_year, end_year)
//           getFinanceSuccessChart(start_year, end_year)
//       }else {
//           getFinanceUnsuccessChart()
//           getFinanceSuccessChart()
//       }
//   }
//
//
//     const data = {
//         labels: ['Successful', 'Pending'],
//         datasets: [
//             {
//                 data: [financeSuccessfulChart, financeUnsuccessfulChart],
//                 backgroundColor: [
//                     '#24C790',
//                     '#DD2418',
//                 ],
//                 // borderColor: [
//                 //     '#24C790',
//                 //     '#DD2418',
//                 // ],
//                 borderWidth: 1,
//             },
//         ],
//     };
//
//     const data2 = {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
//         datasets: [
//             {
//                 label: "Earnings",
//                 data: [1,6,3,4,5,6,7,8,9,6,5,10],
//                 fill: true,
//                 backgroundColor: "rgba(32, 150, 217, 0.1)",
//                 borderColor: "#2096D9"
//             },
//         ],
//     };
//
//     return (
//     <div className="table-wrapper">
//       <PageTitleBar title={"Finance"} match={match} />
//       <div className='row'>
//        <Earnings title={'All time Earnings'} amount={financeTotal.toLocaleString()} imgUrl = 'naira-purple.png' />
//       <Earnings title={'Earnings Today'} amount={financeToday.toLocaleString()} imgUrl = 'naira-blue.png' color={'#006AB5'} />
//       <Earnings title={'Successful'} amount={financeSuccessful.toLocaleString()} color={'#24C790'} imgUrl = 'naira-green.png' />
//       <Earnings title={'Unsuccessful'} amount={financeUnsuccessful.toLocaleString()} color={'#DD2418'} imgUrl = 'naira-red.png' />
//       </div>
//         <div className='row mt-3'>
//            <div className='col-sm-8'>
//                <LineChart data={data2} />
//            </div>
//             <div className='col-sm-4'>
//                 <DoughnutChart data={data} handleChange={handleChange} />
//             </div>
//         </div>
//     </div>
//   );
// };
//
// function mapDispatchToProps(dispatch) {
//   return {
//       getFinance: () => dispatch(getFinance()),
//       getFinanceBalance: (date) => dispatch(getFinanceBalance(date)),
//       getFinanceBalanceStatus: (status) => dispatch(getFinanceBalanceStatus(status)),
//       getFinanceSuccessChart: (start_date, end_date) => dispatch(getFinanceSuccessChart(start_date, end_date)),
//       getFinanceUnsuccessChart: (start_date, end_date) => dispatch(getFinanceUnsuccessChart(start_date, end_date)),
//   };
// }
//
// const mapStateToProps = (state) => ({
//   finance: state.payments.finance,
//     financeToday: state.payments.financeToday,
//     financeTotal: state.payments.financeTotal,
//     financeSuccessful: state.payments.financeSuccessful,
//     financeUnsuccessful: state.payments.financeUnsuccessful,
//     financeSuccessfulChart: state.payments.financeSuccessfulChart,
//     financeUnsuccessfulChart: state.payments.financeUnsuccessfulChart,
//   isLoading: state.loading.loading,
//   sosUserDetails: state.sos.sosUserDetails,
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(Finance);



import React, {useEffect} from "react";
import {connect} from "react-redux";
import PageTitleBar from "Components/PageTitleBar/PageTitleBar";
import {getChartRevenueData} from "Actions/revenueSplitAction";
import FinanceTable from "Routes/reconciliation/component/financeTable";

const revenues = ({match, getChartRevenueData, revenueChartData}) => {
    return (
        <div>
            <PageTitleBar title={"Finance"} match={match} />
            {/* <RevenueChart /> */}
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

