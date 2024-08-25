// src/Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Collapse, Typography, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import FolderIcon from '@mui/icons-material/Folder';
import BuildIcon from '@mui/icons-material/Build';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CircleIcon from '@mui/icons-material/Circle';
import AodIcon from '@mui/icons-material/Aod';
import StorageIcon from '@mui/icons-material/Storage';
import MemoryIcon from '@mui/icons-material/Memory';
import PestControlIcon from '@mui/icons-material/PestControl';

const Sidebar = () => {
    const [openTab, setOpenTab] = useState(null); // Manage which main tab is open

    const handleClick = (tabName) => {
        setOpenTab(openTab === tabName ? null : tabName); // Toggle the clicked tab, close others
    };

    const handleSubItemClick = (tabName) => {
        setOpenTab(tabName); // Set the clicked sub-item's tab as the active tab
    };

    return (
        <Drawer
            variant='permanent'
            sx={{
                width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                    width: 240,
                    boxSizing: 'border-box',
                    top: '64px',
                    backgroundColor: '#f8f9fa',  // Light background
                    color: '#333',  // Dark text
                }
            }}>
            <List>
                {/* Dashboard Item */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><DashboardIcon style={{ color: '#333' }} /></ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </ListItemButton>
                </ListItem>

                {/* Nest AI Item */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><MessageIcon style={{ color: '#333' }} /></ListItemIcon>
                        <ListItemText primary='Nest AI' />
                    </ListItemButton>
                </ListItem>

                {/* Divider with Margins */}
                <Divider sx={{ marginY: 1, marginLeft: 5, marginRight: 5, borderColor: '#ccc' }} />

                {/* Monitoring Section */}
                <ListItem>
                    <Typography variant="caption" 
                        sx={{ 
                            paddingLeft: -2,
                            color: '#666', 
                            textTransform: 'uppercase',
                            fontSize: '10px',
                            marginTop: '-7px' }}> Monitoring
                    </Typography>
                </ListItem>

                {/* Applications Item */}
                <ListItemButton 
                    onClick={() => handleClick('applications')} sx={{ paddingLeft: 2 }}>
                        <ListItemIcon><FolderIcon style={{ color: '#333' }} /></ListItemIcon>
                        <ListItemText primary="Applications" />
                    <ChevronRightIcon
                        style={{
                            color: '#333',
                            fontSize: '13px',
                            transform: openTab === 'applications' ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                    />
                </ListItemButton>
                <Collapse in={openTab === 'applications'} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('applications')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Application1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('applications')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Application2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('applications')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Application3" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Infrastructure Item */}
                <ListItemButton onClick={() => handleClick('infrastructure')} sx={{ paddingLeft: 2 }}>
                    <ListItemIcon><BuildIcon style={{ color: '#333' }} /></ListItemIcon>
                    <ListItemText primary="Infrastructure" />
                    <ChevronRightIcon
                        style={{
                            color: '#333',
                            fontSize: '13px',
                            transform: openTab === 'infrastructure' ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                    />
                </ListItemButton>
                <Collapse in={openTab === 'infrastructure'} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('infrastructure')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Infrastructure1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('infrastructure')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Infrastructure2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('infrastructure')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Infrastructure3" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Alerts Item */}
                <ListItemButton onClick={() => handleClick('alerts')} sx={{ paddingLeft: 2 }}>
                    <ListItemIcon><NotificationsIcon style={{ color: '#333' }} /></ListItemIcon>
                    <ListItemText primary="Alerts" />
                    <ChevronRightIcon
                        style={{
                            color: '#333',
                            fontSize: '13px',
                            transform: openTab === 'alerts' ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                    />
                </ListItemButton>
                <Collapse in={openTab === 'alerts'} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('alerts')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Alert1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('alerts')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Alert2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('alerts')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Alert3" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Divider with Margins */}
                <Divider sx={{ marginY: 1, marginLeft: 5, marginRight: 5, borderColor: '#ccc' }} />

                {/* Metrics Section */}
                <ListItem>
                    <Typography variant="caption" 
                        sx={{ 
                            paddingLeft: -2,
                            color: '#666', 
                            textTransform: 'uppercase',
                            fontSize: '10px',
                            marginTop: '-7px' }}> Metrics
                    </Typography>
                </ListItem>


                {/* Servers Item */}
                <ListItemButton onClick={() => handleClick('servers')} sx={{ paddingLeft: 2 }}>
                    <ListItemIcon><AodIcon style={{ color: '#333' }} /></ListItemIcon>
                    <ListItemText primary="Servers" />
                    <ChevronRightIcon
                        style={{
                            color: '#333',
                            fontSize: '13px',
                            transform: openTab === 'servers' ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                    />
                </ListItemButton>
                <Collapse in={openTab === 'servers'} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('servers')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Cluster1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('servers')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Cluster2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('servers')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Cluster3" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Databases Item */}
                <ListItemButton onClick={() => handleClick('databases')} sx={{ paddingLeft: 2 }}>
                    <ListItemIcon><StorageIcon style={{ color: '#333' }} /></ListItemIcon>
                    <ListItemText primary="Databases" />
                    <ChevronRightIcon
                        style={{
                            color: '#333',
                            fontSize: '13px',
                            transform: openTab === 'databases' ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                    />
                </ListItemButton>
                <Collapse in={openTab === 'databases'} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('databases')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Cluster1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('databases')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Cluster2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('databases')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Cluster3" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Services Item */}
                <ListItemButton onClick={() => handleClick('services')} sx={{ paddingLeft: 2 }}>
                    <ListItemIcon><MemoryIcon style={{ color: '#333' }} /></ListItemIcon>
                    <ListItemText primary="Services" />
                    <ChevronRightIcon
                        style={{
                            color: '#333',
                            fontSize: '13px',
                            transform: openTab === 'services' ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                    />
                </ListItemButton>
                <Collapse in={openTab === 'services'} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('services')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Service1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('services')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Service2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('services')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Service3" />
                        </ListItemButton>
                    </List>
                </Collapse>

                {/* Errors Item */}
                <ListItemButton onClick={() => handleClick('errors')} sx={{ paddingLeft: 2 }}>
                    <ListItemIcon><PestControlIcon style={{ color: '#333' }} /></ListItemIcon>
                    <ListItemText primary="Errors" />
                    <ChevronRightIcon
                        style={{
                            color: '#333',
                            fontSize: '13px',
                            transform: openTab === 'errors' ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                    />
                </ListItemButton>
                <Collapse in={openTab === 'errors'} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('errors')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Error1" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('errors')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Error2" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={() => handleSubItemClick('errors')}>
                            <ListItemIcon sx={{ minWidth: '30px' }}><CircleIcon style={{ transform: 'scale(0.40)'}} /></ListItemIcon>
                            <ListItemText primary="Error3" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};

export default Sidebar;
