import React, { useRef } from 'react';
import { Grid, Card, CardContent, Box } from '@mui/material';
import ReactECharts from 'echarts-for-react';
import checkAllIcon from './icons/checkAllIcon.svg';
import uncheckAllIcon from './icons/uncheckAllIcon.svg';

const chartData = [
    { time: '11:00 AM', CPU: 50, Memory: 65, Disk: 40, Network: 80, Services: 50 },
    { time: '11:10 AM', CPU: 55, Memory: 60, Disk: 45, Network: 78, Services: 52 },
    { time: '11:20 AM', CPU: 52, Memory: 62, Disk: 42, Network: 82, Services: 55 },
    { time: '11:30 AM', CPU: 53, Memory: 64, Disk: 43, Network: 79, Services: 58 },
    { time: '11:40 AM', CPU: 54, Memory: 61, Disk: 44, Network: 81, Services: 57 },
    { time: '11:50 AM', CPU: 10, Memory: 63, Disk: 46, Network: 80, Services: 59 },
    { time: '12:00 PM', CPU: 58, Memory: 65, Disk: 48, Network: 83, Services: 60 },
];

const SystemResourceChart = () => {
    const chartRef = useRef(null);

    const chartOptions = {
        title: {
            text: 'System Resource Usage Over Time',
            left: 'center',
            textStyle: {
                fontSize: 14,
                fontWeight: 'bold',
            },
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params) {
                return `${params.marker} ${params.seriesName}: ${params.value}`;
            },
        },
        legend: {
            data: ['CPU', 'Memory', 'Disk', 'Network', 'Services'],
            orient: 'vertical',
            right: 1,
            top: 'middle',
            textStyle: {
                fontSize: 12,
            },
            selectedMode: 'multiple',
        },
        grid: {
            left: '1%',
            right: '7%',
            bottom: '20%',
            containLabel: true,
        },
        toolbox: {
            feature: {
                saveAsImage: { title: 'Download' },
                restore: { title: 'Reset' },
                myCheckAll: {
                    show: true,
                    title: 'Check All',
                    icon: `image://${checkAllIcon}`,
                    onclick: () => {
                        const chartInstance = chartRef.current.getEchartsInstance();
                        chartInstance.setOption({
                            legend: {
                                selected: {
                                    'CPU': true,
                                    'Memory': true,
                                    'Disk': true,
                                    'Network': true,
                                    'Services': true,
                                },
                            },
                        });
                    },
                },
                myUncheckAll: {
                    show: true,
                    title: 'Uncheck All',
                    icon: `image://${uncheckAllIcon}`,
                    onclick: () => {
                        const chartInstance = chartRef.current.getEchartsInstance();
                        chartInstance.setOption({
                            legend: {
                                selected: {
                                    'CPU': false,
                                    'Memory': false,
                                    'Disk': false,
                                    'Network': false,
                                    'Services': false,
                                },
                            },
                        });
                    },
                },
            },
            right: 10,
            top: 10,
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: chartData.map(item => item.time),
            axisLabel: {
                fontSize: 10,
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                fontSize: 10,
            },
            boundaryGap: [0, '100%'],
            max: 100,
        },
        dataZoom: [
            {
                type: 'inside',
                start: 50,
                end: 30,
            },
            {
                start: 50,
                end: 30,
            },
        ],
        series: [
            {
                name: 'CPU',
                type: 'line',
                data: chartData.map(item => item.CPU),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    color: '#3f51b5',
                },
                areaStyle: {
                    color: 'rgba(63, 81, 181, 0.3)',
                },
            },
            {
                name: 'Memory',
                type: 'line',
                data: chartData.map(item => item.Memory),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    color: '#f50057',
                },
                areaStyle: {
                    color: 'rgba(245, 0, 87, 0.3)',
                },
            },
            {
                name: 'Disk',
                type: 'line',
                data: chartData.map(item => item.Disk),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    color: '#ff9800',
                },
                areaStyle: {
                    color: 'rgba(255, 152, 0, 0.3)',
                },
            },
            {
                name: 'Network',
                type: 'line',
                data: chartData.map(item => item.Network),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    color: '#4caf50',
                },
                areaStyle: {
                    color: 'rgba(76, 175, 80, 0.3)',
                },
            },
            {
                name: 'Services',
                type: 'line',
                data: chartData.map(item => item.Services),
                smooth: true,
                symbol: 'circle',
                symbolSize: 8,
                lineStyle: {
                    color: '#f44336',
                },
                areaStyle: {
                    color: 'rgba(244, 67, 54, 0.3)',
                },
            },
        ],
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Card sx={{ borderRadius: 2, boxShadow: 3, border: '1px solid #ddd' }}>
                    <CardContent>
                        <Box sx={{ height: 350 }}>
                            <ReactECharts
                                option={chartOptions}
                                style={{ height: '100%', width: '100%' }}
                                ref={chartRef}
                            />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default SystemResourceChart;