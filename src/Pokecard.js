import React from "react";
import "./Pokecard.css";

const imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

const Pokecard = ({id, name, type, base_experience}) => (
    <div className="Pokecard">
        <h3 className="Pokecard-name">{name}</h3>
        <img className="Pokecard-img" src={`${imgUrl}/${id}.png`}/>
        <>
            <p className="Pokecard-type">Type: {type}</p>
            <p className="Pokecard-exp">EXP: {base_experience}</p>
        </>
    </div>
)

export default Pokecard;