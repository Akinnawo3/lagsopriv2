import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
    labels: [
        'Successful Schedule',
        'Pending Schedule',
        'Failed Scheduled'
    ],
    datasets: [{
        data: [250, 25, 125],
        backgroundColor: [
            ChartConfig.color.success,
            ChartConfig.color.warning,
            ChartConfig.color.danger
        ],
        // hoverBackgroundColor: [
        //     ChartConfig.color.primary,
        //     ChartConfig.color.warning,
        //     ChartConfig.color.info
        // ]
    }]
};

const options = {
    legend: {
        display: false,
        labels: {
            fontColor: ChartConfig.legendFontColor
        }
    },
    cutoutPercentage: 80
};

export default class ComponentChart extends Component {

    render() {
        return (
            <Doughnut data={data} options={options} height={100} />
        );
    }
}
