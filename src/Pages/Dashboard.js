import { Container } from '@mui/system';
import * as React from 'react';
import { useEffect, useState } from 'react';

import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import PieChartCity from '../components/PieChartCity';
import Summary from '../components/Summary';
import Table from '../components/Table';

const chartStyles = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    height: '350px',
};

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://f9b9-18-200-97-133.eu.ngrok.io/')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.log(error));
    }, []);

    return (
        <Container
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h1 style={{ margin: '30px 0' }}>BaBaLa TV</h1>
            <Summary />
            <Table data={data} />
            <div style={chartStyles}>
                {/* <LineChart /> */}
                <PieChart payload={data} />
                <PieChartCity payload={data} />
            </div>
        </Container>
    );
}

export default Dashboard;
