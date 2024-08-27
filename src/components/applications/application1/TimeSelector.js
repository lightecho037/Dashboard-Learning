// src/components/applications/application1/TimeSelector.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TimeSelector = () => {
    const [time, setTime] = React.useState('30min');

    const handleChange = (event) => {
        setTime(event.target.value);
    };

    return (
        <FormControl variant="outlined" sx={{ minWidth: 120, marginRight: 2 }}>
            <InputLabel>Time Range</InputLabel>
            <Select value={time} onChange={handleChange} label="Time Range">
                <MenuItem value="5min">Last 5 Min</MenuItem>
                <MenuItem value="10min">Last 10 Min</MenuItem>
                <MenuItem value="30min">Last 30 Min</MenuItem>
                <MenuItem value="1hr">Last 1 Hour</MenuItem>
                <MenuItem value="3hr">Last 3 Hours</MenuItem>
                <MenuItem value="24hr">Last 24 Hours</MenuItem>
            </Select>
        </FormControl>
    );
};

export default TimeSelector;
