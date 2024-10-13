import React from 'react';
import '../styles/Mine1.css'; // Importer le fichier CSS
import MinerAnimation from '../AnimationMiner';
import ManagerAnimation from '../ManagerAnimation';

const Mine1: React.FC = () => {
  return (
    <div className="mine1-background">
      <MinerAnimation />
      <ManagerAnimation />
      {/* Contenu du composant */}
    </div>
  );
};

export default Mine1;
