import React from 'react';
import '../styles/Mine3.css'; // Importer le fichier CSS
import ManagerAnimation from '../animation/ManagerAnimation';
const Mine3: React.FC = () => {
  return (
    <div className="mine2-background Locked">
        <ManagerAnimation />
        <img className='imgLock' src="../../public/password.png" alt="Locked" />
      {/* Contenu du composant */}
    </div>
  );
};

export default Mine3;