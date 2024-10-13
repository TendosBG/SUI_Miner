import React from 'react';
import '../styles/Mine3.css'; // Importer le fichier CSS
import MinerAnimation from '../animation/AnimationMiner';
import ManagerAnimation from '../animation/ManagerAnimation';
const Mine3: React.FC = () => {
    function toggleLock() {
        const lock = document.querySelector('.Locked');
        if (lock) {
            lock.classList.remove('Locked');
        }
    }
  return (
    <div className="mine2-background Locked">
        <div className='manager3' >
            <ManagerAnimation />
            <MinerAnimation/>
        </div>
       
        <button className='imgLock' onClick={toggleLock} />
      {/* Contenu du composant */}
    </div>
  );
};

export default Mine3;