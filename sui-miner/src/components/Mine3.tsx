import '../styles/Mine3.css'; // Importer le fichier CSS
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
const Mine3= ({x,y,z,a,handleman,handleame} : Props) => {
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

export default Mine3;