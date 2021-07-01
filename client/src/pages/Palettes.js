import React from 'react';
import { Link } from 'react-router-dom';

const Palettes = () => {
  return (
    <div>
      <h1>Palettes</h1>
      <Link to='/palettes/2'>2</Link>
      <Link to='/palettes/999'>999</Link>
    </div>
  );
};

export default Palettes;
