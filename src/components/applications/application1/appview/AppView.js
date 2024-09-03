// dashboard-learning\src\components\applications\application1\appview\AppView.js
import React from 'react';
import { Grid } from '@mui/material';
import AppWidget1 from './AppWidget1';  // Ensure this import is correct
import AppChart from './AppChart';
import AppNotificationSystem from './AppNotification';

const AppView = () => {
    return (
        <>
            <Grid container spacing={2} sx={{ paddingLeft : 2}}>
                {/* Widgets Section */}
                <Grid item xs={8}>
                    <AppWidget1 />
                </Grid>

                {/* Notification System */}
                <Grid item xs={4}>
                    <AppNotificationSystem />
                </Grid>

                {/* Chart Section */}
                <Grid item xs={12}>
                    <AppChart />
                </Grid>
            </Grid>
        </>
    );
};

export default AppView;
