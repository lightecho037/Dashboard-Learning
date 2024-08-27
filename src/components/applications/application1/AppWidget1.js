// src/components/applications/application1/AppWidget1.js

import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import TimerIcon from '@mui/icons-material/Timer';
import WarningIcon from '@mui/icons-material/Warning';
import MemoryIcon from '@mui/icons-material/Memory';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';

const widgets = [
    { title: "CPU Usage", value: "72%", change: "+5% from last hour", icon: <SettingsIcon /> },
    { title: "Response Time", value: "250ms", change: "+10% from last hour", icon: <TimerIcon /> },
    { title: "Error Rate", value: "2.5%", change: "-1% from last hour", icon: <WarningIcon /> },
    { title: "Memory Usage", value: "65%", change: "+3% from last hour", icon: <MemoryIcon /> },
    { title: "Network Traffic", value: "125 Mbps", change: "+8% from last hour", icon: <NetworkCheckIcon /> },
];

const AppWidget1 = () => {
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
                    style={{ display: 'flex', justifyContent: 'center' }} // Center the grid items
                >
                    <Card sx={{ backgroundColor: '#fafbfc', color: '#0d0800', minHeight: '120px', width: '100%' }}>
                        <CardContent>
                            <Typography variant="subtitle1" gutterBottom>
                                {widget.title}
                            </Typography>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography variant="h4">{widget.value}</Typography>
                                {widget.icon}
                            </div>
                            <Typography variant="body2" sx={{ color: widget.change.includes('+') ? '#4caf50' : '#f44336' }}>
                                {widget.change}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default AppWidget1;
