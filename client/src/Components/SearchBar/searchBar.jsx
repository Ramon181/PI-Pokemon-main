import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons, searchPokemons } from '../../Redux/Action';
import './search.css'

const SearchBar = ({setCurrentPage}) => {

    const [search, setSearch] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const pokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons())
    }, [dispatch])
    console.log(pokemons);

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(searchPokemons(search));
        setCurrentPage(1)
        setSearch('')
    }

    const onClick = (s) => {
        setSearch(s);
        setSuggestions([])
    }

    const onchange = (e) => {
        let matches = []
        if (e.length > 0) {
            matches = pokemons.filter(pokemon => {
                const regex = new RegExp(`${e}`, "gi");
                return pokemon.name.match(regex)
            })
        }
        console.log('matches', matches)
        setSuggestions(matches)
        setSearch(e)
    }
    console.log(search)

    return (
        <div className='search_body'>
            <form onSubmit={(e) => onSubmit(e)} className='form_body'>
            <input placeholder="Type here" className="input" name="text" type="text" value={search} onChange={e => onchange(e.target.value)}/>
            <button className="button_submit"  type='submit' >buscar</button>
            </form>

            <div className='suggestions'>
            {
                suggestions && suggestions.map((suggestion, i) =>
                    <p onClick={() => onClick(suggestion.name)} className='suger' key={i}>{suggestion.name}</p>
                )
            }
            </div>
        </div>
    );
}

export default SearchBar;