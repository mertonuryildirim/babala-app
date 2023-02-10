import React from 'react';
import { Paper } from '@mui/material';

const Summary = () => {
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                gap: '10px',
                marginBottom: '20px',
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
                <div>
                    <p>Toplam Talep Sayısı</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Teyit Edilmiş Talep Sayısı</p>
                    <p>0</p>
                </div>
                <div>
                    <p>Teyit Edilmemiş Talep Sayısı</p>
                    <p>0</p>
                </div>
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
                    <div>
                        <p>Yönlendirme Bekleyen Sayısı</p>
                        <p>0</p>
                    </div>

                    <div>
                        <p>Yönlendirilen Yardım Sayısı</p>
                        <p>0</p>
                    </div>

                    <div>
                        <p>Ulaşılan Yardım Sayısı</p>
                        <p>0</p>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

export default Summary;
