import React from 'react';

function ButtonWithPrice({ price }) {
  return (
    <button>
      Acheter pour {price}€
    </button>
  );
}

export default ButtonWithPrice;