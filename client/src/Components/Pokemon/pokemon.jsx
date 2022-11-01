import React from 'react';
import { Link } from 'react-router-dom';
import './pokemon.css'

const Pokemon = ({ name, image, types, id, attack }) => {
    return (
        // <div className='card_body'>
        //     <img className='image_card' src={image} alt='img' />
        //     <div className='card_header'>
        //         
        //     </div>
        // </div>
        <div className= 'container'>
            <div className= 'card'>
                <Link to={`/home/details/${id}`} className= 'image'>
                    <img href="#" src={image} alt='img'/>
                </Link>
                <div className= 'content'>
                <div className='types_card'>
                    {
                        types.map(e => {
                            return (
                                <img key={e.name} src={require(`./img/${e.name}.png`).default} title={e.name} alt='' width='20px' height='20px' />
                            )
                        })
                    }
                    <h5 className='letra_card'>{attack}</h5>
                    <h5 className='letra_card'>{name}</h5>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Pokemon;