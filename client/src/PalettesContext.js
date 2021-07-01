import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import fetchPalettes from './utils/fetchPalettes';

export const PalettesContext = createContext();

export const PalettesProvider = props => {
  const [palettes, setPalettes] = useState([]);

  const addPalette = palette => {
    axios.post('/api/palettes', palette).then(res => setPalettes(res));
  };

  const deletePalette = paletteId => {
    axios
      .delete('/api/palettes', { data: { id: paletteId } })
      .then(res => setPalettes(res));
  };

  useEffect(() => {
    if (!palettes[0]) {
      fetchPalettes().then(res => setPalettes(res));
    }

    console.log(palettes);
  }, [palettes]);

  return (
    <PalettesContext.Provider value={{ palettes, addPalette, deletePalette }}>
      {props.children}
    </PalettesContext.Provider>
  );
};
