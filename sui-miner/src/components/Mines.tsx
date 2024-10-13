import React, { useState } from 'react';
import '../styles/Mines.css';
import DisplayAmountVbux from './DisplayAmountVbux';
import CartAnimation from '../animation/CartAnimation';
import CartAnimation from '../CartAnimation';
import { ConnectButton, useCurrentAccount } from '@mysten/dapp-kit';
import { BuyButton } from './BuyButton';

const Mines: React.FC = () => {
  const [amount, setAmount] = useState(100); // Manage state here
  const account = useCurrentAccount();

  if (!account) {
    return (
      <div className="mines-background">
        <ConnectButton className='web-btn' />
      </div>
    );
  } else {
    return (
      <div className="mines-background">
        <div className='web-btn'>
          <ConnectButton />
          <BuyButton onCreated={(id) => console.log(`Created: ${id}`)} setAmount={setAmount} amount={amount} />
        </div>

        <CartAnimation />
        <DisplayAmountVbux amount={amount} /> {/* Pass amount as prop */}
        {/* Contenu du composant */}
      </div>
    );
  }
}

export default Mines;
