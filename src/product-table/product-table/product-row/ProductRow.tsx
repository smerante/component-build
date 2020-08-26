import React from 'react';
import './_index.scss';
import { Product } from '../ProductTable';
class ProductRow extends React.Component<Product, any> {
  // constructor(props: any) {
  //   super(props);
  // }

  render() {
    return (
      <tr key={this.props.name} className={'product-row'}>
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
