import React from 'react';
import { Link } from 'react-router-dom';
import './navBar.css'

const NavBar = ({resetHome}) => {
    return ( 
        <div className='navBar'>
            <header className="logo">
                <img className='ing_nav' src="https://cdn.atomix.vg/wp-content/uploads/2013/10/pokeball.png" border="0" alt='img'/>
                    <p className='titulo'>PokeApi</p>
            </header>
            <main>
                <nav className="breadcrumbs">
                    <div>
                        <Link to='/home' className='nott' onClick={(e) => resetHome(e)}><span href="#">Home</span></Link>
                        <Link to='/home/create' className='nott'><span href="#">Creation Pokemon</span></Link>
                    </div>
                </nav>
            </main>
        </div>
     );
}
 
export default NavBar;