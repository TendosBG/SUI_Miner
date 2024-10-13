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
      <p className='level'>LvL {a}</p>
      <p className='levelminer'>LvL {y}</p>
      <button className='buttonMiner' onClick={handleame}>
        {x}
      </button>
      <button className='buttonManager' onClick={handleman}>
        {z} 
      </button>
    </div>
  );
};

export default Mine2;