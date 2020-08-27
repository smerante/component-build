import React from 'react';
import './_index.scss';
import SearchBar from './search-bar/SearchBar';
import ProductTable from './product-table/ProductTable';
import { MyContext } from '../MyContext';

export interface ProductTableState {
  searchText: string;
  inStock: boolean;
}

class FilterableProductTable extends React.Component<any, ProductTableState> {

  static contextType = MyContext;

  constructor(props: any) {
    super(props);
    this.state = {
      searchText: '',
      inStock: false
    };
    this.onSearch = this.onSearch.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentDidMount() {
    console.warn('recieved context: ', this.context);
  }

  onSearch(src: string) {
    this.setState({
      searchText: src
    });
  }

  onCheck(src: boolean) {
    this.setState({
      inStock: src
    });
  }


  render() {
    return (
      <div className={'filterable-product-table'}>
        <h1 className={'filterable-product-table--title'}>Filterable Product Table</h1>
        <SearchBar {...this.state} search={(e: string) => this.onSearch(e)} check={(e: boolean) => this.onCheck(e)}></SearchBar>
        <ProductTable {...this.state}></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;
