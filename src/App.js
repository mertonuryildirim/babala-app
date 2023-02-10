import * as React from 'react';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Summary from './components/Summary';
import Table from './components/Table';

function App() {
    return (
        <div>
            <Summary />
            <Table />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <LineChart />
                <PieChart />
            </div>
        </div>
    );
}

export default App;
