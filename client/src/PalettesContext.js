import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
import fetchPalettes from './utils/fetchPalettes';

export const PalettesContext = createContext();

export const PalettesProvider = props => {
  const [palettes, setPalettes] = useState(null);

  const addPalette = palette => {
    console.log('in context', palette);

    // axios.post('/api/palettes', palette).then(res => console.log(res.data.msg));
  };

  useEffect(() => {
    if (!palettes) {
      fetchPalettes().then(res => setPalettes(res));
    }

    console.log(palettes);
  }, [palettes]);

  return (
    <PalettesContext.Provider value={{ palettes, addPalette }}>
      {props.children}
    </PalettesContext.Provider>
  );
};
