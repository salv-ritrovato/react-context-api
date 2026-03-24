/* Importing React hooks */
import { useState, useEffect } from "react"
/* Importing Axios */
import axios from "axios";
/* Importing the Link component from React Router */
import { Link } from "react-router-dom";
/* Importing useContext */
import { useContext } from "react"
/* Importing BudgetContext.jsx */
import { BudgetContext } from "../context/BudgetContext"

export default function Products() {
    /* Declaring an useState variable where my API of products will go */
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([])
    const { budgetMode, setBudgetMode } = useContext(BudgetContext)

    /* "fetching" with Axios to print my array of products */
    function storeAPI() {
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                /* Logging to check if it works */
                console.log(res.data);
                /* Assigning my data to my state variable */
                setProducts(res.data);
                setAllProducts(res.data);
            })
            .catch((err) => {
                console.error("Error fetching products:", err);
            });
    }

    function cheapProducts() {
        const filteredProducts = products.filter((product) => product.price < 30)
        setProducts(filteredProducts)
    }

    useEffect(() => {
        storeAPI(products)
    }, [])

    useEffect(() => {
        if (budgetMode) {
            cheapProducts()
        } else {
            setProducts(allProducts)
        }
    }, [budgetMode])

    return (
        <main>
            <section>
                <div className="container mt-4">
                    <h1 className="mb-3 productshead">Our products</h1>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
                        {/* Rendering my product cards through the map method */}
                        {products.map((product) =>
                            <div className="col" key={product.id}>
                                <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                                    <div className="card h-100">
                                        <img className="card-img-top p-3" src={product.image} alt={product.title} />
                                        <div className="card-body d-flex flex-column">
                                            <h3 className="card-title mb-2">{product.title}</h3>
                                            <span className="badge-price mb-2">€ {product.price}</span>
                                            <p className="description flex-grow-1">{product.description}</p>
                                            <button className="btn-add-to-cart">Aggiungi al carrello</button>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    )
}