// src/App.js

import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar />
      <Sidebar />
      <MainContent />
    </Box>
  );
};

export default App;