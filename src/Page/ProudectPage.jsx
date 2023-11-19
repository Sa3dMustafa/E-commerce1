import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function ProudectPage() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = () => {
        fetch("http://localhost:4000/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }

    const deleteProduct = (product) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/products/${product.id}`, {
                    method: "DELETE"
                })
                .then(() => {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    );
                    getAllProducts(); // Refresh the product list after deletion
                })
                .catch((error) => {
                    console.error('Error deleting product:', error);
                });
            }
        })
    }

    return (
        <>
            <h1>Product Page</h1>
            <Link to={'add'} className="btn btn-success mt-3">Add New Product</Link>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Price</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td scope="row">{product.id}</td>
                                    <td>{product.title}...</td>
                                    <td>{product.price}</td>
                                    <td className="d-flex gap-2">
                                        <Link to={`/products/${product.id}`} className="btn btn-info btn-sm">View</Link>
                                        <Link to={{pathname: `/editProduct/${product.id}`,
                                            state: {
                                            title: product.title,
                                            price: product.price,
                                            description: product.description
                                            }
                                        }}className="btn btn-primary btn-sm">Update</Link>
                                        <button onClick={() => deleteProduct(product)} className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProudectPage;
