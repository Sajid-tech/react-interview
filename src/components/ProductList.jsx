import React from "react";
import { useProduct } from "../hooks/useProduct";
const ProductList = () => {
  const { products } = useProduct();
  return (
    <>
      <div>
        <h1>Product list</h1>
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <h1>{item.title}</h1>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;
