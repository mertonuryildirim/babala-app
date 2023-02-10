import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Paper } from '@mui/material';
import {
    PIE_CHART_REQUEST_BACKGROUND_COLORS,
    PIE_CHART_REQUEST_BORDER_COLORS,
    PIE_CHART_REQUEST_LABELS,
} from '../common/constants';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChartRequest({ chartData }) {
    const [pieChartData] = useState({
        labels: PIE_CHART_REQUEST_LABELS,
        datasets: [
            {
                label: 'Talep Sayısı',
                data: chartData,
                backgroundColor: PIE_CHART_REQUEST_BACKGROUND_COLORS,
                borderColor: PIE_CHART_REQUEST_BORDER_COLORS,
                borderWidth: 1,
            },
        ],
    });

    return (
        <Paper
            elevation={2}
            style={{
                padding: '20px',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <h3 style={{ marginBottom: '15px' }}>
                İhtiyaca Göre Talep Dağılımı
            </h3>
            <Pie data={pieChartData} />
        </Paper>
    );
}

export default PieChartRequest;
