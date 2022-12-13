import React, { useContext } from 'react';
import { ShopCartContext } from "../../context/ShopContext";


const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopCartContext);


  return (
    <div className='cartItem'>
        <img src={productImage}/>
        <div className='description'>
                <p>
                    <b>{productName}</b>
                </p>
                <p>₹{price}</p>
                <div className='countHandler'>
                    <button onClick={() => addToCart(id)}>+</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => removeFromCart(id)}>-</button>
                </div>
        </div>
    </div>
  )
}

export default CartItem
