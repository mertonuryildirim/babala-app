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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
};

const Summary = () => {
    return (
        <div style={container}>
            <div style={boxContainer}>1</div>
            <div style={boxContainer}>2</div>
        </div>
    );
};

export default Summary;
