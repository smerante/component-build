import React from 'react';
import './_index.scss';
class SearchBar extends React.Component {
  // constructor(props: any) {
  //   super(props);
  // }

  render() {
    return (
      <div className={'search-bar'}>
        <input className={'search-bar--search'} placeholder="Search..."></input>
        <div className={'search-bar--checkbox'}>
          <input id="inStock" type="checkbox"></input>
          <label htmlFor="inStock">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
