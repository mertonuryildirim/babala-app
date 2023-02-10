import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const TABLE_CELLS = [
    'Şehir',
    'Barınma',
    'Isınma',
    'Gıda',
    'Yakıt',
    'Bebek Bakım',
    'Hijyen',
    'İlaç',
];

export default function BasicTable() {
    return (
        <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {TABLE_CELLS.map((cell) => (
                            <TableCell align={cell !== 'Şehir' ? 'right' : ''}>
                                {cell}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Adana</TableCell>
                        <TableCell align="right">{0}</TableCell>
                        <TableCell align="right">{0}</TableCell>
                        <TableCell align="right">{0}</TableCell>
                        <TableCell align="right">{0}</TableCell>
                        <TableCell align="right">{0}</TableCell>
                        <TableCell align="right">{0}</TableCell>
                        <TableCell align="right">{0}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
