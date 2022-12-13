import React from 'react'
import { PRODUCTS } from '../../Products';
import Product from './Product';
import "./shop.css";

const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>Sky Shop</h1>
      </div>

      <div className='products'>
        {PRODUCTS.map((product, index) => (
            <Product key={index} data={product}/>
        ))}
      </div>
    </div>
  )
}

export default Shop;
