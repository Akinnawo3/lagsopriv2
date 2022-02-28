import React from "react";
import RctCollapsibleCard from "Components/RctCollapsibleCard/RctCollapsibleCard";
import {Line} from "react-chartjs-2";
import {connect} from "react-redux";
import {getDownloadsByArea} from "Actions/userAction";

const DownloadsChart = () => {
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
  getDownloadsByArea: (spinner) => dispatch(getDownloadsByArea(spinner)),
});
const mapStateToProps = (state) => ({
  downloadsByDate: state.users.downloadsByDate,
  loading: state.loading.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(DownloadsChart);
