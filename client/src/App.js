import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/home';
import Loading from './Components/Loading/loading';
import Details from './Components/Details/details';
import CreatePokemon from './Components/CreatePokemon/createPokemon';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/home/details/:id' element={<Details/>} />
        <Route path='/home/create' element={<CreatePokemon/>} />
        <Route path='/' element={<Loading/>} />
      </Routes>
    </div>
  );
}


export default App;
