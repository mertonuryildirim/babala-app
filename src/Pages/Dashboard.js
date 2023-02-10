import { Container } from '@mui/system';
import * as React from 'react';
import { useState } from 'react';

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
    const [data] = useState({
        pieChartCity: [12, 19, 3, 5, 2, 3, 5, 2, 3, 7],
        pieChartRequest: [12, 19, 3, 5, 2, 3, 4],
        summary: {
            total_request_count: 21,
            confirmed_request_count: 11,
            unconfirmed_request_count: 10,
            total_number_of_pending_referrals: 13,
            number_of_assistance_referred: 6,
            number_of_assistance_received: 7,
        },
        table: [],
    });

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
                <PieChartRequest chartData={data.pieChartRequest} />
                <PieChartCity chartData={data.pieChartCity} />
            </div>

            <Table tableData={data.table} />
        </Container>
    );
}

export default Dashboard;
