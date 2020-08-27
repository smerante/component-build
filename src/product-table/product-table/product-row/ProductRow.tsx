import React from 'react';
import './_index.scss';
import { Product } from '../ProductTable';

class ProductRow extends React.Component<Product, any> {
  render() {
    return (
      <tr key={this.props.name} className={`product-row ${this.props.stocked ? '' : 'product-row--no-stock'}`}>
        <td>
          {this.props.name}
        </td>
        <td>
        {this.props.price} 
        </td>
      </tr>
    );
  }
}

export default ProductRow;
