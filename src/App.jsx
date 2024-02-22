import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Sidebar from "./Components/Sidebar";
import ProudectPage from "./Page/ProudectPage";
import HomePage from "./Page/HomePage";
import AddProducts from "./Page/AddProducts";
import ProductDetails from "./Page/ProductDetails";
import EditProduct from "./Page/EditProduct";
import Categories from "./Page/Categories";
import CartPage from "./Page/Cart";
import Login from "./Page/Login";

function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleRemoveFromCart = (productId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== productId);
        setCartItems(updatedCartItems);
    };

    return (
        <>
            <div className="App">
                <div className="row">
                    <div className="col-md-2 d-md-block slidebar">
                        <Sidebar />
                    </div>
                    <div className="col-sm-12 col-md-10 p-4">
                        <Routes>
                            <Route path='/login' element={<Login/>}/>
                            <Route path="/products" element={<ProudectPage />} />
                            <Route path="/products/categories" element={<Categories />} />
                            {/* <Route path="/products:category" element={<Categories />} /> */}
                            <Route path="/products/add" element={<AddProducts />} />
                            <Route path="/products/:productID" element={<ProductDetails />} />
                            <Route path="/editproduct/:productID" element={<EditProduct />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/" element={<HomePage handleAddToCart={handleAddToCart} />} />
                            <Route path="/cart" element={<CartPage cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
