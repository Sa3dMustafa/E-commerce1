// CartPage.jsx
import React from 'react';
import Product from '../Components/Product';

function CartPage({ cartItems, handleAddToCart, handleRemoveFromCart }) {
  if (!Array.isArray(cartItems) || cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div>
      <h2>Your Cart</h2>
      <div className="row">
        {cartItems.map((item, index) => (
          <div className="col-sm-12 col-md-6 col-lg-3" key={index}>
            <Product
              product={item}
              isInCart={true}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart} // Pass handleRemoveFromCart here
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartPage;
