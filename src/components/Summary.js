import React from 'react';

const container = {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
};

const boxContainer = {
    width: 500,
    height: 250,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#ddd',
};

const Summary = () => {
    return (
        <div style={container}>
            <div style={boxContainer}>
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
            </div>
            <div style={boxContainer}>
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
        </div>
    );
};

export default Summary;
