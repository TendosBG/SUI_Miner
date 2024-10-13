import React from 'react';
import '../styles/Mine2.css'; // Importer le fichier CSS
import DrillAnimation from '../animation/DrillAnimation';
import ManagerAnimation from '../animation/ManagerAnimation';

const Mine2: React.FC = () => {
  const level = 1;
  return (
    <div className="mine2-background">
      <p className='level'>LVL {level}</p>
      <DrillAnimation />
      <ManagerAnimation />
      {/* Contenu du composant */}
    </div>
  );
};

export default Mine2;