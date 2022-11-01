import { FILTER_CREATED, FILTER_TYPES, GET_POKEMONS, ORDER_BY_ATTACK, ORDER_BY_NAME, SEARCH_POKEMONS, DETAILS_POKEMON, RESET_DETAILS, POST_POKEMON, TYPES } from "../Action";


const initialState = {
    allPokemons: [],
    pokemons: [],
    types: [],
    details: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload,
            }
        case SEARCH_POKEMONS:
            return {
                ...state,
                allPokemons: action.payload,
            }
        case DETAILS_POKEMON:
            return{
                ...state,
                details: action.payload
            }
        case POST_POKEMON:
            return{
                ...state,
                allPokemons: action.payload,
            }
        case TYPES:
            return{
                ...state,
                types: action.payload
            }
        case RESET_DETAILS:
            return{
                ...state,
                details:[],
            }
        case FILTER_TYPES:
            let allPokemon = state.pokemons
            let type = [];
            allPokemon.forEach(e => {
                if (e.hasOwnProperty('types') &&
                    e.types.find(t => t.name === action.payload)) {
                    type.push(e)
                }
            });
            return {
                ...state,
                allPokemons: type
            }
        case 'MAX_POWER':

            return{
                ...state,
                allPokemon: allPokemon.filter(e => e.attack === 100)
            }
        case ORDER_BY_NAME:
            let name = action.payload === 'Asc' ?
                state.allPokemons.sort((a, b) => {
                    if (a.name > b.name) {
                        return 1
                    }
                    if (b.name > a.name) {
                        return -1
                    }
                    return 0
                }) : action.payload === 'Desc' ?
                    state.allPokemons.sort((a, b) => {
                        if (a.name > b.name) {
                            return -1
                        }
                        if (b.name > a.name) {
                            return 1
                        }
                        return 0
                    }) : state.allPokemons

            return {
                ...state,
                allPokemon: name
            }
        case ORDER_BY_ATTACK:
            let attack = action.payload === 'high' ?
            state.allPokemons.sort((a,b) => {
                if (a.attack < b.attack) {
                    return 1
                }
                if (b.attack < a.attack) {
                    return -1
                }
                return 0
            }): action.payload === 'low' ?
            state.allPokemons.sort((a,b) => {
                if (a.attack < b.attack) {
                    return -1
                }
                if (b.attack < a.attack) {
                    return 1
                }
                return 0
            }): state.allPokemons

            return{
                ...state,
                allPokemons: attack
            }
        case FILTER_CREATED:
            let created = action.payload === 'created' 
            ? state.pokemons.filter(c => c.createInDb)
            : state.pokemons.filter(c => !c.createInDb)
            return{
                ...state,
                allPokemons: action.payload === 'all' ? state.allPokemons : created
            }   
        default: return state
    }
}

export default rootReducer;