import React from 'react';

const Alert = ({error}) => {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: '10px',
                backgroundColor: 'darkred',
                color: 'white',
                borderRadius: '5px',
                padding: '10px',
                left: 'calc(50% - 350px)',
                width: '700px',
                textAlign: 'center',
            }}
        >
            {error}
        </div>
    )
};

export default Alert;
