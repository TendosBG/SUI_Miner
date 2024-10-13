import React from 'react';
import '../styles/Mines.css';
import DisplayAmountVbux from './DisplayAmountVbux';
import CartAnimation from '../animation/CartAnimation';

const Mines: React.FC = () => {
    return (
      
      <div className="mines-background">
        <CartAnimation />
        <DisplayAmountVbux amount={1000} />
        {/* Contenu du composant */}
      </div>
    );
  };
  
  export default Mines;