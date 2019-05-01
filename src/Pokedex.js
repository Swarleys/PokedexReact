import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const { pokemons, exp, isWinner } = this.props;
    let title;
    if (isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand!</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand!</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h4>Total Experience: {exp}</h4>
        <div className="Pokedex-cards">
          {pokemons.map(pokemon => (
            <Pokecard
              id={pokemon.id}
              exp={pokemon.base_experience}
              name={pokemon.name}
              type={pokemon.type}
              key={pokemon.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
