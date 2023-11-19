import { useState } from "react";
import axios from 'axios';
import {useNavigate} from "react-router-dom";
function AddProducts() {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("");

  let navigate = useNavigate()

  const formSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:4000/products`,{
      title,
      price,
      description,
      image,
      category
    }) .then((data) => {console.log(data)},
    navigate('/products'))
  };
  return (
    <>
      <h1>Add Products</h1>
      <form onSubmit={formSubmit}>
        <div className="mb-3 w-75">
          <label htmlFor="productTitle" className="form-label">Product Title</label>
          <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="title" placeholder="Product Title" />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="productPrice" className="form-label">Price</label>
          <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="Price" placeholder="Product price" />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="productDesc" className="form-label">Description</label>
          <input onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Price" placeholder="Product Description" />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="productDesc" className="form-label">Product Categories</label>
          <input onChange={(e) => setCategory(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Price" placeholder="Product Categories" />
        </div>
        <div className="mb-3 w-75">
          <label htmlFor="productDesc" className="form-label">Image Path</label>
          <input onChange={(e) => setImage(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="Price" placeholder="Image Path" />
        </div>
        <button type="submit" className="btn btn-primary">Add Product</button>
      </form>
    </>
  )
}

export default AddProducts