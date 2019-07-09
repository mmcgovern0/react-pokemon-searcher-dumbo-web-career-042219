import React, { Component } from 'react';

class Search extends Component {

    handleChange = (event) => {
        this.props.search(event.target.value)
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.searchTerm} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default Search;