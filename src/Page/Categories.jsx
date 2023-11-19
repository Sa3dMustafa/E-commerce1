import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

function Categories() {
    const { category } = useParams();
    const apiUrl = `http://localhost:4000/products/${category || ''}`;
    const [uniqueCategories, setUniqueCategories] = useState([]);

    useEffect(() => {
        getUniqueCategories();
    }, [category]);

    const getUniqueCategories = () => {
        axios.get(apiUrl)
            .then((response) => {
                const products = response.data || [];
                const uniqueCategoriesSet = new Set(products.map(product => product.category)); // Extract unique categories using Set
                const uniqueCategoriesArray = Array.from(uniqueCategoriesSet); // Convert Set back to array
                setUniqueCategories(uniqueCategoriesArray);
                console.log(uniqueCategoriesArray);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setUniqueCategories([]);
            });
    };

    return (
        <div className="container">
            <h2 className="text-center p-3">Unique Categories in Products</h2>
            <div className="row">
                <div className="col">
                    <ul className="list-group">
                        {uniqueCategories.map((category, index) => (
                            <li key={index} className="list-group-item">
                                Category: {category}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Categories;
