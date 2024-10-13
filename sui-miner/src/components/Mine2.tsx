import React from 'react';
import '../styles/Mine2.css'; // Importer le fichier CSS
import DrillAnimation from '../DrillAnimation';
import ManagerAnimation from '../ManagerAnimation';

const Mine2: React.FC = () => {
  return (
    <div className="mine2-background">
      <DrillAnimation />
      <ManagerAnimation />
      {/* Contenu du composant */}
    </div>
  );
};

export default Mine2;