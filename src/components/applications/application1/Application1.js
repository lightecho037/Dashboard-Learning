import React, { useState } from 'react';
import { Box, Button, Grid, Tabs, Tab, Typography } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import AppView from './AppView';
import Performance from './Performance';
import Errors from './Errors';
import Transactions from './Transactions';
import Infrastructure from './Infrastructure';
import Logs from './Logs';
import Alerts from './Alerts';
// import AppWidget1 from './AppWidget1';
import TimeSelector from './TimeSelector';  // Keep this import
import EnvironmentSelector from './EnvironmentSelector';  // Keep this import

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Application1 = () => {
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

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
            <Grid container spacing={2} alignItems="center" sx={{ padding: 3, paddingX: 0 }} wrap="nowrap">
                <Grid item xs={12} md={8}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs 
                            value={tabValue} 
                            onChange={handleTabChange} 
                            aria-label="application tabs"
                            variant="scrollable"
                            scrollButtons="auto"
                        >
                            <Tab label="AppView" {...a11yProps(0)} />
                            <Tab label="Performance" {...a11yProps(1)} />
                            <Tab label="Infrastructure" {...a11yProps(2)} />
                            <Tab label="Transactions" {...a11yProps(3)} />
                            <Tab label="Errors" {...a11yProps(4)} />
                            <Tab label="Logs" {...a11yProps(5)} />
                            <Tab label="Alerts" {...a11yProps(6)} />
                        </Tabs>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4} container justifyContent="flex-end" wrap="nowrap">
                    <TimeSelector />  {/* TimeSelector component is included */}
                    <EnvironmentSelector />  {/* EnvironmentSelector component is included */}
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

            <TabPanel value={tabValue} index={0}>
                <AppView />
            </TabPanel>
            <TabPanel value={tabValue} index={1}>
                <Performance />
            </TabPanel>
            <TabPanel value={tabValue} index={2}>
                <Infrastructure />
            </TabPanel>
            <TabPanel value={tabValue} index={3}>
                <Transactions />
            </TabPanel>
            <TabPanel value={tabValue} index={4}>
                <Errors />
            </TabPanel>
            <TabPanel value={tabValue} index={5}>
                <Logs />
            </TabPanel>
            <TabPanel value={tabValue} index={6}>
                <Alerts />
            </TabPanel>

            {/* <Box sx={{ ml: 6, paddingY: 1 }}>
                <AppWidget1 />
            </Box> */}
        </div>
    );
};

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default Application1;
