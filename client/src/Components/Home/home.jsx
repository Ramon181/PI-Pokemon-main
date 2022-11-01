/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterCreated, filterTypes, getPokemons, maxPower, orderAttack, orderName, types } from '../../Redux/Action';
import Nav from '../Nav/nav';
import SideBar from '../SideBar/sideBar';
import Pagination from '../Pagination/pagination';
import Pokemons from '../Pokemons/pokemons';
import './home.css';
import NavBar from '../NavBar/navBar';

const Home = () => {

    const pokemons = useSelector(state => state.allPokemons);
    const dispatch = useDispatch();

    const [order, setOrder] = useState('');
    const [currentPege, setCurrentPage] = useState(1);
    const [postsPerPege] = useState(12);

    useEffect(() => {
        dispatch(getPokemons())
        dispatch(types())
    }, [dispatch]);

    const indexOfLast = currentPege * postsPerPege;
    const indexOffirst = indexOfLast - postsPerPege;
    const currentPokemons = pokemons.slice(indexOffirst, indexOfLast);
    const paginate = (number) => setCurrentPage(number)

    /////////////////////////////////////////////////////--FILTROS--/////////////////////////////////////////////////////////////////

    const filterByTypes = (e) => {
        if (e.target.value === 'all') {
            dispatch(getPokemons())
        }
        dispatch(filterTypes(e.target.value, currentPokemons.name));
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    const filterByCreated = (e) => {
        if (e.target.value === 'all') {
        dispatch(getPokemons());
        }
        dispatch(filterCreated(e.target.value, currentPokemons.createInDb));
        setCurrentPage(1)
        setOrder(`Ordenado ${e.target.value}`)
    }

    const orderByName = (e) => {
        if (e.target.value === 'all') {
            dispatch(getPokemons())
        }
        dispatch(orderName(e.target.value))
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`)
    }

    const orderByAttack = (e) => {
        if (e.target.value === 'all') {
            dispatch(getPokemons())
        }
        dispatch(orderAttack(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    }

    const powerMax = (e) => {
        console.log('hola,', e.target.value)
        dispatch(maxPower(e.target.value))
        setOrder(`Ordenado ${e.target.value}}`)
    } 
    console.log(pokemons)

    const resetHome = (e) => {
        
        dispatch(getPokemons())
        setCurrentPage(1);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div>
            <NavBar resetHome={resetHome}/>
            <div className='home_body'>
                <SideBar filterByTypes={filterByTypes} setCurrentPage={setCurrentPage}/>
                <div className='cards_body'>
                    <Pokemons pokemons={currentPokemons} />
                    <Pagination postsPerPege={postsPerPege} totalPokemons={pokemons.length} paginate={paginate} />
                </div>
                <Nav powerMax={powerMax} filterByCreated={filterByCreated} orderByName={orderByName} orderByAttack={orderByAttack} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    );
}

export default Home;