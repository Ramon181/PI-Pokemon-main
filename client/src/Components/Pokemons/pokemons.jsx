import React from 'react'
import Pokemon from '../Pokemon/pokemon';
import './pokemons.css'

const Pokemons = ({ pokemons }) => {

    if (!pokemons.length) {
        return(
            <div className='card_loader'>
                <span className="loader"></span>
            </div>
        )
    }

    return (
            <div className='cards_header'>
                {
                    pokemons && pokemons.map(e => (
                        <Pokemon
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            image={e.image}
                            types={e.types}
                            attack={e.attack}
                        />
                    ))
                }
            </div>
    );
}

export default Pokemons;