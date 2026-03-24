/* Importing Bootstrap + React Router */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BudgetContext, BudgetProvider} from './context/BudgetContext';
/* Importing my pages */
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import DefaultLayout from "./layout/DefaultLayout";
import ProductDetail from './pages/ProductDetail';



function App() {


  return (
    <>
      {/* Wrapping my page with BudgetContext */}
      <BudgetProvider>
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
      </BudgetProvider>
    </>
  )
}

export default App
