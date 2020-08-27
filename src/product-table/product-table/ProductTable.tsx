import React from 'react';
import './_index.scss';
import ProductCategoryRow from './product-category-row/ProductCategoryRow';
import ProductRow from './product-row/ProductRow';
import { ProductTableState } from '../FilterableProductTable';

export interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

class ProductTable extends React.Component<ProductTableState, any> {
  // constructor(props: any) {
  //   super(props);
  // }
  products: Product[] = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
  ];


  render() {
    let lastCategory = '';
    const rows: any[] = [];
    this.products.forEach((product: Product) => {
      const inStock = this.props.inStock ? product.stocked : true;
      if (product.category === lastCategory) {
        if (inStock && product.name.toLowerCase().includes(this.props.searchText.toLowerCase())) {
          rows.push(
            <ProductRow key={product.name} {...product} />
          )
        }
      } else {
        rows.push(
          <ProductCategoryRow key={product.category} {...product} />
        );
        if (inStock && product.name.toLowerCase().includes(this.props.searchText.toLowerCase())) {
          rows.push(
            <ProductRow key={product.name} {...product} />
          )
        }
        lastCategory = product.category;
      }
    });

    return (
      <div className={'product-table'}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;