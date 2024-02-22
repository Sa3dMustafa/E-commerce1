// HomePage.jsx
import React, { useEffect, useState } from 'react';
import Product from '../Components/Product';

function HomePage({ handleAddToCart }) {
  const [products, setProducts] = useState([]);
  const apiUrl = 'http://localhost:4000/products';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-sm-12 col-md-6 col-lg-3" key={product.id}>
          <Product
            product={product}
            showButton={true}
            handleAddToCart={() => handleAddToCart(product)}
          />
        </div>
      ))}
    </div>
  );
}

export default HomePage;
