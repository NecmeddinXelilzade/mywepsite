import React from "react";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Basket from "../Basket/Basket";
import Layout from "../layout/Layout";
import styles from "./Router.module.scss";
import Carusel from "../Carusel/Carusel";
import Blog from "../Blog/Blog";
import Accounds from "../Accounds/Accounds";
import Help from "../Help/Help";

const Router = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="help" element={<Help />} />
            <Route path="products" element={<Products />} />
            <Route path="basket" element={<Basket />} />
            <Route path="carusel" element={<Carusel />} />
            <Route path="blog" element={<Blog />} />
            {/* <Route index element={<Accounds />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
};

export default Router;
