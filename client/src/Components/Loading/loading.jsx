import React from 'react';
import { Link } from 'react-router-dom';
import cesped from '../../img/cesped.png'
import './loading.css'

const Loading = () => {
    return ( 
        <div className="header">
            <div className="social-buttons">
                <a href="https://github.com/Ramon181" class="social-buttons__button social-button" aria-label="LinkedIn">
                    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt='img' width='30px' height='30px' />
                </a>
                <a href="https://www.linkedin.com/in/ramon-antonio-hernandez-81617623a/" class="social-buttons__button social-button social-button--github" aria-label="GitHub">
                    <img src='https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-noire.png' alt='img' width='30px' height='30px' />
                </a>
            </div>
            <div className="info">
                <h1>POKE API</h1>
                <div className="sides">
                    <Link to='/home'>
                        <button className="cta">
                            <span>START</span>
                            <svg viewBox="0 0 13 10" height="10px" width="15px">
                                <path d="M1,5 L11,5"></path>
                                <polyline points="8 1 12 5 8 9"></polyline>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className='paisaje'>
                <img className='gif' src='https://media3.giphy.com/media/nMy8HTFQRWpudNwbxQ/giphy.gif?cid=ecf05e47nediwlhn8hvyonsidw0ffqkh9vcigfqz85bks75c&rid=giphy.gif&ct=s' alt=''/>
                <img className='cesped' src={cesped} alt=''/>
                </div>
            </div>
        </div>
     );
}
 
export default Loading;