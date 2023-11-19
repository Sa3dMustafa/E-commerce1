import React, { useEffect, useState } from "react";
import Product from "../Components/Product";

function HomePage() {
  const apiUrl = "http://localhost:4000/products";
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <h2 className="text-center p-3">Our Products</h2>
      <div className="container">
        <div className="cat d-flex justify-content-center flex-wrap gap-md-4 mb-4">
          <button onClick={getAllProducts} className="btn btn-info mb-2 me-2">
            All
          </button>
        </div>
        <div className="row">
          {products.map((product) => (
            <div className="col-sm-12 col-md-6 col-lg-3" key={product.id}>
              <Product product={product} showButton={true} hideDetails={false} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePage;
