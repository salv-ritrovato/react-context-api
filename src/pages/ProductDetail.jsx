/* Importing the useParams hook from React Router to retrieve URL parameters */
import { useParams } from "react-router-dom";
/* Importing useState and useEffect React hooks */
import { useState, useEffect } from "react";
/* Importing Axios for API calls */
import axios from "axios";
/* Importing NavLink for custom buttons */
import { NavLink } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((res) => setProduct(res.data))
            .catch((err) => console.error(err));
    }, [id]);


    return (
        <main>
            <div className="container mt-4">
                <h1 className="singletitle mb-5">{product?.title}</h1>
                <img className="singleimg" src={product?.image} alt={product?.title} />
                <p className="singledescr mt-5">{product?.description}</p>
                <div className="d-flex justify-content-between">
                    <span className="singleprice">
                        <span className="money">€</span>
                        <span className="number">{product?.price}</span>
                    </span>
                    <NavLink to="/products">
                        <button className="goto mx-3"><i className="bi bi-arrow-left"></i> Back to Products</button>
                    </NavLink>
                </div>
            </div>
        </main>
    );
}