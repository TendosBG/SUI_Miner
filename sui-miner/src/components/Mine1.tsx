import React from 'react';
import '../styles/Mine1.css'; // Importer le fichier CSS
import MinerAnimation from '../AnimationMiner';

const Mine1: React.FC = () => {
  return (
    <div className="mine1-background">
      <MinerAnimation />
      {/* Contenu du composant */}
    </div>
  );
};

export default Mine1;
