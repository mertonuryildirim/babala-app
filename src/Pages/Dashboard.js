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
        pie_chart_city: [
            { label: 'Adana', value: 12 },
            { label: 'Adıyaman', value: 19 },
            { label: 'Diyarbakır', value: 3 },
            { label: 'Gaziantep', value: 5 },
            { label: 'Hatay', value: 2 },
            { label: 'Kahramanmaraş', value: 3 },
            { label: 'Kilis', value: 4 },
            { label: 'Malatya', value: 123 },
            { label: 'Osmaniye', value: 444 },
            { label: 'Şanlıurfa', value: 3 },
        ],
        pie_chart_request: [
            { label: 'Barınma', value: 12 },
            { label: 'Isınma', value: 19 },
            { label: 'Gıda', value: 3 },
            { label: 'Yakıt', value: 5 },
            { label: 'Bebek Bakım', value: 2 },
            { label: 'Hijyen', value: 3 },
            { label: 'İlaç', value: 4 },
        ],
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
                <PieChartRequest chartData={data.pie_chart_request} />
                <PieChartCity chartData={data.pie_chart_city} />
            </div>

            <Table tableData={data.table} />
        </Container>
    );
}

export default Dashboard;
