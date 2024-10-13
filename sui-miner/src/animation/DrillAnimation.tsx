import React, { useState, useEffect } from 'react';

const DrillAnimation: React.FC = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  // Tableau contenant les chemins vers les images
  const frames = [
    'drill/drill1.png',
    'drill/drill2.png',
    'drill/drill3.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Passe à l'image suivante toutes les 200ms
      setFrameIndex((prevFrame) => (prevFrame + 1) % frames.length);
    }, 250); // Change l'image toutes les 200ms

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, [frames.length]);

  return (
    <div className='drill'>
      {/* Affiche l'image en fonction de l'index actuel */}
      <img
        src={frames[frameIndex]}
        alt="Animation Frame"
        style={{ width: '55px', height: '45px' }} // Ajustez la taille de l'image selon vos besoins
      />
    </div>
  );
};

export default DrillAnimation;