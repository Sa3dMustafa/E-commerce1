import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Product({ product, showButton, isInCart, handleAddToCart, handleRemoveFromCart }) {
  const location = useLocation();
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    handleAddToCart({ ...product, quantity });
    console.log('complete add');
    setQuantity(1);
  };

  const removeFromCart = () => {
    handleRemoveFromCart(product.id);
    console.log('removed from cart');
  };

  return (
    <div className="card mb-3 shadow-lg d-flex align-items-center">
      <img src={product.image} className="card-img-top height-200 p-4" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title.slice(0, 30)}</h5>
        <p className="card-text">{product.description.slice(0, 80).trim()}</p>
        <p>Price: {product.price}$</p>
        {isInCart ? (
          <div className="button">
            <div className="input-group d-flex justify-content-around">
              <div className="counter d-flex">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className="input-group-text">{quantity}</span>
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              </div>
              <button onClick={removeFromCart} className="btn btn-danger">
              Remove from Cart
            </button>
            </div>
          </div>
        ) : (
          showButton && (
            <div className="button">
              <Link to={`/product/${product.id}`} className="btn btn-primary me-2">
                Details
              </Link>
              <button onClick={addToCart} className="btn btn-success">
                Add to Cart
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Product;
