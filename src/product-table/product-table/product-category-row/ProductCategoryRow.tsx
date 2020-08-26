import React, { Component } from 'react';
import './_index.scss';
import { Product } from '../ProductTable';

class ProductCategoryRow extends Component<Product, any> {
  render() {
    return (
      <tr key={this.props.category} className={'product-category-row'}>
        <td colSpan={2}>{this.props.category}</td>
      </tr>
    );
  }
}

export default ProductCategoryRow;
