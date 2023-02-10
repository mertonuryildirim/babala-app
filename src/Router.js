import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error';

export function Router() {
    return (
        <div style={{ background: '#f0f0f0', height: 'auto' }}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </div>
    );
}
