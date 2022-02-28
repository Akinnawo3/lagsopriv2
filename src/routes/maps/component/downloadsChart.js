import React, {useEffect, useState} from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Line} from "react-chartjs-2";
import {connect} from "react-redux";
import {getDownloadsByDate} from "Actions/userAction";
import {getFirstDayOfMonth, getTodayDate} from "../../../helpers/helpers";

const DownloadsChart = ({loading, getDownloadsByDate, downloadsByDate}) => {
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [startDate, setStartDate] = useState("2022-02-01");
  const [endDate, setEndDate] = useState("2022-02-31");
  const [dateType, setDateType] = useState("monthly");
  useEffect(() => {
    getDownloadsByDate(true, startDate, endDate, dateType);
  }, []);
  console.log(downloadsByDate);
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      // {
      //   label: "First dataset",
      //   data: [33, 53, 85, 41, 44, 65],
      //   fill: true,
      //   backgroundColor: "rgba(75,192,192,0.2)",
      //   borderColor: "rgba(75,192,192,1)",
      // },
      {
        label: "Second dataset",
        data: [0, 2000, 125, 2400, 21],
        fill: false,
        tension: 0,
        borderColor: "#742774",
      },
    ],
  };
  return (
    <RctCollapsibleCard heading="Downloads">
      <div>
        <Line data={data} />
      </div>
    </RctCollapsibleCard>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getDownloadsByDate: (spinner, start_date, end_date, date_type) => dispatch(getDownloadsByDate(spinner, start_date, end_date, date_type)),
});
const mapStateToProps = (state) => ({
  downloadsByDate: state.users.downloadsByDate,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsChart);
