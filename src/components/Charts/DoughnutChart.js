import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';


const DoughnutChart  = ({completed, waiting, cancelled, current}) => {

   const data = {
      labels: [
         'Completed',
         'Waiting',
         'Cancelled',
          'Current'
      ],
      datasets: [{
         data: [completed, waiting, cancelled, current],
         backgroundColor: [
            ChartConfig.color.success,
            ChartConfig.color.warning,
            ChartConfig.color.danger,
            ChartConfig.color.secondary
         ],
         hoverBackgroundColor: [
            ChartConfig.color.primary,
            ChartConfig.color.warning,
            ChartConfig.color.info
         ]
      }]
   };

   const options = {
      legend: {
         display: false,
         labels: {
            fontColor: ChartConfig.legendFontColor
         }
      },
      cutoutPercentage: 50
   };


   return (
         <Doughnut data={data} options={options} height={100} />
      );
}

export default DoughnutChart
