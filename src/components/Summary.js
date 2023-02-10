import React from 'react';
import { Paper } from '@mui/material';

const Summary = ({ summaryData }) => {
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
                    <span>{summaryData.total_request_count}</span>
                </p>
                <p style={{ display: 'flex', marginBottom: '10px' }}>
                    <span>Teyit Edilmiş Talep Sayısı: &nbsp;</span>
                    <span>{summaryData.confirmed_request_count}</span>
                </p>
                <p style={{ display: 'flex' }}>
                    <span>Teyit Edilmemiş Talep Sayısı: &nbsp;</span>
                    <span>{summaryData.unconfirmed_request_count}</span>
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
                        <span>
                            {summaryData.total_number_of_pending_referrals}
                        </span>
                    </p>

                    <p style={{ display: 'flex', marginBottom: '10px' }}>
                        <span>Yönlendirilen Yardım Sayısı: &nbsp;</span>
                        <span>{summaryData.number_of_assistance_referred}</span>
                    </p>

                    <p style={{ display: 'flex' }}>
                        <span>Ulaşılan Yardım Sayısı: &nbsp;</span>
                        <span>{summaryData.number_of_assistance_received}</span>
                    </p>
                </div>
            </Paper>
        </div>
    );
};

export default Summary;
