import React from 'react';
import { Box } from '@mui/material';
import AppWidget1 from './AppWidget1';  // Ensure this import is correct

const AppView = () => {
    return (
        <Box sx={{ ml: 4 }}>
            <AppWidget1 />  {/* Correctly rendering AppWidget1 */}
        </Box>
    );
};

export default AppView;
