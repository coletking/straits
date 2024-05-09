import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Rentals from "./page/Rentals";
import About from "./page/About-Us";
import Contact from "./page/Contact-Us";
import Login from "./CreateUser.js/Login";
import Register from "./CreateUser.js/Register";
import AdminDashboard from "./page/AdminDashboard";
import ViewsUsers from "./page/ViewsUsers";
import Product from "./page/Product";
import CreateProduct from "./page/CreateProduct";
import EditProduct from "./page/EditProduct";
import Allaitem from "./page/AllProduct";
import ProductCart from "./page/ProductCart";

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/dashboard/admin" element={<AdminDashboard />} />
            <Route path="/dashboard" element={<AdminDashboard />} />
            <Route path="/dashboard/users" element={<ViewsUsers />} />
            <Route path="/dashboard/product" element={<Product />} />
            <Route path="/new/product" element={<CreateProduct />} />
            <Route path="/product/edit/:id" element={<EditProduct />} />
            <Route path="/product/brands" element={<Allaitem />} />
            <Route path="/product/brands/checkout/:id" element={<ProductCart />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
