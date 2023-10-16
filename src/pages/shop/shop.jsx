import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { Footer } from "./footer";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>E-Techy Shopping App</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <Footer />
    </div>
  );
};