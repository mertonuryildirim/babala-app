import * as React from 'react';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import Summary from './components/Summary';
import Table from './components/Table';

function App() {
    const chartStyles = {
        display: 'flex',
        width: '100vw',
        height: '40vh',
    };

    return (
        <div>
            <Summary />
            <Table />
            <div style={chartStyles}>
                <LineChart />
                <PieChart />
            </div>
        </div>
    );
}

export default App;
