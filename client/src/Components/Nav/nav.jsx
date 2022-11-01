import React from 'react';
import SearchBar from '../SearchBar/searchBar';
import './nav.css'

const Nav = ({orderByName, orderByAttack, filterByCreated, setCurrentPage, powerMax}) => {


    return (
        <div className='nav_body'>
            <SearchBar setCurrentPage={setCurrentPage} />
            <div className="box_nav">
                <select onChange={(e)=>orderByName(e)} value='Alphabetic Order' >
                    <option disabled>Alphabetic Order</option>
                    <option value='all'>All</option>
                    <option value='Asc'>Order Asc</option>
                    <option value='Desc'>Order Desc</option>
                </select>
            </div>
            <div className="box_nav">
                <select onChange={(e) => orderByAttack(e)} value='Attack Order'>
                    <option>Attack Order</option>
                    <option value='all'>All</option>
                    <option value='high'>Highest Attack</option>
                    <option value='low'>Lower Attack</option>
                </select>
            </div>
            <button onChange={(e) => powerMax(e)}>max</button>
            <div className="box_nav">
                <select onChange={(e) => filterByCreated(e)} value='Filter'>
                    <option disabled>Filter</option>
                    <option value='all'>All Pokemons</option>
                    <option value='created'>Pokemon Created</option>
                    <option value='api'>Pokemon Api</option>
                </select>
            </div>
        </div>
    );
}

export default Nav;