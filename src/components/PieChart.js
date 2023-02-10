import React from 'react';
import { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Paper } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = [
    'Barınma',
    'Isınma',
    'Gıda',
    'Yakıt',
    'Bebek Bakım',
    'Hijyen',
    'İlaç',
];

const defaultValues = [0, 0, 0, 0, 0, 0, 0];

const data = {
    datasets: [
        {
            data: defaultValues,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 119, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 119, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function PieChart({ payload }) {
    const [categories, setCategories] = useState(defaultValues);

    const [chartData, setChartData] = useState(data);

    useEffect(() => {
        const tempData = data;
        tempData.datasets[0].data = defaultValues;
        setChartData(tempData);

        if (!payload || payload.length === 0) return;
        payload.forEach((element) => {
            const category = element.help_category.trim();

            if (!category || labels.indexOf(category) === -1) {
                console.log('Invalid category');
                return;
            }
            const index = labels.indexOf(category);
            const tempCategories = categories;
            tempCategories[index] = tempCategories[index] + element.count;
            setCategories(tempCategories);
        });

        const tempData2 = data;
        tempData2.datasets[0].data = categories;
        setChartData(tempData2);
    }, [payload, categories]);

    return (
        <Paper elevation={2} style={{ padding: '20px' }}>
            <h3 style={{ marginBottom: '18px' }}>
                İhtiyaca göre Talep Dağılımı
            </h3>
            <Pie data={chartData} />
        </Paper>
    );
}

export default PieChart;
