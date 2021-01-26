import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
    labels: [
        'Successful  payments',
        'Unsuccessful payments',
    ],
    datasets: [{
        data: [250, 25],
        backgroundColor: [
            ChartConfig.color.success,
            ChartConfig.color.danger,
        ],
        hoverBackgroundColor: [
            ChartConfig.color.primary,
            ChartConfig.color.warning,
        ]
    }]
};

const options = {
    legend: {
        display: true,
        labels: {
            fontColor: ChartConfig.legendFontColor
        }
    },
    cutoutPercentage: 50
};

export default class PaymentsChart extends Component {

    render() {
        return (
            <Doughnut data={data} options={options} height={100} />
        );
    }
}
