import React from 'react';
import './pagination.css'

const Pagination = ({postsPerPege, totalPokemons, paginate}) => {

    const pokemonsNumber = [];

    for (let i = 1; i <= Math.ceil(totalPokemons / postsPerPege); i++) {
        pokemonsNumber.push(i)
    }

    return ( 
        <div className="content_detail__pagination cdp" >
            {
                pokemonsNumber.map(n => (
                        <a href={`#!${n}`} key={n} className="cdp_i" onClick={() => paginate(n)}>{n}</a>
                ))
            }
        </div>
     );
}
 
export default Pagination;