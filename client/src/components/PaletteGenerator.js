import React, { useState, useEffect, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PalettesContext } from '../PalettesContext';
import generateColor from '../utils/generateColor';
import ColorCell from './ColorCell';

const PaletteGenerator = () => {
  const { addPalette } = useContext(PalettesContext);
  const [palette, setPalette] = useState(null);
  const [paletteName, setPaletteName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

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
    setIsGenerating(true);
    const newColors = await generateNewColors();

    setPalette(newColors);
    setIsGenerating(false);
  };

  const handleSaveClick = e => {
    e.preventDefault();

    const paletteToSave = {
      name: paletteName,
      id: uuidv4(),
      date: new Date().toLocaleString(),
      colors: palette.map(color => color.color),
    };
    addPalette(paletteToSave);
    setPaletteName('');
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
      setIsGenerating(true);
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
        setIsGenerating(false);
      }
      generatePalette();
    }
  }, [palette]);

  return (
    <section className='palette-generator'>
      <form className='palette-form' onSubmit={e => handleSaveClick(e)}>
        <input
          className='palette-form__input'
          type='text'
          value={paletteName}
          onChange={e => setPaletteName(e.target.value)}
          placeholder='Palette name'
          required
        />
        <input
          className='btn save-btn'
          type='submit'
          value='Save'
          disabled={isGenerating}
        />
      </form>
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
        disabled={isGenerating}
      >
        Generate
      </button>
    </section>
  );
};

export default PaletteGenerator;
