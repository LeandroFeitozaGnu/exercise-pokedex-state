import React from 'react';
import Pokemon from './Pokemon';
import pokemons from './data'; 

class Pokedex extends React.Component {
  
  constructor() {
    super();
    this.state = {
      pokemons: [],
      pokemon: pokemons[0],
      counter: 0,
    }
    this.savePokemonState = this.savePokemonState.bind(this)
  }

  getPokemons() {
    this.setState({ pokemons: pokemons })
  }

  savePokemonState() {
    if (this.state.counter == 8) {
      this.setState({ pokemon: this.state.pokemons[0] })
    }
    this.setState((previousState, _props) => ({
      counter: previousState.counter + 1,
      pokemon: this.state.pokemons[this.state.counter],
    }))
    console.log(this.state.counter)
  }



  componentDidMount() {
    this.getPokemons()
  }

    render() {
      const { pokemon } = this.state
        return (
          <div>
            <div className="pokedex">
              <Pokemon pokemon={pokemon} />)
            </div>
            <input
              type="button"
              value="Next"
              onClick={this.savePokemonState}
            />
          </div>
        );
    }
}

export default Pokedex;