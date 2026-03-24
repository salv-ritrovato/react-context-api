/* Importing Bootstrap + React Router */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* Importing my pages */
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import DefaultLayout from "./layout/DefaultLayout";
import ProductDetail from './pages/ProductDetail';
import "bootstrap-icons/font/bootstrap-icons.css";
   

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Using DefaultLayout to import my header and footer in every page */}
          <Route element={<DefaultLayout></DefaultLayout>}>
            <Route element={<Home></Home>} path="/"></Route>
            <Route element={<AboutUs></AboutUs>} path="/aboutus"></Route>
            <Route element={<Products></Products>} path="/products"></Route>
            <Route element={<ProductDetail />} path="/products/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
