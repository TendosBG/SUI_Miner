import React from 'react';
import './DisplayAmountVbux.css';

interface DisplayAmountVbuxProps {
    amount: number;
}

const DisplayAmountVbux: React.FC<DisplayAmountVbuxProps> = ({ amount }) => {
    return (
        <div id='flag'>
            <div id='goldenSui'></div>
            <p>{amount} GT</p>
        </div>
    );
};

export default DisplayAmountVbux;