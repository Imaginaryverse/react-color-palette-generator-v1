import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PalettesContext } from '../PalettesContext';
import PalettePreview from '../components/PalettePreview';

const Palettes = () => {
  const { palettes, deletePalette } = useContext(PalettesContext);

  return (
    <section className='page palettes-page'>
      <h1>Palettes</h1>
      {palettes[0] ? (
        <ul className='palettes-list'>
          {palettes.map(palette => (
            <li className='palettes-list__item' key={palette.id}>
              <Link to={`/palettes/${palette.id}`}>
                <PalettePreview palette={palette} />
              </Link>
              <button
                className='btn delete-btn'
                onClick={() => deletePalette(palette.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>Looks like you don't have any palettes yet...</p>
          <p>Click on the button below to start generating!</p>
          <Link className='btn generator-btn' to='/generator'>
            Generator
          </Link>
        </div>
      )}
    </section>
  );
};

export default Palettes;
