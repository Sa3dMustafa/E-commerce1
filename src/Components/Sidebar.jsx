import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <>
            <ul className="">
                <li className="mt-4">
                    <Link to={'/products'}>Get All Products</Link>
                </li>
                <li className="mt-4">
                    <Link to={'/products/categories'}>Get All Categories</Link>
                </li>
            </ul>
        </>
    )
}
export default Sidebar;