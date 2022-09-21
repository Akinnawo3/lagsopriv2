import React, {useContext, useState, useEffect} from "react";
import {Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle} from "reactstrap";
import {Doughnut} from "react-chartjs-2";

const DougnutProjection = ({maxHeight, cutout}) => {
  //   const {getLoading} = useContext(LoadingContext);
  //   const {getServiceRequestBreakdown} = useServiceRequestsApiServices();
  //   const findValue = (status) => (serviceRequestBreakdownByStatus.find((item) => item?._id === status) ? serviceRequestBreakdownByStatus.find((item) => item?._id === status).total : 0);
  //   const [values, setValues] = useState({pending: 0, accepted: 0, ongoing: 0, completed: 0, rejected: 0});
  //   const {serviceRequestBreakdownByStatus} = useContext(ServiceRequestContext);
  //   useEffect(() => {
  //     setValues({pending: findValue("pending"), ongoing: findValue("ongoing"), completed: findValue("completed"), accepted: findValue("accepted"), rejected: findValue("rejected")});
  //   }, [serviceRequestBreakdownByStatus]);

  //   const [toggled, setToggled] = useState(false);
  //   const handleToggle = () => {
  //     setToggled(!toggled);
  //   };
  //   const [time, setTime] = useState("All");

  //   const handleTimeChange = (time) => {
  //     setTime(time);
  //     if (time === "All") {
  //       getServiceRequestBreakdown({spinner: false, mode: "status", startDate: "", endDate: ""});
  //     } else if (time === "This year") {
  //       getServiceRequestBreakdown({spinner: false, mode: "status", startDate: getFirstDayOfTheYear(), endDate: getLastDayOfTheYear()});
  //     } else if (time === "This month") {
  //       getServiceRequestBreakdown({spinner: false, mode: "status", startDate: getFirstDayOfMonth(), endDate: getLastDayOfMonth()});
  //     } else {
  //       getServiceRequestBreakdown({spinner: false, mode: "status", startDate: getTodayDate(), endDate: getTodayDate()});
  //     }
  //   };
  // await getServiceRequestBreakdown({spinner: true, mode: "center"});

  const labels = [
    {
      title: "Concurrent amount",
      color: "rgb(8,110,185)",
    },
    {
      title: "Projection",
      color: "grey",
    },
  ];

  const total = "70%";

  const data = {
    labels: ["Projection", "Concurrent amount"],

    datasets: [
      {
        label: "Attendance for Week 1",
        clip: 15,
        data: [35, 70],
        borderColor: ["rgba(255,206,86,0.2)"],
        backgroundColor: ["rgb(227,233,235)", "rgb(1,199,171)"],
        boederColor: ["grey", "rgb(8,110,185)", "rgb(252,185,11)", "rgb(41,198,149)", "red"],
        pointBackgroundColor: "rgba(255,206,86,0.2)",
      },
    ],
    text: "83%",
  };

  // const option = {
  //   maintainAspectRatio: false,
  //   responsive: false,
  //   legend: {
  //     position: "left",
  //     labels: {
  //       boxWidth: 10,
  //     },
  //   },
  // };
  const options = {
    cutoutPercentage: 80,
    legend: {
      labels: {
        boxWidth: 10,
      },
      display: true,
      position: "bottom",
      align: "left",
      // legendDistance: {
      //   padding: 130, // dictates the space
      // },
    },
    plugins: {
      title: {
        display: false,
        text: "Doughnut Chart",
        color: "blue",
        font: {
          size: 50,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };

  return (
    <Card body>
      <CardTitle className=" justify-content-between">
        <div className="justify-content-between d-flex w-100">
          <span>Projection covered</span>
        </div>
        {/* <span>Today</span> */}
      </CardTitle>
      {/* <CardBody className=""> */}
      <div style={{width: "200px", height: "200px", position: "relative"}} className="mx-auto">
        <Doughnut data={data} options={options} width={100} height={100} />
        {/* <Doughnut data={data} options={options} width={200} height={250} /> */}
        <div style={{position: "absolute", width: "100%", top: "45%", left: 0, textAlign: "center", marginTop: "-28px", lineHeight: "20px"}}>
          <h2 className="mb-0">{total}</h2>
        </div>
        {/* <div style={{position: "absolute", width: "100%", top: "90%", left: 0, textAlign: "center", marginTop: "-28px", lineHeight: "20px"}}>
          <h2 className="mb-0">{total}</h2>
        </div> */}
      </div>
      {/* </CardBody> */}
    </Card>
  );
};

export default DougnutProjection;

// "react-chartjs-2": "^2.9.0",
