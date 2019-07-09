import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state={
    clicked: false
  }

  onClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {

    const hp = this.props.pokemon.stats.find(stat => stat.name === "hp").value

    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.state.clicked? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front} alt="oh no!" onClick={this.onClick}/>
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
