import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopCartContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotatCartAmount } = useContext(ShopCartContext);
  const totalAmount = getTotatCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product, index) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={index} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>SubTotal : ₹{totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <h1>Your Cart Is Empty.</h1>
      )}
    </div>
  );
};

export default Cart;
