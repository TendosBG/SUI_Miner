import React from 'react';
import '../styles/Mine2.css'; // Importer le fichier CSS
import DrillAnimation from '../animation/DrillAnimation';
import ManagerAnimation from '../animation/ManagerAnimation';
import handleAcheterAmelioration2  from '../App.tsx';
import handleManager2  from '../App.tsx';

interface Props{
  x: number;
  y : number;
  z : number;
  a : number;
  handleman : () => void;
  handleame: () => void;
}

const Mine2= ({x,y,z,a,handleman,handleame}: Props) => {
  return (
    <div className="mine2-background">
      <DrillAnimation />
      <ManagerAnimation />
      {/* Contenu du composant */}
      <p className='level'>LVL {y}</p>
      <button onClick={handleame}>
        {x} 
      </button>
      <button onClick={handleman}>
        Acheter un manager pour la mine 1({z} pièces) Level : ({a})
      </button>
    </div>
  );
};

export default Mine2;