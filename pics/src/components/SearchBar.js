import React from 'react';

class SearchBar extends React.Component {
  // class has properties
  // this gives access to properties of instance of class belonging to

  state = { term: '' };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div>
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// event handlers:
// onClick
// onChange
// onSubmit
// no () in event handler

// onChange={e => console.log(e.target.value)}

// controlled: give react world info via state, instead of reaching into DOM to see value via value={this.state.term}
// dont store data in html!
// centralize data inside of React 5

// arrow functions automatically bind this (of function def)
// or can in constructor write
// constructor() {
//   this.drive = this.drive.bind(this);
// }
