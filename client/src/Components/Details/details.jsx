import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { detailsPokemon, resetDetails } from '../../Redux/Action';
import arrow from '../../img/arrowL.png'
import './details.css'

const Details = () => {

    const pokemon = useSelector(state => state.details);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(detailsPokemon(id))
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(resetDetails())
    }, [dispatch])

    console.log(pokemon)

    return (
        <div className='details_body'>
            <div className='details_nav'>
                <Link to='/home'> <img src={arrow} alt='' width='45px' height='30px' /> </Link>
                <h2 className='nav_letra'>PokeDex</h2>
            </div>
            {
                !pokemon.id ?
                    <div className='cargando_details'>
                        <img className='' src='https://media3.giphy.com/media/nMy8HTFQRWpudNwbxQ/giphy.gif?cid=ecf05e47nediwlhn8hvyonsidw0ffqkh9vcigfqz85bks75c&rid=giphy.gif&ct=s' alt='' />
                    </div> :
                    <div className='details_box'>
                        <h2>{pokemon.name}</h2>
                        <div className='details_header'>
                            <div>
                                <div className='details_card'>
                                    <h3 className='space'>ID </h3>
                                    {
                                        pokemon.id.length > 5 ? <div></div>:
                                        <h3 className='space'>#{pokemon.id}</h3>
                                    }
                                </div>
                                <div className='details_card'>
                                    <h3 className='space'>Height</h3>
                                    <h3 className='space'>{pokemon.height}m</h3>
                                </div>
                                <div className='details_card'>
                                    <h3 className='space'>Weight</h3>
                                    <h3 className='space'>{pokemon.weight}kg</h3>
                                </div>
                                <div className='details_card'>
                                    <h3 className='space'>Types</h3>
                                    <div className='space'>
                                        {
                                            pokemon.types?.map(e => {
                                                return (
                                                    <img key={e.name} src={require(`./img/${e.name}.png`)} title={e.name} alt='' width='30px' height='30px' />
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>

                            <img className='img_details' src={pokemon.image} alt='' />

                            <div>
                                <div className='details_card'>
                                    <h3 className='space'>Hp</h3>
                                    <p className='number space'>{pokemon.hp}</p>
                                    <progress className='animated_progress' max='100' value={pokemon.hp} >{pokemon.hp}</progress>
                                </div>
                                <div className='details_card'>
                                    <h3 space>Attack</h3>
                                    <p className='number space'>{pokemon.attack}</p>
                                    <progress className='animated_progress' max='100' value={pokemon.attack} >{pokemon.attack}</progress>
                                </div>
                                <div className='details_card'>
                                    <h3 space>Defense</h3>
                                    <p className='number space'>{pokemon.defense}</p>
                                    <progress className='animated_progress' max='100' value={pokemon.defense} >{pokemon.defense}</progress>
                                </div>
                                <div className='details_card'>
                                    <h3 space>Speed</h3>
                                    <p className='number space'>{pokemon.speed}</p>
                                    <progress className='animated_progress' max='100' value={pokemon.speed} >{pokemon.speed}</progress>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}

export default Details;