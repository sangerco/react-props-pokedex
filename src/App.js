import React from 'react';
import Pokecard from './Pokecard';
import Pokedex from './Pokedex';
import pokemonInfo from './pokemonInfo';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1 className='App-header'>Pokedex</h1>
        <Pokedex pokemon={pokemonInfo}/>
    </div>
  );
}

export default App;
