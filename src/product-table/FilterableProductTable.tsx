import React from 'react';
import './_index.scss';
import SearchBar from './search-bar/SearchBar';
import ProductTable from './product-table/ProductTable';
class FilterableProductTable extends React.Component {
  // constructor(props: any) {
  //   super(props);
  // }

  render() {
    return (
      <div className={'filterable-product-table'}>
        <h1 className={'filterable-product-table--title'}>Filterable Product Table</h1>
        <SearchBar></SearchBar>
        <ProductTable></ProductTable>
      </div>
    );
  }
}

export default FilterableProductTable;
