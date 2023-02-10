import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import List from './Pages/List';

function App() {
    return (
        <div style={{ background: '#f0f0f0', height: '100vh' }}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="list" element={<List />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App;
