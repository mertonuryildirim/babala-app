import * as React from 'react';
import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({ data }) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        console.log(data);
        if (!data || data.length === 0) return;
        setCities(
            data.reduce((acc, item) => {
                const city = acc.find((city) => city.city === item.city);

                if (!city) {
                    const newCity = { city: item.city };
                    newCity[item.help_category.trim()] = item.count;
                    acc.push(newCity);
                } else {
                    city[item.help_category.trim()] = item.count;
                }
                return acc;
            }, []),
        );
    }, [data, setCities]);

    return (
        <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Şehir</TableCell>
                        <TableCell align="right">Barınma</TableCell>
                        <TableCell align="right">Isınma</TableCell>
                        <TableCell align="right">Gıda</TableCell>
                        <TableCell align="right">Yakıt</TableCell>
                        <TableCell align="right">Bebek Bakım</TableCell>
                        <TableCell align="right">Hijyen</TableCell>
                        <TableCell align="right">İlaç</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cities.map((row) => (
                        <TableRow
                            key={row.city}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.city}
                            </TableCell>
                            <TableCell align="right">
                                {row['Barınma'] || 0}
                            </TableCell>
                            <TableCell align="right">
                                {row['Isınma'] || 0}
                            </TableCell>
                            <TableCell align="right">
                                {row['Gıda'] || 0}
                            </TableCell>
                            <TableCell align="right">
                                {row['Yakıt'] || 0}
                            </TableCell>
                            <TableCell align="right">
                                {row['Bebek Bakım'] || 0}
                            </TableCell>
                            <TableCell align="right">
                                {row['Hijyen'] || 0}
                            </TableCell>
                            <TableCell align="right">
                                {row['İlaç'] || 0}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
