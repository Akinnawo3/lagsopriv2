/**
 * Stacked Line Chart
 */
import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from "react-redux";
import ChartConfig from "Constants/chart-config";
import { hexToRgbA } from "Helpers/helpers";

// chart options
const options = {
    legend: {
        display: true
    },
    scales: {
        xAxes: [{
            display: true,
        }],
        yAxes: [{
            display: true,
            gridLines: {
                display: false
            }
        }]
    }
};

// Main Component
class TripsChart extends Component {
    render() {
        const { darkMode } = this.props;
        const data = (canvas) => {
            const ctx = canvas.getContext("2d");
            var gradientFill1 = ctx.createLinearGradient(0, 0, 0, 350);
            var gradientFill2 = ctx.createLinearGradient(0, 0, 0, 325);
            gradientFill1.addColorStop(0, hexToRgbA(ChartConfig.color.info, 1));
            gradientFill1.addColorStop(1, darkMode ? "#2c3644" : "#FFFFFF");
            gradientFill2.addColorStop(0, hexToRgbA(ChartConfig.color.primary, 1));
            gradientFill2.addColorStop(1, darkMode ? "#000000" : "#FFFFFF");

            return {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [
                    {
                        label: 'Completed Trips',
                        lineTension: 0,
                        backgroundColor: gradientFill1,
                        borderColor: ChartConfig.color.info,
                        borderWidth: 3,
                        pointBorderWidth: 0,
                        pointRadius: 0,
                        data: [50, 45, 22, 18, 25, 5, 35, 20, 45, 22, 30, 70, 40]
                    },
                    {
                        label: 'Cancelled Trips',
                        lineTension: 0,
                        backgroundColor: gradientFill2,
                        borderColor: ChartConfig.color.primary,
                        borderWidth: 3,
                        pointBorderWidth: 0,
                        pointRadius: 0,
                        data: [40, 30, 60, 30, 35, 50, 10, 30, 25, 28, 55, 65, 80]
                    }
                ]
            }
        }
        return (
            <Line data={data} options={options} height={200} />
        );
    }
}

const mapStateToProps = ({ settings }) => {
    const { darkMode } = settings;
    return { darkMode };
}

export default connect(mapStateToProps)(TripsChart);
