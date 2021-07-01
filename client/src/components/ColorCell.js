import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUnlock, faLock } from '@fortawesome/free-solid-svg-icons';

const toHslString = (h, s, l) => `hsl(${h}, ${s}%, ${l}%)`;

const isDark = rgbArr => rgbArr.every(val => val < 180);

const ColorCell = ({ color, toggleLocked }) => {
  const name = color.color.name;
  const hex = color.color.hex;
  const hsl = color.color.hsl;
  const rgb = color.color.rgb;

  const bgStyle = { backgroundColor: toHslString(hsl.h, hsl.s, hsl.l) };
  const textStyle = {
    color: isDark([rgb.r, rgb.g, rgb.b]) ? 'white' : 'black',
  };

  return (
    <div className='color-cell' style={bgStyle}>
      <button
        className='btn toggle-locked-btn'
        onClick={() => toggleLocked(color.num)}
      >
        {color.locked ? (
          <FontAwesomeIcon icon={faLock} />
        ) : (
          <FontAwesomeIcon icon={faUnlock} />
        )}
      </button>
      <div className='info-container'>
        <p className='info-container__name' style={textStyle}>
          {name}
        </p>
        <p className='info-container__hex' style={textStyle}>
          {hex}
        </p>
      </div>
    </div>
  );
};

export default ColorCell;
