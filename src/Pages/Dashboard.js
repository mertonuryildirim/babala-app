import { Container } from '@mui/system';
import * as React from 'react';
import { useState, useEffect } from 'react';

import Summary from '../components/Summary';
import Table from '../components/Table';
import PieChartRequest from '../components/PieChartRequest';
import PieChartCity from '../components/PieChartCity';
import axios from 'axios';

const chartStyles = {
    display: 'flex',
    marginBottom: '20px',
    gap: '10px',
};

function Dashboard() {
    const [data, setData] = useState({
        pie_chart_city: [],
        pie_chart_request: [],
        summary: {},
        table: [],
    });

    useEffect(() => {
        axios
            .get('https://webhook.site/0e14353a-2e6d-4f04-9dc5-d3a8f43df173')
            .then((response) => {
                setData(response.data);
            });
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

            <Summary summaryData={data.summary} />

            <div style={chartStyles}>
                <PieChartRequest chartData={data.pie_chart_request} />
                <PieChartCity chartData={data.pie_chart_city} />
            </div>

            <Table data={data.table} />
        </Container>
    );
}

export default Dashboard;
