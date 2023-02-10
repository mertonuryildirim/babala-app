import { Container } from '@mui/system';
import * as React from 'react';
import { useEffect, useState } from 'react';

import Summary from '../components/Summary';
import Table from '../components/Table';
import PieChartRequest from '../components/PieChartRequest';
import PieChartCity from '../components/PieChartCity';

const chartStyles = {
    display: 'flex',
    marginBottom: '20px',
    gap: '10px',
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
                maxWidth: '1300px',
            }}
        >
            <img
                style={{ margin: '20px 0', width: '15%' }}
                src="./logo.jpg"
                alt="babala-logo"
            />

            <Summary />

            <div style={chartStyles}>
                <PieChartRequest payload={data} />
                <PieChartCity payload={data} />
            </div>

            <Table data={data} />
        </Container>
    );
}

export default Dashboard;
