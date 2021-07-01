import axios from 'axios';
import generateNewHsl from './generateNewHsl';
import { hslToHex } from './colorConverter';

const generateColor = async () => {
  const hsl = generateNewHsl();
  const hex = hslToHex(hsl.h, hsl.s, hsl.l);

  const res = await axios.get(
    `https://api.color.pizza/v1/${hex.replace('#', '')}`
  );
  const name = res.data.colors[0].name;
  const rgb = res.data.colors[0].rgb;

  const color = {
    name,
    hex,
    hsl,
    rgb,
  };

  return color;
};

export default generateColor;
