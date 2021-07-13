import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';
import {getSchedule} from "../../../actions/fdtActions";
import {connect} from "react-redux";



const ComponentChart = ({schedule}) => {

const successful = schedule.filter(item => item.fdtStatus == 1).length
    const pending = schedule.filter(item => item.fdtStatus == 0).length
    const failed = schedule.filter(item => item.fdtStatus == 2).length

    const data = {
        labels: [
            'Successful Schedule',
            'Pending Schedule',
            'Failed Scheduled'
        ],
        datasets: [{
            data: [successful, pending, failed],
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


        return (
            <Doughnut data={data} options={options} height={100} />
        );
}

function mapDispatchToProps(dispatch) {
    return {
        getSchedule: () => dispatch(getSchedule()),
    };
}

const mapStateToProps = state => ({
    schedule: state.fdt.schedule,
    loading: state.loading.loading,
    loadingStatus: state.loading.loadingStatus



});

export default connect( mapStateToProps, mapDispatchToProps)(ComponentChart)
