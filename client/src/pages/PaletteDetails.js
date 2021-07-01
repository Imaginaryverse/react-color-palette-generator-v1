import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { PalettesContext } from '../PalettesContext';

const toHslString = (h, s, l) => {
  return `${h}, ${s}%, ${l}%`;
};

const toRgbString = (r, g, b) => {
  return `${r}, ${g}, ${b},`;
};

const PaletteDetails = () => {
  const { palettes } = useContext(PalettesContext);
  const { id } = useParams();
  const palette = palettes.find(palette => palette.id === id);

  console.log(palette);

  return (
    <section className='palette-details-page'>
      <h1>{palette.name ? palette.name : ''}</h1>
      {palette ? (
        <ul className='details-list'>
          {palette.colors.map(color => (
            <li className='details-list-item' key={color.name}>
              <div className='details-list-item__info'>
                <p>Name: {color.name}</p>
                <p>Hex: {color.hex}</p>
                <p>HSL: {toHslString(color.hsl.h, color.hsl.s, color.hsl.l)}</p>
                <p>RGB: {toRgbString(color.rgb.r, color.rgb.g, color.rgb.b)}</p>
              </div>
              <div
                className='details-list-item__color-preview'
                style={{ backgroundColor: `${color.hex}` }}
              ></div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Oops! Something went wrong...</p>
      )}
    </section>
  );
};

export default PaletteDetails;
