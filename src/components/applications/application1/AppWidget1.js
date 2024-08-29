import React from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';
import ReactECharts from 'echarts-for-react';

const widgets = [
    { title: "CPU Usage", value: 50, status: "System is running smoothly", color: '#3f51b5' },
    { title: "Memory Usage", value: 65, status: "Memory usage is normal", color: '#f50057' },
    { title: "Disk Usage", value: 40, status: "Disk performance is optimal", color: '#ff9800' },
    { title: "Network Traffic", value: 80, status: "Network is stable", color: '#4caf50' },
    { title: "Services", value: 50, status: "Few errors detected", color: '#f44336' },
];

const chartData = [
    { time: '11:00 AM', CPU: 50, Memory: 65, Disk: 40, Network: 80, Services: 50 },
    { time: '11:10 AM', CPU: 55, Memory: 60, Disk: 45, Network: 78, Services: 52 },
    { time: '11:20 AM', CPU: 52, Memory: 62, Disk: 42, Network: 82, Services: 55 },
    { time: '11:30 AM', CPU: 53, Memory: 64, Disk: 43, Network: 79, Services: 58 },
    { time: '11:40 AM', CPU: 54, Memory: 61, Disk: 44, Network: 81, Services: 57 },
    { time: '11:50 AM', CPU: 10, Memory: 63, Disk: 46, Network: 80, Services: 59 },
    { time: '12:00 PM', CPU: 58, Memory: 65, Disk: 48, Network: 83, Services: 60 },
];

const AppWidget1 = () => {
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
            trigger: 'item',  // Change trigger to 'item' to only show tooltip for the hovered series
            formatter: function(params) {
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
        },
        dataZoom: [
            {
                type: 'inside',
                start: 0,
                end: 100,
            },
            {
                start: 0,
                end: 100,
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
            {widgets.map((widget, index) => (
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={4} 
                    lg={2.4} 
                    key={index} 
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Card 
                        sx={{ 
                            backgroundColor: '#fafbfc', 
                            color: '#0d0800', 
                            minHeight: '120px', 
                            width: '100%', 
                            borderRadius: '10px', 
                            boxShadow: '1px 1px 1px rgba(0, 0, 0, 0.1)', 
                            border: '1px solid #d6d6d6', 
                            display: 'flex', 
                            alignItems: 'center' 
                        }}
                    >
                        <CardContent sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                            <Box>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    {widget.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#4caf50', marginBottom: '8px' }}>
                                    {widget.status}
                                </Typography>
                            </Box>
                            <Box sx={{ marginLeft: 'auto' }}>
                                {widget.icon}
                            </Box>
                            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                                <CircularProgress 
                                    variant="determinate" 
                                    value={widget.value} 
                                    size={80} 
                                    thickness={4}
                                    sx={{ color: widget.color }}
                                />
                                <Box
                                    sx={{
                                        top: 0,
                                        left: 0,
                                        bottom: 0,
                                        right: 0,
                                        position: 'absolute',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography variant="h5" component="div" color="textSecondary">
                                        {`${widget.value}%`}
                                    </Typography>
                                </Box>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            ))}

            {/* Add the ECharts line chart here */}
            <Grid item xs={12}>
                <Card sx={{ borderRadius: 2, boxShadow: 3, border: '1px solid #ddd' }}>
                    <CardContent>
                        <Box sx={{ height: 350 }}>
                            <ReactECharts option={chartOptions} style={{ height: '100%', width: '100%' }} />
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default AppWidget1;
