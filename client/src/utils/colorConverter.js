const hslToRgb = (h, s, l) => {
  const hueToRgb = (x, y, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return x + (y - x) * 6 * t;
    if (t < 1 / 2) return y;
    if (t < 2 / 3) return x + (y - x) * (2 / 3 - t) * 6;
    return x;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;

    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }

  return [r * 255, g * 255, b * 255];
};

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0'); // convert to Hex and prefix "0" if needed
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

const rgbToHex = rgbArr => {
  const letters = {
    10: 'A',
    11: 'B',
    12: 'C',
    13: 'D',
    14: 'E',
    15: 'F',
  };

  let hex = '#';

  rgbArr.forEach(val => {
    if (val > 255) {
      hex += 'FF';
    } else if (val < 0) {
      hex += '00';
    } else {
      const first = Math.floor(val / 16);
      const second = (val / 16 - first) * 16;

      hex +=
        first < 10 ? `${first}` : first > 15 ? letters[15] : letters[first];
      hex +=
        second < 10 ? `${second}` : second > 15 ? letters[15] : letters[second];
    }
  });

  return hex;
};

export { hslToRgb, hslToHex, rgbToHex };
