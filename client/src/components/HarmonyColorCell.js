import React from 'react';
import { hslToHex } from '../utils/colorConverter';

const isDark = rgbArr => rgbArr.every(val => val < 200);

const hexToRgb = hex =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => '#' + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16));

const HarmonyColorCell = ({ color }) => {
  const hex = hslToHex(color.h, color.s, color.l);
  const rgb = hexToRgb(hex);
  const textStyle = {
    color: isDark(rgb) ? 'white' : 'black',
  };

  return (
    <div className='harmony-color-cell' style={{ backgroundColor: hex }}>
      <p style={textStyle}>{hex}</p>
    </div>
  );
};

export default HarmonyColorCell;
