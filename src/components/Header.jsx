/* Importing NavLink so page doesn't reload when I switch pages */
import { NavLink, useLocation } from "react-router-dom"
/* Importing my NavBar logic that I created in a different file */
import navbar from "../assets/navbar"
/* Importing useContext */
import { useContext } from "react"
/* Importing BudgetContext.jsx */
import { BudgetContext } from "../context/BudgetContext"

export default function Header() {

    const { budgetMode, setBudgetMode } = useContext(BudgetContext)
    const location = useLocation();
    const productPage = location.pathname === "/products"

    return (
        <header>
            {/* NAVBAR START - MADE IT STICKY FOR A MODERN EFFECT */}
            <nav className="navbar navbar-expand-lg px-3 sticky-top">
                <NavLink className="navbar-brand" to="/"><span className="logoDot">•</span>MODERNO.</NavLink>
                {/* HAMBURGER MENU FOR MOBILE BROWSING */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {/* GENERATING MY LINKS DYNAMICALLY WITH MAP METHOD FROM MY NAVBAR.JS FILE */}
                        {navbar.map(({ id, path, text }) => (
                            <li key={id} className="nav-item">
                                <NavLink className="nav-link" to={path}>
                                    {text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    {productPage && <button className="goto" onClick={() => setBudgetMode(prev => !prev)}>{budgetMode ? "Enable Budget Mode" : "Disable Budget Mode"}</button>}
                </div>
            </nav>
        </header>
    )
}