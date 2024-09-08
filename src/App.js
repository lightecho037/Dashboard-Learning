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
