import React from 'react';
import './_index.scss';

class SearchBar extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onCheck($event: any) {
    this.props.check($event.target.checked);
  }

  onSearch($event: any) {
    this.props.search($event.target.value);
  }

  render() {
    return (
      <div className={'search-bar'}>
        <input className={'search-bar--search'} onInput={this.onSearch} placeholder="Search..."></input>
        <div className={'search-bar--checkbox'}>
          <input id="inStock" type="checkbox" onClick={(e) => this.onCheck(e)}></input>
          <label htmlFor="inStock">Only show products in stock</label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
