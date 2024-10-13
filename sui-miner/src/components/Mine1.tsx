import React,{useEffect,useState} from 'react';
import '../styles/Mine1.css'; // Importer le fichier CSS
import MinerAnimation from '../animation/AnimationMiner';
import ManagerAnimation from '../animation/ManagerAnimation';
import handleAcheterAmelioration1  from '../App.tsx';
import handleManager1  from '../App.tsx';

interface Props{
  x: number;
  y : number;
  z : number;
  a : number;
  handleman : () => void;
  handleame: () => void;
}
const Mine1= ({x,y,z,a,handleman,handleame} : Props) => {
  return (
    <div className="mine1-background">
      <MinerAnimation />
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

export default Mine1;
