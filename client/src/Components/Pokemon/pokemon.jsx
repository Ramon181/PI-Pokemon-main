import React from "react";
import { Link } from "react-router-dom";
import "./pokemon.css";

const Pokemon = ({ name, image, types, id, attack }) => {
    console.log(types);
    return (
      <div className="container">
        <div className="card">
          <Link to={`/home/details/${id}`} className="image">
            <img href="#" src={image} alt="img" />
          </Link>
          <div className="content">
            <div className="types_card">
              {types.map(e => (
                <img
                  key={e.name}
                  src={require(`./img/${e.name}.png`)}
                  title={e.name}
                  alt=""
                  width="20px"
                  height="20px"
                />
              ))}
              <h5 className="letra_card">{attack}</h5>
              <h5 className="letra_card">{name}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pokemon;
  
