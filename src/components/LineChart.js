import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: false,
            text: '',
        },
    },
};

const labels = [
    '10 Şubat',
    '11 Şubat',
    '12 Şubat',
    '13 Şubat',
    '14 Şubat',
    '15 Şubat',
    '16 Şubat',
];

const data = {
    labels,
    datasets: [
        {
            label: 'Teyit Edilmiş',
            data: [12, 19, 3, 5, 2, 3],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Teyit Edilmemiş',
            data: [122, 193, 31, 52, 22, 33],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function LineChart() {
    return <Line options={options} data={data} />;
}

export default LineChart;
