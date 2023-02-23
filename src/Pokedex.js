import React from "react";
import Pokecard from "./Pokecard";
import './Pokedex.css';

const Pokedex = ({ pokemon }) => (
    <div className="Pokedex">
        <div className="Pokedex-container">
            {pokemon.map(p => (
                <Pokecard key={p.id} id={p.id} name={p.name} type={p.type} base_experience={p.base_experience} />
            ))}
        </div>
    </div>
)

export default Pokedex;