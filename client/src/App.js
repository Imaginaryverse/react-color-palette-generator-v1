import React from 'react';
import { PalettesProvider } from './PalettesContext';
import { Switch, Route } from 'react-router-dom';
import { Generator, Home, Palettes, PaletteDetails } from './pages';
import Nav from './components/Nav';
import './App.css';

const App = () => {
  return (
    <PalettesProvider>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/generator'>
            <Generator />
          </Route>
          <Route exact path='/palettes'>
            <Palettes />
          </Route>
          <Route exact path='/palettes/:id'>
            <PaletteDetails />
          </Route>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </PalettesProvider>
  );
};

export default App;
