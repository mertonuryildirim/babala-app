import * as React from 'react';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import Summary from '../components/Summary';
import Table from '../components/Table';

const chartStyles = {
    display: 'flex',
    height: '65vh',
};

function Dashboard() {
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

export default Dashboard;
