import React from 'react';
import { Paper } from '@mui/material';

const Summary = () => {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                marginBottom: '20px',
                gap: '10px',
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    backgroundColor: 'white',
                    width: '100%',
                    borderRadius: '6px',
                    padding: '16px',
                }}
            >
                <p style={{ display: 'flex', marginBottom: '10px' }}>
                    <span>Toplam Talep Sayısı: &nbsp;</span>
                    <span>0</span>
                </p>
                <p style={{ display: 'flex', marginBottom: '10px' }}>
                    <span>Teyit Edilmiş Talep Sayısı: &nbsp;</span>
                    <span>0</span>
                </p>
                <p style={{ display: 'flex' }}>
                    <span>Teyit Edilmemiş Talep Sayısı: &nbsp;</span>
                    <span>0</span>
                </p>
            </Paper>
            <Paper
                elevation={2}
                sx={{
                    backgroundColor: 'white',
                    width: '100%',
                    borderRadius: '6px',
                    padding: '16px',
                }}
            >
                <div>
                    <p style={{ display: 'flex', marginBottom: '10px' }}>
                        <span>Yönlendirme Bekleyen Sayısı: &nbsp;</span>
                        <span>0</span>
                    </p>

                    <p style={{ display: 'flex', marginBottom: '10px' }}>
                        <span>Yönlendirilen Yardım Sayısı: &nbsp;</span>
                        <span>0</span>
                    </p>

                    <p style={{ display: 'flex' }}>
                        <span>Ulaşılan Yardım Sayısı: &nbsp;</span>
                        <span>0</span>
                    </p>
                </div>
            </Paper>
        </div>
    );
};

export default Summary;
