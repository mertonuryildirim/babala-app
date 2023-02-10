import * as React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import List from './Pages/List';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="list" element={<List />} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </div>
    );
}

export default App;
