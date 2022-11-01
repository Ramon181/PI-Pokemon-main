import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const DETAILS_POKEMON = 'DETAILS_POKEMON';
export const SEARCH_POKEMONS = 'SEARCH_POKEMONS';
export const POST_POKEMON = 'POST_POKEMON';
export const TYPES = 'TYPES'
export const FILTER_TYPES = 'FILTER_TYPES';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_ATTACK = 'ORDER_BY_ATTACK';
export const RESET_DETAILS = 'RESET_DETAILS';


export const getPokemons = () => {
    return async (dispatch) => {
        const pokemons = await axios.get('http://localhost:3001/pokemons');
        dispatch({
            type: GET_POKEMONS,
            payload: pokemons.data
        })
    }
};

export const searchPokemons = (payload) => {
    return async (dispatch) => {
        try {
            const pokemon = await axios.get(`http://localhost:3001/pokemons?name=${payload}`);
            dispatch({
                type: SEARCH_POKEMONS,
                payload: pokemon.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const detailsPokemon = (id) => {
    return async (dispatch) => {
        try {
            const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
            dispatch({
                type: DETAILS_POKEMON,
                payload: pokemon.data
            }) 
        } catch (error) {
            console.log(error)
        }
    }
}

export const postPokemon = (payload) => {
    return async () => {
            const post = await axios.post('http://localhost:3001/pokemons', payload);
            return post;
    }
}

export const types = () => {
    return async (dispatch) => {
        const type = await axios.get('http://localhost:3001/types');
        dispatch({
            type: TYPES,
            payload: type,
        })
    }
}

export const resetDetails = () => {
    return {
        type: RESET_DETAILS
    }
}

export const filterTypes = (payload) => {
    return {
        type: FILTER_TYPES,
        payload,
    }
}

export const orderName = (payload) => {
    return {
        type: ORDER_BY_NAME,
        payload,
    }
}

export const orderAttack = (payload) => {
    return {
        type: ORDER_BY_ATTACK,
        payload,
    }
}

export const filterCreated = (payload) => {
    return {
        type: FILTER_CREATED,
        payload,
    }
}

export const maxPower = (payload) => {
    return{
        type: 'MAX_POWER',
        payload,
    }
}