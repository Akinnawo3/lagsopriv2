import React, { useEffect, useState } from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import { Line } from "react-chartjs-2";
import { connect } from "react-redux";
import { getDownloadsByDate } from "Actions/userAction";
import { getFirstDayOfMonth, getTodayDate, getFirstDayOfTheYear, getLastDayOfTheYear } from "../../../helpers/helpers";

const TripsRequestChart = ({ loading, getDownloadsByDate, downloadsByDate }) => {
  const [startDate, setStartDate] = useState(getFirstDayOfTheYear());
  const [endDate, setEndDate] = useState(getLastDayOfTheYear());
  // const [startDate, setStartDate] = useState(getFirstDayOfMonth());
  // const [endDate, setEndDate] = useState(getTodayDate());
  const [dateType, setDateType] = useState("monthly");
  useEffect(() => {
    getDownloadsByDate(true, startDate, endDate, dateType);
  }, []);


  const options = {


    scales: {
      xAxes: [{
          gridLines: {
              // color: "rgba(0, 0, 0, 0)",
              display: false,

          }
      }],
      yAxes: [{
          gridLines: {
              // color: "rgba(0, 0, 0, 0)",
              display: false,

          }   
      }]
  },
    // scales: {
    //   x: {
    //     grid: {
    //       display: false,
    //       borderColor: "red",
    //     },
    //     beginAtZero: true,
    //   },
    //   y: {
    //     grid: {
    //       display: false,
    //       borderColor: "purple",
    //     },
    //     beginAtZero: true,
    //     // steps: 4
    //   },
    // },

    // plugins: {
      legend: {
        display: false,
      },
    // },
    // elements: {
    //   line: {
    //     tension: 0.5,
    //   },
    // },
  };


  const data = {
    labels: [
      "LGA-1",
      "LGA-2",
      "LGA-3",
      "LGA-4",
      "LGA-5",
      "LGA-6",
      "LGA-7",
      "LGA-8",
      "LGA-9",
      "LGA-10",
      "LGA-11",
      "LGA-12",
      "LGA-13",
      "LGA-14",
      "LGA-15",
      "LGA-16",
      "LGA-17",
      "LGA-18",
      "LGA-19",
      "LGA-20",
    ],
    datasets: [
      // {
      //   label: "First dataset",
      //   data: [33, 53, 85, 41, 44, 65],
      //   fill: true,
      //   backgroundColor: "rgba(75,192,192,0.2)",
      //   borderColor: "rgba(75,192,192,1)",
      // },
      {
        label: "Monthly Downloads",
        data: [4,1,3,5,6,7,5,3,5,7,8,5,4,8,9,6,4,3,2,2],
        fill: false,
        tension: 0.55,
        borderColor: "#00997A",
        pointRadius: 0,
        borderWidth: 0.7,
      },
    ],
  };
  return (
    <div className="border p-2">
      <div className="ml-2 mb-3">Schedules</div>
      <div >
        <Line data={data} height="160" options={options}/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getDownloadsByDate: (spinner, start_date, end_date, date_type) => dispatch(getDownloadsByDate(spinner, start_date, end_date, date_type)),
});
const mapStateToProps = (state) => ({
  downloadsByDate: state.users.downloadsByDate,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(TripsRequestChart);

