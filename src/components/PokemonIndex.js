import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
// import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state={
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(pokeData => {
        this.setState({pokemon: pokeData})
      })
  }

  handleNewPokemon = (pokemonData) => {
    const newPokemon = {
      id: this.state.pokemon.length + 1,
      name: pokemonData.name,
      stats: [
        {
          name: "hp",
          value: pokemonData.hp
        }
      ],
      sprites: {
        front: pokemonData.frontUrl,
        back: pokemonData.backUrl
      }
    }
    this.setState({pokemon: [...this.state.pokemon, newPokemon]})
  }

  handleSearch = (data) => {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(pokeData => {
        const filtered = pokeData.filter(pokemon => pokemon.name.includes(data))
        this.setState({pokemon: filtered})
      })
  }

  searchPokemon = (input) => {
    this.setState({searchTerm: input})
  }

  render() {
    
    let pokemonArray = [...this.state.pokemon]
    pokemonArray = pokemonArray.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm)
    })

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search search={this.searchPokemon} searchTerm={this.state.searchTerm}/>
        {/* <Search onSearchChange={_.debounce(() => console.log('🤔'), 500)} showNoResults={false} /> */}
        <br />
        <PokemonCollection pokemon={pokemonArray}/>
        <br />
        <PokemonForm onSubmit={this.handleNewPokemon}/>
      </div>
    )
  }
}

export default PokemonPage






// handlePoem = (poemData) => {
//   const newPoem = {
//     ...poemData,
//     // id: parseInt(this.state.poems.length) + 1,
//     author: this.state.username
//   }
//   fetch('http://localhost:3000/poems', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Application': 'application/json'
//     },
//     body: JSON.stringify(newPoem)
//   })
//     .then(resp => resp.json())
//     .then(finalNewPoem => {
//       this.setState({poems: [...this.state.poems, finalNewPoem]})        
//     })
// }