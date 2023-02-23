import React from 'react';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import Pokegame from './Pokegame';
import pokemonInfo from './pokemonInfo';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className='App-header'>Pokegame</h1>
        <Pokegame pokemon={pokemonInfo}/>
    </div>
  );
}

export default App;
