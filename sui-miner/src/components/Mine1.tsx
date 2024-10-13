import React from 'react';
import '../styles/Mine1.css'; // Importer le fichier CSS
import MinerAnimation from '../animation/AnimationMiner';
import ManagerAnimation from '../animation/ManagerAnimation';

const Mine1: React.FC = () => {
  const level = 1;
  return (
    <div className="mine1-background">
      <MinerAnimation />
      <ManagerAnimation />
      {/* Contenu du composant */}
      <p className='level'>LVL {level}</p>
    </div>
  );
};

export default Mine1;
