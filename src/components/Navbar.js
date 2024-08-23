// src/components/Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => { 
    return(
        <AppBar 
            position="fixed"
            sx={{ 
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 'none',
                borderBottom: '1px solid #ddd',
                zIndex: 1300,
            }}

        >
            <Toolbar>
                <Typography 
                    variant='h6' 
                    noWrap 
                    component="div"
                    sx={{ color: 'black' }}>
                    Dashboard-Learning
                </Typography>
            </Toolbar>
        </AppBar>
    );
};   

export default Navbar