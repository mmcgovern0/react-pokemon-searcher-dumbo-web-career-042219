import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    flipped: false
  }
  handleClick = () => {
    this.setState({ flipped: !this.state.flipped })
  }
  render() {
    const pokemonImg = this.state.flipped ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front
    const hp = this.props.pokemon.stats.find(stat => {
      return stat.name === 'hp'
    })
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img src={pokemonImg} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
