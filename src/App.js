import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import Dashboard from './Pages/Dashboard';
import List from './Pages/List';

function App() {
    return (
        <div style={{ background: '#f0f0f0', height: 'auto' }}>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="list" element={<List />} />
                <Route
                    path="*"
                    element={
                        <div style={{ padding: '38% 44%' }}>
                            404 Page Not Found
                        </div>
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
