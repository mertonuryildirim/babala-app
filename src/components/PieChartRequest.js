import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Paper } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: [
        'Barınma',
        'Isınma',
        'Gıda',
        'Yakıt',
        'Bebek Bakım',
        'Hijyen',
        'İlaç',
    ],
    datasets: [
        {
            label: 'Talep Sayısı',
            data: [12, 19, 3, 5, 2, 3, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(55, 89, 14, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(55, 89, 14, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function PieChartRequest() {
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
            <Pie data={data} />
        </Paper>
    );
}

export default PieChartRequest;
