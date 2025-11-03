import '../styles/Mine1.css'; // Importer le fichier CSS
import MinerAnimation from '../animation/AnimationMiner';
import ManagerAnimation from '../animation/ManagerAnimation';

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

export default Mine1;
