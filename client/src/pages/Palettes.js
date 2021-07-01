import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PalettesContext } from '../PalettesContext';

const Palettes = () => {
  const { addPalette } = useContext(PalettesContext);

  return (
    <div>
      <h1>Palettes</h1>
      <Link to='/palettes/2'>2</Link>
      <Link to='/palettes/999'>999</Link>
      <button onClick={() => addPalette()}>SEND</button>
    </div>
  );
};

export default Palettes;