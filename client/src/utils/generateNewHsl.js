const generateNewHsl = () => {
  const generateHue = () => Math.floor(Math.random() * 360);

  const generateSaturation = () => {
    const max = 100;
    const min = 5;

    return Math.floor(Math.random() * (max - min) + min);
  };

  const generateLightness = () => {
    const max = 95;
    const min = 10;

    return Math.floor(Math.random() * (max - min) + min);
  };

  return {
    h: generateHue(),
    s: generateSaturation(),
    l: generateLightness(),
  };
};

export default generateNewHsl;
