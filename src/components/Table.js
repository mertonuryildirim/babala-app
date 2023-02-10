import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
    city,
    shelter,
    warm,
    food,
    fuel,
    babyCare,
    hygiene,
    medicine,
) {
    return { city, shelter, warm, food, fuel, babyCare, hygiene, medicine };
}

const rows = [
    createData('Adana', 159, 6.0, 24, 4.0, 123123, 22, 12),
    createData('Adıyaman', 237, 9.0, 37, 4.3, 123123, 22, 12),
    createData('Diyarbakır', 262, 16.0, 24, 6.0, 123123, 22, 12),
    createData('Gaziantep', 305, 3.7, 67, 4.3, 123123, 22, 12),
    createData('Hatay', 356, 16.0, 49, 3.9, 123123, 22, 12),
    createData('Kahramanmaraş', 356, 16.0, 49, 3.9, 123123, 22, 12),
    createData('Kilis', 356, 16.0, 49, 3.9, 123123, 22, 12),
    createData('Malatya', 356, 16.0, 49, 3.9, 123123, 22, 12),
    createData('Osmaniye', 356, 16.0, 49, 3.9, 123123, 22, 12),
    createData('Şanlıurfa', 356, 16.0, 49, 3.9, 123123, 22112, 12),
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper}>
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
                    {rows.map((row) => (
                        <TableRow
                            key={row.name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component="th" scope="row">
                                {row.city}
                            </TableCell>
                            <TableCell align="right">{row.shelter}</TableCell>
                            <TableCell align="right">{row.warm}</TableCell>
                            <TableCell align="right">{row.food}</TableCell>
                            <TableCell align="right">{row.fuel}</TableCell>
                            <TableCell align="right">{row.babyCare}</TableCell>
                            <TableCell align="right">{row.hygiene}</TableCell>
                            <TableCell align="right">{row.medicine}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
