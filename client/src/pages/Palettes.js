import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PalettesContext } from '../PalettesContext';
import generateColor from '../utils/generateColor';

const test = {
  id: 1,
  title: 'Super Mario',
  colors: ['hex', 'hex', 'hex', 'hex', 'hex'],
  date: '30/06/2021',
};

const Palettes = () => {
  const { addPalette } = useContext(PalettesContext);

  return (
    <div>
      <h1>Palettes</h1>
      <Link to='/palettes/2'>2</Link>
      <Link to='/palettes/999'>999</Link>
      <button onClick={() => addPalette()}>SEND</button>
      <button onClick={() => generateColor()}>Generate</button>
    </div>
  );
};

export default Palettes;
