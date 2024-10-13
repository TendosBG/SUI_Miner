import React, { useState, useEffect } from 'react';

const ManagerAnimation: React.FC = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  // Tableau contenant les chemins vers les images
  const frames = [
    'manager/manager1.png',
   'manager/manager2.png',
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
    <div id='manager'>
      {/* Affiche l'image en fonction de l'index actuel */}
      <img
        src={frames[frameIndex]}
        alt="Animation Frame"
        style={{ width: '35px', height: '39px' }} // Ajustez la taille de l'image selon vos besoins
      />
    </div>
  );
};

export default ManagerAnimation;