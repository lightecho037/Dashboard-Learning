import React from 'react';
import { Grid, Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const widgets = [
    { title: "CPU Usage", value: 50, status: "System is running smoothly", color: '#3f51b5' },
    { title: "Memory Usage", value: 65, status: "Memory usage is normal", color: '#f50057' },
    { title: "Disk Usage", value: 40, status: "Disk performance is optimal", color: '#ff9800' },
    { title: "Network Traffic", value: 80, status: "Network is stable", color: '#4caf50' },
    { title: "Services", value: 50, status: "Few errors detected", color: '#f44336' },
    { title: "Databases", value: 65, status: "System is running smoothly", color: '#3f51b5' },
    { title: "APIs", value: 15, status: "Memory usage is normal", color: '#f50057' },
    { title: "Web Transactions", value: 70, status: "Disk performance is optimal", color: '#ff9800' },
    { title: "Error Rate", value: 15, status: "Network is stable", color: '#4caf50' },
    { title: "Tickets", value: 30, status: "Few errors detected", color: '#f44336' },
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
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Card 
                        sx={{ 
                            backgroundColor: '#fafbfc', 
                            color: '#0d0800', 
                            minHeight: '150px', 
                            width: '100%', 
                            borderRadius: '7px', 
                            boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.1)', 
                            border: '1px solid #d6d6d6', 
                            display: 'flex', 
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            padding: '1px'
                        }}
                    >
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {widget.title}
                        </Typography>
                        <Box sx={{ position: 'relative', display: 'inline-flex', margin: '7px 0' }}>
                            <CircularProgress 
                                variant="determinate" 
                                value={widget.value} 
                                size={70} 
                                thickness={1}
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
                                <Typography variant="h6" component="div" color="textSecondary">
                                    {`${widget.value}%`}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="body2" sx={{ color: '#000' }}>
                            {widget.status}
                        </Typography>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default AppWidget1;
