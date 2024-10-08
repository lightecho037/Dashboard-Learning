// src/components/MainContent.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';
import NestAI from './nestai/NestAI'; 
import Application1 from './applications/application1/Application1';
import Application2 from './applications/application2/Application2';
import Application3 from './applications/application3/Application3';

const MainContent = () => {
    return (
        <div style={{ padding: '40px', flex: 1 }}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/nestai" element={<NestAI />} /> 
                <Route path="/applications/application1" element={<Application1 />} />
                <Route path="/applications/application2" element={<Application2 />} />
                <Route path="/applications/application3" element={<Application3 />} />
            </Routes>
        </div>
    );
};

export default MainContent;
