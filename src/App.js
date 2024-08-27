// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <Navbar style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }} />
                <div style={{ display: 'flex', flex: 1, marginTop: '30px' }}>
                    <Sidebar />
                    <MainContent />
                </div>
            </div>
        </Router>
    );
}

export default App;










// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import MainContent from './components/MainContent';
// // import { Box } from '@mui/material';

// function App() {
//   return (
//     <Router>
//       <div style={{ display: 'flex' }}>
//         <Navbar />
//         <Sidebar />
//         <MainContent />
//       </div>
//     </Router>
//   );
// };

// export default App;



// function App() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <Navbar />
//       <Sidebar />
//       <MainContent />
//     </Box>
//   );
// };