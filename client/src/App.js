import React, { useEffect, useState } from 'react';
import './App.css';
import ProductsService from './services/ProductsService'

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    ProductsService.getAll().then((response) => {
      console.log('peoeo', response)
      setProducts(response.data)
    })
  }, [])
  return (
    <div className="App">
      Productos
    <div>
        {products.map(product => <div> {product.name}</div>)}
    </div>
    </div>
  );
}

export default App;
