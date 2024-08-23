// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';  
import MessageIcon from '@mui/icons-material/Message';

const Sidebar = () => { 
    return (
        <Drawer 
            variant='permanent' 
            sx={{ 
                width: 240, 
                flexShrink: 0, 
                [`& .MuiDrawer-paper`]: { 
                    width: 240, 
                    boxSizing: 'border-box',
                    top: '64px',} }}> {/*  marginTop: '64px' */}
                
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><DashboardIcon/></ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><MessageIcon/></ListItemIcon> {/* Use AutoAwesomeIcon here */}
                        <ListItemText primary='Nest AI' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
