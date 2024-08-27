// src/components/applications/application1/EnvironmentSelector.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const EnvironmentSelector = () => {
    const [environment, setEnvironment] = React.useState('production');

    const handleChange = (event) => {
        setEnvironment(event.target.value);
    };

    return (
        <FormControl variant="outlined" sx={{ minWidth: 160 }}>
            <InputLabel>Environment</InputLabel>
            <Select value={environment} onChange={handleChange} label="Environment">
                <MenuItem value="development">Development</MenuItem>
                <MenuItem value="staging">Staging</MenuItem>
                <MenuItem value="production">Production</MenuItem>
            </Select>
        </FormControl>
    );
};

export default EnvironmentSelector;
