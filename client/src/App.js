import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home/home';
import Loading from './Components/Loading/loading';
import Details from './Components/Details/details';
import CreatePokemon from './Components/CreatePokemon/createPokemon';


function App() {
  return (
    <div className="App">
      <Route path={'/home'} component={Home}/>
      <Route path={'/home/details/:id'} component={Details}/>
      <Route exact path={'/home/create'} component={CreatePokemon}/>
      <Route exact path={'/'} component={Loading}/>
    </div>
  );
}


export default App;
