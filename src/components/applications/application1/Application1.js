import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import MetricTabs from './MetricTabs';
import TimeSelector from './TimeSelector';
import EnvironmentSelector from './EnvironmentSelector';
import { Routes, Route } from 'react-router-dom';
import AppView from './AppView';
import Performance from './Performance';
import Errors from './Errors';
import Transactions from './Transactions';
import Infrastructure from './Infrastructure';
import Logs from './Logs';
import Alerts from './Alerts';
import AppWidget1 from './AppWidget1';

const Application1 = () => {

    // Function to handle CSV download
    const handleDownloadCSV = () => {
        const data = [
            ["Metric", "Value", "Change"],
            ["CPU Usage", "72%", "+5% from last hour"],
            ["Response Time", "250ms", "+10% from last hour"],
            ["Error Rate", "2.5%", "-1% from last hour"],
            ["Memory Usage", "65%", "+3% from last hour"],
            ["Network Traffic", "125 Mbps", "+8% from last hour"],
        ];

        const csvContent = "data:text/csv;charset=utf-8," 
            + data.map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "metrics_report.csv");
        document.body.appendChild(link);

        link.click();
        document.body.removeChild(link);
    };

    return (
        <div>
            <Grid 
                container spacing={2} alignItems="center" sx={{ padding: 3, paddingX: 0 }}
                wrap="nowrap"
            >
                <Grid item xs={12} md={8}>
                    <MetricTabs />
                </Grid>
                <Grid 
                    item 
                    xs={12} 
                    md={4} 
                    container 
                    justifyContent="flex-end"
                    wrap="nowrap"
                >
                    <TimeSelector />
                    <EnvironmentSelector />
                    <Button
                        variant="outlined"
                        startIcon={<DownloadIcon />}
                        sx={{ ml: 2, textTransform: 'none' }}
                        onClick={handleDownloadCSV}
                    >
                        Download CSV
                    </Button>
                </Grid>
            </Grid>
            <Box sx={{ p: 2, pt: 5, mt: -9 }}>
                <Routes>
                    <Route path="AppView" element={<AppView />} />
                    <Route path="performance" element={<Performance />} />
                    <Route path="errors" element={<Errors />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="infrastructure" element={<Infrastructure />} />
                    <Route path="logs" element={<Logs />} />
                    <Route path="alerts" element={<Alerts />} />
                </Routes>
            </Box>
            <Box sx={{ ml: 6, paddingY: 1 }}>
                <AppWidget1 />
            </Box>
        </div>
    );
};

export default Application1;
