import React from 'react';
import './_index.scss';
import ProductCategoryRow from './product-category-row/ProductCategoryRow';
import ProductRow from './product-row/ProductRow';
class ProductTable extends React.Component {
  // constructor(props: any) {
  //   super(props);
  // }

  render() {
    return (
      <div className={'product-table'}>
        product-table
        <ProductCategoryRow></ProductCategoryRow>
        <ProductRow></ProductRow>
      </div>
    );
  }
}

export default ProductTable;
