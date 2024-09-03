import React, { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Checkbox, FormControlLabel, FormGroup, Badge, IconButton, Tooltip } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DownloadIcon from '@mui/icons-material/Download';
import RefreshIcon from '@mui/icons-material/Refresh';

// Sample event data
const eventTypes = [
    "Critical", "High", "Medium", "Low", 
    "Informational", "Warning", "Debug", 
    "Notice", "Alert", "Emergency", "Error"
];

const initialEvents = [
    { id: 1, date: "09-02-24 14:33:21", type: "Critical", message: "Server Down" },
    { id: 2, date: "09-02-24 14:35:45", type: "High", message: "Memory Usage 90%" },
    { id: 3, date: "09-02-24 14:40:12", type: "Warning", message: "CPU Usage High" },
    { id: 4, date: "09-02-24 14:41:55", type: "Medium", message: "Disk Space Low" },
    { id: 5, date: "09-02-24 14:43:30", type: "Low", message: "New User Registration" },
    { id: 6, date: "09-02-24 14:44:10", type: "Informational", message: "Daily Backup Completed" },
    { id: 7, date: "09-02-24 14:45:02", type: "Debug", message: "Function execution time high" },
    { id: 8, date: "09-02-24 14:46:18", type: "Notice", message: "New version deployed" },
    { id: 9, date: "09-02-24 14:47:05", type: "Alert", message: "Unusual traffic detected" },
    { id: 10, date: "09-02-24 14:49:45", type: "Emergency", message: "Data breach in progress" },
    { id: 11, date: "09-02-24 14:50:32", type: "Error", message: "Database connection failed" },
    { id: 12, date: "09-02-24 14:51:58", type: "Critical", message: "Application crash" },
    { id: 13, date: "09-02-24 14:52:40", type: "High", message: "Payment gateway timeout" },
    { id: 14, date: "09-02-24 14:54:15", type: "Medium", message: "High memory usage" },
    { id: 15, date: "09-02-24 14:55:10", type: "Low", message: "Scheduled maintenance" }
];

// Component for each notification
const AppNotification = ({ event, onClear }) => {
    const colors = {
        "Critical": "#ff0000",
        "High": "#ff6347",
        "Medium": "#ffa500",
        "Low": "#ffff00",
        "Informational": "#0000ff",
        "Warning": "#ffcc00",
        "Debug": "#800080",
        "Notice": "#00ffff",
        "Alert": "#ff1493",
        "Emergency": "#dc143c",
        "Error": "#8b0000"
    };

    return (
        <Card sx={{ border: `1px solid ${colors[event.type]}`, marginBottom: '3px', padding: '0px' }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ marginRight: '8px' }}>
                        <WarningIcon />
                    </Box>
                    <Box>
                        <Typography variant="caption" display="block">
                            {event.date}
                        </Typography>
                        <Typography variant="body2" >
                            {event.message}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <button onClick={() => onClear(event.id)}>&#x2715;</button>
                </Box>
            </CardContent>
        </Card>
    );
};

// Main Component
const AppNotificationSystem = () => {
    const [events, setEvents] = useState(initialEvents);
    const [filter, setFilter] = useState(eventTypes);
    const [showFilterDialog, setShowFilterDialog] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [eventToDelete, setEventToDelete] = useState(null);

    const toggleFilter = (type) => {
        setFilter(prev => prev.includes(type) 
            ? prev.filter(t => t !== type) 
            : [...prev, type]
        );
    };

    const filteredEvents = events.filter(event => filter.includes(event.type));

    const handleClear = (id) => {
        setEventToDelete(id);
        setShowConfirm(true);
    };

    const confirmClear = () => {
        setEvents(prevEvents => prevEvents.filter(event => event.id !== eventToDelete));
        setShowConfirm(false);
        setEventToDelete(null);
    };

    const handleUncheckAll = () => {
        setFilter([]);
    };

    const handleCheckAll = () => {
        setFilter(eventTypes);
    };

    const handleRefresh = () => {
        // Logic to refresh notifications
        console.log("Refresh clicked");
    };

    const handleDownload = () => {
        // Logic to download notifications as CSV
        const csvData = filteredEvents.map(event => `${event.date},${event.type},${event.message}`).join('\n');
        const blob = new Blob([`Date,Type,Message\n${csvData}`], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.setAttribute('hidden', '');
        a.setAttribute('href', url);
        a.setAttribute('download', 'notifications.csv');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        console.log("Download clicked");
    };

    return (
        <Grid container spacing={2}>
            {/* Notification Section */}
            <Grid item xs={12}>
                <Card sx={{ borderRadius: 1, boxShadow: 1, border: '1px solid #ddd', height: '320px', overflowY: 'auto' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 0 }}>
                            <Typography variant="h6">Notification System Events
                                <Badge badgeContent={filteredEvents.length > 99 ? '99+' : filteredEvents.length} color="primary"  sx={{ ml: 1 }} >

                                    <NotificationsIcon />
                                </Badge>
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Button onClick={() => setShowFilterDialog(true)} sx={{ marginLeft: 2 }}>FILTER</Button>
                                <Tooltip title="Refresh">
                                    <IconButton onClick={handleRefresh}>
                                        <RefreshIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Download CSV">
                                    <IconButton onClick={handleDownload}>
                                        <DownloadIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                        <Box>
                            {filteredEvents.map(event => (
                                <AppNotification key={event.id} event={event} onClear={handleClear} />
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Grid>

            {/* Filter Dialog */}
            <Dialog
                open={showFilterDialog}
                onClose={() => setShowFilterDialog(false)}
                aria-labelledby="filter-dialog-title"
            >
                <DialogTitle id="filter-dialog-title">Filter Events</DialogTitle>
                <DialogContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                        <Button variant="contained" onClick={handleUncheckAll}>Uncheck All</Button>
                        <Button variant="contained" onClick={handleCheckAll}>Check All</Button>
                    </Box>
                    <FormGroup>
                        {eventTypes.map(type => (
                            <FormControlLabel
                                key={type}
                                control={<Checkbox checked={filter.includes(type)} onChange={() => toggleFilter(type)} />}
                                label={type}
                            />
                        ))}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowFilterDialog(false)}>Close</Button>
                </DialogActions>
            </Dialog>

            {/* Confirmation Dialog */}
            <Dialog
                open={showConfirm}
                onClose={() => setShowConfirm(false)}
                aria-labelledby="confirm-dialog-title"
            >
                <DialogTitle id="confirm-dialog-title">Clear Notification</DialogTitle>
                <DialogContent>
                    <Typography>
                        Are you sure you want to clear this notification?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setShowConfirm(false)}>Cancel</Button>
                    <Button onClick={confirmClear} autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default AppNotificationSystem;
