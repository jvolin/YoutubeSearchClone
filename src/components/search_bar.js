import React, { Component } from 'react';
//const Component = React.Component

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
  }
  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  render() {
    //this.state.term = 6 //This is BAD!  Use this.setState
    return (
    <div className="search-bar">
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)}
      />
    </div>
    )
  }
}

export default SearchBar;

