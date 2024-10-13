import React from 'react';
import './DisplayAmountVbux.css';

interface DisplayAmountVbuxProps {
  amount: number; // Accept amount as a prop
}

const DisplayAmountVbux: React.FC<DisplayAmountVbuxProps> = ({ amount }) => {
  return (
    <div id='flag'>
      <p>{amount} GT</p>
    </div>
  );
};

export default DisplayAmountVbux;
