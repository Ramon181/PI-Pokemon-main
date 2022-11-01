import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { postPokemon } from '../../Redux/Action';
import './createPokemon.css'

const CreatePokemon = () => {

    const dispatch = useDispatch();
    const history = useHistory()

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [hp, setHp] = useState(0);
    const [attack, setAttack] = useState(0);
    const [defense, setDefense] = useState(0);
    const [speed, setSpeed] = useState(0);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [types, setTypes] = useState([]);

    function handleSelect(e) {
        if (types.includes(e.target.value)) {
            setTypes(types.filter(l => l !== e.target.value))
        } else {
            setTypes([...types, e.target.value]);
        }
    }

    const submit = (e) => {
        if (!error) {
            e.preventDefault();
            create(name,image,hp,attack,defense,speed,weight,height,)
            const newPokemon = {
                name: name,
                image: image,
                hp: hp,
                attack: attack,
                defense: defense,
                speed: speed,
                weight: weight,
                height: height,
                types: types,
            }
            dispatch(postPokemon(newPokemon));
            setName('');
            setImage('');
            setHp(0);
            setAttack(0);
            setDefense(0);
            setSpeed(0);
            setWeight(0);
            setHeight(0);
            setTypes([])
            history.push('/home')
        }else{
            alert('Invalid Data')
        }
    }


    const error = validate(name,image,hp,attack,defense,speed,weight,height,types)

    return (
        <div className='create_pokemon'>
            <form className='signup-container' onSubmit={e => submit(e)}>
                <div className='left-container'>
                    <div>
                        <div className="box">
                            <input className='checkbox' id="Fire" type="checkbox"  value='fire' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <label for="Fire">Fire</label>
                            <img className='imagenn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/2048px-Pok%C3%A9mon_Fire_Type_Icon.svg.png'alt='' width='30px' height='30px'/>
                        </div>
                        <div className="box">
                            <input className='checkbox' id="Bug" type="checkbox" value='bug' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/2048px-Pok%C3%A9mon_Bug_Type_Icon.svg.png'alt='' width='30px' height='30px'/>
                            <label for="Bug">Bug</label>
                        </div>
                        <div className="box">
                            <input className='checkbox' id="Flying" type="checkbox" value='flying' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/1200px-Pok%C3%A9mon_Flying_Type_Icon.svg.png'alt='' width='30px' height='30px'/>
                            <label for="Flying">Flying</label>
                        </div>
                        <div className="box">
                            <input className='checkbox' id="Electric" type="checkbox" value='electric' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/2048px-Pok%C3%A9mon_Electric_Type_Icon.svg.png'alt='' width='30px' height='30px'/>
                            <label for="Electric">Electric</label>
                        </div>
                        <div className="box">
                            <input className='checkbox' id="Fairy" type="checkbox" value='fairy' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png'alt='' width='30px' height='30px'/>
                            <label for="Fairy">Fairy</label>
                        </div>
                    </div>
                    <div>
                        <div className="box">
                            <input className='checkbox' id="Grass" type="checkbox" value='grass' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://storage.googleapis.com/nianticweb-media/pokemongo/types/grass.png'alt='' width='30px' height='30px'/>
                            <label for="Grass">Grass</label>
                        </div>
                        <div className="box">
                            <input className='checkbox' id="Ground" type="checkbox" value='ground' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://lh3.googleusercontent.com/OP0gOkczyXMELosJnuT19yxFpLK38nHU3IcRyyJkdMOO12A2MHcZD8h1BdChcq-h71NvuFxOKZkeibhf_Ulwtx5Z5JhuChR9lzE6Ql16VfcDrw'alt='' width='30px' height='30px'/>
                            <label for="Ground">Ground</label>
                        </div>
                        <div className="box">
                            <input className='checkbox' id="Normal" type="checkbox" value='normal' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1200px-Pok%C3%A9mon_Normal_Type_Icon.svg.png'alt='' width='30px' height='30px'/>
                            <label for="Normal">Normal</label>
                        </div>
                        <div className="box">
                            <input className='checkbox' id="Poison" type="checkbox" value='poison' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1024px-Pok%C3%A9mon_Poison_Type_Icon.svg.png'alt='' width='30px' height='30px'/>
                            <label for="Poison">Poison</label>
                        </div>
                        <div className="box">
                            <input className='checkbox' id="Water" type="checkbox" value='water' onChange={(e) => handleSelect(e)}/>
                            <span className="check"></span>
                            <img className='imagenn' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png'alt='' width='30px' height='30px'/>
                            <label for="Water">Water</label>
                        </div>
                    </div>
                </div>
                <div className='right-container'>
                    <header>
                        <div className='set'>
                            <div className='pets-name'>
                                <label className='letra_input' for='name'>Name</label>
                                <input id='name'
                                    value={name}
                                    name='name'
                                    placeholder="Name"
                                    type='text'
                                    onChange={(ev) => {
                                        setName(ev.target.value)
                                    }} />
                            </div>
                            <div className='pets-name'>
                                <label className='letra_input' for='image'>Image</label>
                                <input id='image' value={image} name='image' placeholder="URL" type='url' onChange={(ev) => {
                                        setImage(ev.target.value)
                                    }}/>
                            </div>
                        </div>

                        <div className='set'>
                            <div className='pets-breed'>
                                <label className='letra_input' for='hp'>Hp</label>
                                <input id='hp' value={hp} name='hp' placeholder="Hp" type='number' onChange={(ev) => {
                                        setHp(ev.target.value)
                                    }}/>
                            </div>
                            <div className='pets-birthday'>
                                <label className='letra_input' for='speed'>Speed</label>
                                <input id='speed' value={speed} name='speed' placeholder='Speed' type='number' onChange={(ev) => {
                                        setSpeed(ev.target.value)
                                    }}/>
                            </div>
                        </div>
                        <div className='set'>
                            <div className='pets-breed'>
                                <label className='letra_input' for='defense'>Defense</label>
                                <input id='defense' value={defense} name='defense' placeholder="Defense" type='number' onChange={(ev) => {
                                        setDefense(ev.target.value)
                                    }}/>
                            </div>
                            <div className='pets-birthday'>
                                <label className='letra_input' for='attack'>Attack</label>
                                <input id='attack' value={attack} name='attack' placeholder='Attack' type='number' onChange={(ev) => {
                                        setAttack(ev.target.value)
                                    }}/>
                            </div>
                        </div>
                        <div className='set'>
                            <div className='pets-breed'>
                                <label className='letra_input' for='weight'>Weight</label>
                                <input id='weight' value={weight} name='weight' placeholder="Weight" type='number' onChange={(ev) => {
                                        setWeight(ev.target.value)
                                    }}/>
                            </div>
                            <div className='pets-birthday'>
                                <label className='letra_input' for='height'>Height</label>
                                <input id='height' value={height} name='height' placeholder='Height' type='number' onChange={(ev) => {
                                        setHeight(ev.target.value)
                                    }}/>
                            </div>
                        </div>
                        <p className='mensaje_error'>{error}</p>
                        
                    </header>       
                    <footer>
                        <div className='set'>
                            <Link to={'/home'}>
                              <button id='back'>Back</button>
                            </Link>
                            <button type='submit' disabled={error} id='next'>Next</button>
                        </div>
                    </footer>
                </div>
            </form>
        </div>
    );
}

const create = (name,image,hp,attack,defense,speed,weight,height,types) => {
    if (name && image && hp && attack && defense && speed && weight && height && types) {
        alert('todo correcto')
    }else alert('Pokemon Created')
}

const validate = (name,image,hp,attack,defense,speed,weight,height,types) => {
    if (!name) return "Name Required";
    if (!image) return "Invalid Data!";
    if (hp <= 0) return "Invalid Data!";
    if (attack < 1 && attack > 100) return "Invalid Data!";
    if (defense < 1 && defense > 100) return "Invalid Data!";
    if (speed < 1 && speed > 100) return "Invalid Data!";
    if (height < 1 && height > 100) return "Invalid Data!";
    if (weight < 1 && !weight) return "Invalid Data!";
    if (!types) return "Invalid Data!"
}

export default CreatePokemon;