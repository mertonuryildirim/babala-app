import React from 'react';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Paper } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = [
    'Adana',
    'Adıyaman',
    'Diyarbakır',
    'Gaziantep',
    'Hatay',
    'Kahramanmaraş',
    'Kilis',
    'Malatya',
    'Osmaniye',
    'Şanlıurfa',
];

const data = {
    datasets: [
        {
            labels: labels,
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)',
                'rgba(55, 119, 64, 0.9)',
                'rgba(25, 119, 64, 0.9)',
                'rgba(25, 19, 64, 0.9)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 119, 64, 1)',
                'rgba(55, 119, 64, 1)',
                'rgba(25, 119, 64, 1)',
                'rgba(25, 19, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function PieChartCity({ payload }) {
    const [cities, setCities] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    const [chartData, setChartData] = useState(data);

    useEffect(() => {
        if (!payload || payload.length === 0) return;
        payload.forEach((element) => {
            const city = element.city.trim();

            if (!city || labels.indexOf(city) === -1) {
                console.log('Invalid city');
                return;
            }
            console.log('s');
            const index = labels.indexOf(city);
            const tempCities = cities;
            tempCities[index] = tempCities[index] + element.count;
            setCities(tempCities);
        });

        const tempData = data;
        tempData.datasets[0].data = cities;
        setChartData(tempData);
    }, [payload, cities, setCities]);

    return (
        <Paper elevation={2} style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '18px' }}>
                Şehire göre Tsalep Dağılımı
            </h3>
            <Pie data={chartData} />
        </Paper>
    );
}

export default PieChartCity;
