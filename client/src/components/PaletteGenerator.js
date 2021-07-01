import React, { useState, useEffect } from 'react';
import generateColor from '../utils/generateColor';
import ColorCell from './ColorCell';

const PaletteGenerator = () => {
  const [palette, setPalette] = useState(null);

  const generateNewColors = async () => {
    const newColors = await Promise.all(
      palette.map(async color => {
        if (!color.locked) {
          color.color = await generateColor();
          return color;
        }

        return color;
      })
    );

    return newColors;
  };

  const handleGenerateClick = async () => {
    const newColors = await generateNewColors();

    setPalette(newColors);
  };

  const toggleLocked = num => {
    setPalette(
      palette.map(color => {
        if (color.num === num) {
          color.locked = !color.locked;
          return color;
        }
        return color;
      })
    );
  };

  useEffect(() => {
    if (!palette) {
      async function generatePalette() {
        const list = [];
        for (let i = 0; i < 5; i++) {
          const clr = {
            num: i + 1,
            color: await generateColor(),
            locked: false,
          };

          list.push(clr);
        }
        setPalette(list);
      }
      generatePalette();
    }
  }, [palette]);

  return (
    <section className='palette-generator'>
      <div className='palette-grid'>
        {palette
          ? palette.map(color => (
              <ColorCell
                color={color}
                toggleLocked={toggleLocked}
                key={color.num}
              />
            ))
          : ''}
      </div>
      <button
        className='btn generate-btn'
        onClick={() => handleGenerateClick()}
      >
        Generate
      </button>
    </section>
  );
};

export default PaletteGenerator;