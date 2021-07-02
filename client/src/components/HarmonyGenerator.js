import React, { useState, useEffect } from 'react';
import PrimaryForm from './PrimaryForm';
import HarmonyColorCell from './HarmonyColorCell';

const getRandomHue = () => Math.floor(Math.random() * 360);

const getRandomNum = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min) + min);

const getPositiveCompHue = (hue, degrees) => {
  return hue + degrees > 360 ? hue + degrees - 360 : hue + degrees;
};

/* const getPositiveCompLum = (lum, percent) => {
  return lum + percent > 100 ? 100 : lum + percent;
}; */

const getNegativeCompHue = (hue, degrees) => {
  return hue - degrees < 0 ? hue - degrees + 360 : hue - degrees;
};

const getNegativeCompLum = (lum, percent) => {
  if (lum === 100) return 100;
  return lum - percent < 0 ? 0 : lum - percent;
};

/* const formatHsl = (h, s, l) => {
  return `hsl(${h}, ${s}%, ${l}%)`;
}; */

const HarmonyGenerator = () => {
  const [primaryHue, setPrimaryHue] = useState(0);
  const [primarySat, setPrimarySat] = useState(0);
  const [primaryLum, setPrimaryLum] = useState(0);
  const [primaryColor, setPrimaryColor] = useState({ h: 0, s: 0, l: 0 });
  const [posCompA, setPosCompA] = useState({ h: 0, s: 0, l: 0 });
  const [posCompB, setPosCompB] = useState({ h: 0, s: 0, l: 0 });
  const [negCompA, setNegCompA] = useState({ h: 0, s: 0, l: 0 });
  const [negCompB, setNegCompB] = useState({ h: 0, s: 0, l: 0 });

  const handleInputChange = (e, name) => {
    switch (name) {
      case 'hue':
        setPrimaryHue(+e.target.value);
        break;
      case 'sat':
        setPrimarySat(+e.target.value);
        break;
      case 'lum':
        setPrimaryLum(+e.target.value);
        break;
      default:
        return;
    }
  };

  const handleRandomClick = e => {
    e.preventDefault();
    setPrimaryHue(getRandomHue());
    setPrimarySat(getRandomNum(50, 100));
    setPrimaryLum(getRandomNum(40, 80));
  };

  useEffect(() => {
    setPrimaryHue(getRandomHue());
    setPrimarySat(getRandomNum(50, 100));
    setPrimaryLum(getRandomNum(40, 80));
  }, []);

  useEffect(() => {
    setPrimaryColor({ h: primaryHue, s: primarySat, l: primaryLum });
    setPosCompA({
      h: getPositiveCompHue(primaryHue, 135),
      s: getNegativeCompLum(primarySat, 10),
      l: primaryLum,
    });
    setPosCompB({
      h: getPositiveCompHue(primaryHue, 155),
      s: primarySat,
      l: getNegativeCompLum(primaryLum, 5),
    });
    setNegCompA({
      h: getNegativeCompHue(primaryHue, 135),
      s: getNegativeCompLum(primarySat, 10),
      l: primaryLum,
    });
    setNegCompB({
      h: getNegativeCompHue(primaryHue, 155),
      s: primarySat,
      l: getNegativeCompLum(primaryLum, 5),
    });
  }, [primaryHue, primarySat, primaryLum]);

  return (
    <section className='harmony-generator'>
      <PrimaryForm
        primaryHue={primaryHue}
        primarySat={primarySat}
        primaryLum={primaryLum}
        handleInputChange={handleInputChange}
        handleRandomClick={handleRandomClick}
      />
      <div className='harmony-color-grid'>
        <HarmonyColorCell color={primaryColor} />
        <HarmonyColorCell color={posCompA} />
        <HarmonyColorCell color={posCompB} />
        <HarmonyColorCell color={negCompA} />
        <HarmonyColorCell color={negCompB} />
      </div>
    </section>
  );
};

export default HarmonyGenerator;
