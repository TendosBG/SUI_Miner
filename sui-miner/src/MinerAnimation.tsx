import React, { useState, useEffect } from 'react';

const MinerAnimation: React.FC = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  // Tableau contenant les chemins vers les images
  const frames = [
    'miner/miner2.png',
    'miner/miner1.png', 
    'miner/miner4.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Passe à l'image suivante toutes les 200ms
      setFrameIndex((prevFrame) => (prevFrame + 1) % frames.length);
    }, 500); // Change l'image toutes les 200ms

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div>
      {/* Affiche l'image en fonction de l'index actuel */}
      <img
        src={frames[frameIndex]}
        alt="Miner Animation Frame"
        style={{ width: '20px', height: '20px' }} // Ajustez la taille de l'image selon vos besoins
      />
    </div>
  );
};

export default MinerAnimation;
