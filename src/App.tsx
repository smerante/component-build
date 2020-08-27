import React from 'react';
import './App.scss';
import FilterableProductTable from './product-table/FilterableProductTable';
import { MyContext } from './MyContext';

class App extends React.Component<any, any> {
  render() {
    return (
      <MyContext.Provider value={'some-value-2'} >
        <FilterableProductTable></FilterableProductTable>
      </MyContext.Provider>
    );
  }
}

export default App;
