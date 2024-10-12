import React from 'react';
import '../styles/Mines.css';
import DisplayAmountVbux from './DisplayAmountVbux';

const Mines: React.FC = () => {
    return (
      <div className="mines-background">
        <DisplayAmountVbux amount={1000} />
        {/* Contenu du composant */}
      </div>
    );
  };
  
  export default Mines;