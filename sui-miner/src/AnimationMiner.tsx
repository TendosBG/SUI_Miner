import React, { useState, useEffect } from 'react';

const MinerAnimation: React.FC = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  // Tableau contenant les chemins vers les images
  const frames = [
    
    'miner/miner2.png', 
    'miner/miner3.png',
    
    'miner/miner5.png', 
    
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Passe à l'image suivante toutes les 200ms
      setFrameIndex((prevFrame) => (prevFrame + 1) % frames.length);
    }, 300); // Change l'image toutes les 200ms

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div id='miner'>
      {/* Affiche l'image en fonction de l'index actuel */}
      <img
        src={frames[frameIndex]}
        alt="Miner Animation Frame"
        style={{ width: '30px', height: '40px' }} // Ajustez la taille de l'image selon vos besoins
      />
    </div>
  );
};

export default MinerAnimation;