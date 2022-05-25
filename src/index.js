import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Admin from "./routes/Admin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProvider from "./context/UserProvider";
import Auth from "./components/Auth";
/* Importamos Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products"
import Suppliers from "./components/Suppliers";
import AdminProfile from "./components/AdminProfile";
import Recover from "./routes/Recover";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/recover" element={<Recover />} />
            <Route
              path="/adminModule"
              element={
                <Auth>
                  <Admin />
                </Auth>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="/adminModule/products" element={<Products />} />
              <Route path="/adminModule/suppliers" element={<Suppliers />} />
              <Route path="/adminModule/adminProfile" element={<AdminProfile />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
