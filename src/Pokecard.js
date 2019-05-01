import React, { Component } from "react";
import "./Pokecard.css";
const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let pokemonImg = `${POKE_API}${padToThree(id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img src={pokemonImg} alt={name} />
        <div>Type: {type}</div>
        <div>Exp: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
