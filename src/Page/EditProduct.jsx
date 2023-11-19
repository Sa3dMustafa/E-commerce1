import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditProduct() {
  const { productID } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({});
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editCategory, setEditCategory] = useState("");
  const [editImage, setEditImage] = useState("");

  useEffect(() => {
    getProduct();
  }, [productID]);

  const getProduct = () => {
    axios.get(`http://localhost:4000/products/${productID}`)
      .then((response) => {
        const { data } = response;
        setProduct(data);
        setEditTitle(data.title || "");
        setEditPrice(data.price || "");
        setEditDescription(data.description || "");
        setEditCategory(data.category || "");
        setEditImage(data.image || "");
      })
      .catch(error => console.error(error));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:4000/products/${productID}`, {
      title: editTitle,
      price: editPrice,
      description: editDescription,
      category: editCategory,
      image: editImage,
    })
    .then(() => {
      navigate("/products");
    })
    .catch(error => console.error(error));
  };

  return (
    <>
      <h1>Edit Product</h1>
      {product && <div className="fs-3 text-primary mb-3">You Edit : {product.title}</div>}
      <form onSubmit={formSubmit}>
        <div className="mb-3 w-75">
          <label htmlFor="productTitle" className="form-label">Product Title</label>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Product Title"
          />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input
            value={editPrice}
            onChange={(e) => setEditPrice(e.target.value)}
            type="number"
            className="form-control"
            placeholder="Product Price"
          />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="productDesc" className="form-label">Description</label>
          <input
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Product Description"
          />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="productDesc" className="form-label">Product Categories</label>
          <input
            value={editCategory}
            onChange={(e) => setEditCategory(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Product Categories"
          />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="productDesc" className="form-label">Image Path</label>
          <input
            value={editImage}
            onChange={(e) => setImage(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Product Image Path"
          />
        </div>
        <button onClick={()=>{Swal.fire({icon: "success",});}} type="submit" className="btn btn-primary">Update Product</button>
      </form>
    </>
  );

}

export default EditProduct;
