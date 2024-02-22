import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <ul>
            <li className="mt-4">
                <Link to="/products">Get All Products</Link>
            </li>
            <li className="mt-4">
                <Link to="/products/categories">Get All Categories</Link>
            </li>
            <li className="mt-4">
                <Link to="/cart">View Cart</Link> {/* Link to the cart */}
            </li>
        </ul>
    );
}

export default Sidebar;
