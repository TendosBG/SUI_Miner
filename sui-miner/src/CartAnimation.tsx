import React, { useState, useEffect } from 'react';

const CartAnimation: React.FC = () => {
  const [frameIndex, setFrameIndex] = useState(0);

  // Tableau contenant les chemins vers les images
  const frames = [
    'cart/cart1.png',
    'cart/cart2.png',
    'cart/cart3.png',
    'cart/cart4.png',
    'cart/cart5.png',
    'cart/cart6.png',
    'cart/cart7.png',
    'cart/cart8.png',
    'cart/cart9.png',
    'cart/cart10.png',
    'cart/cart11.png',
    'cart/cart12.png',
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

export default CartAnimation;
