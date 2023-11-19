import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
    const [product, setProduct] = useState({});
    const {productID } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${productID}`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
            });
    }, [productID]); 

    return (
        <>
            <h1>Product Details # {productID}</h1>
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" alt="Product" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <p>{product.price}</p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
