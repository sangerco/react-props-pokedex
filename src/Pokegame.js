import React from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

const Pokegame = ({ pokemon }) => {
    let hand1 = pokemon;
    let hand2 = [];

    while (hand2.length < hand1.length) {
        let idx = Math.floor(Math.random() * hand1.length);
        let randCard = hand1.splice(idx, 1)[0];
        hand2.push(randCard);
    }

    let hand1Exp = 0;
    let hand2Exp = 0;

    for (let i = 0; i < hand1.length; i++) {
        hand1Exp += hand1[i].base_experience;
    }

    for (let i = 0; i < hand2.length; i++) {
        hand2Exp += hand2[i].base_experience;
    }

    if (hand1Exp > hand2Exp) {
        return (
            <div className='Pokegame'>
                <h3 className='Pokegame-winner'>Winning Hand!</h3>
                <Pokedex pokemon={hand1}/>
                <h4 className='Pokegame-loser'>Losing Hand.</h4>
                <Pokedex pokemon={hand2}/>
            </div>
        )
    } else {
        return (
            <div className='Pokegame'>
                <h3 className='Pokegame-winner'>Winning Hand!</h3>
                <Pokedex pokemon={hand2}/>
                <h4 className='Pokegame-loser'>Losing Hand.</h4>
                <Pokedex pokemon={hand1}/>
            </div>
        )
    }
}

export default Pokegame;
