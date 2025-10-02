import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import ProtectRoutes from "./hooks/ProtectRoutes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "react-dropdown/style.css";
import AdminPage from "./Pages/Admin";
import AdminLayout from "./Components/layouts/AdminLayout";
import AdminDashboard from "./Components/AdminDashboard";
import Orders from "./Pages/admin/Orders";
import UserLayout from "./Components/layouts/UserLayout";
import OrderDetails from "./Pages/admin/OrderDetails"
import OrderList from "./Pages/admin/OrderList";
import ProductList from "./Pages/admin/ProductList"


function App() {
  return (
    <main>
      <BrowserRouter>
        <ProtectRoutes />
        <main>
          <Routes>
            {/* User Layout */}

            <Route element={<UserLayout/>}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/contact" element={<Contact />} />
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            {/* Admin Layout  */}
            <Route element={<AdminLayout />}>
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/orders" element={<Orders />} />
              {/* <Route path="/admin/order-list" element={<OrderList />} /> */}
               <Route path="/admin/order-details" element={<OrderDetails />} />
               <Route path="/admin/product-list" element={<ProductList />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </main>
  );
}

export default App;
