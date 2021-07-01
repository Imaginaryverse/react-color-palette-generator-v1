import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PalettesContext } from '../PalettesContext';
import PalettePreview from '../components/PalettePreview';

const Palettes = () => {
  const { palettes } = useContext(PalettesContext);

  useEffect(() => {
    console.log(palettes);
  }, [palettes]);

  return (
    <div>
      <h1>Palettes</h1>
      {palettes[0] ? (
        palettes.map(palette => (
          <Link to={`/palettes/${palette.id}`} key={palette.id}>
            <PalettePreview palette={palette} />
          </Link>
        ))
      ) : (
        <div>
          <p>Looks like you don't have any palettes yet...</p>
          <p>Click on the button below to start generating!</p>
          <Link className='btn generator-btn' to='/generator'>
            Generator
          </Link>
        </div>
      )}
      {/* <Link to='/palettes/2'>2</Link>
      <Link to='/palettes/999'>999</Link> */}
    </div>
  );
};

export default Palettes;
