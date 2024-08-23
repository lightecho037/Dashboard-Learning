// src/components/MainContent.js
import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const MainContent = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Navbar />
            <Sidebar />
            <Box component="main" sx={{ flexGrow: 1, p: 3, mt: '64px' }}>
                {children}
            </Box>
        </Box>
    );
};

export default MainContent;
