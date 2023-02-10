import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Paper } from '@mui/material';
import {
    PIE_CHART_REQUEST_BACKGROUND_COLORS,
    PIE_CHART_REQUEST_BORDER_COLORS,
} from '../common/constants';

ChartJS.register(ArcElement, Tooltip, Legend);

const initialChartData = {
    labels: [],
    datasets: [
        {
            label: 'Talep Sayısı',
            data: [],
            backgroundColor: PIE_CHART_REQUEST_BACKGROUND_COLORS,
            borderColor: PIE_CHART_REQUEST_BORDER_COLORS,
            borderWidth: 1,
        },
    ],
};

function PieChartRequest({ chartData }) {
    const [pieChartData, setPieChartData] = useState(initialChartData);

    useEffect(() => {
        const tempChartData = JSON.parse(JSON.stringify(initialChartData));

        chartData.forEach((data) => {
            tempChartData.labels.push(data.label);
            tempChartData.datasets[0].data.push(data.value);
        });

        setPieChartData(tempChartData);
    }, [chartData]);

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
