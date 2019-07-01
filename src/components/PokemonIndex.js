import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: ''
  }
  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(pokemon => this.setState({pokemon: pokemon}))
  }
  handleSearch = (event, data) => {
    this.setState({ searchTerm: data.value })
  }
  handleNewPokemon = (pokemon) => {
    const newPokemon = {
      name: pokemon.name,
      sprites: {
        front: pokemon.frontUrl,
        back: pokemon.backUrl
      },
      stats: [
        {
          value: pokemon.hp,
          name: "hp"
        }
      ],
    }
    this.setState({ pokemon: [...this.state.pokemon, newPokemon ]})
  }
  render() {
    const pokemon = this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} showNoResults={this.state.pokemon.length > 0} />
        <br />
        <PokemonCollection pokemon={pokemon} />
        <br />
        <PokemonForm onNewPokemon={this.handleNewPokemon} />
      </div>
    )
  }
}

export default PokemonPage
