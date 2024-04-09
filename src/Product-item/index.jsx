import React, { useState } from "react";
import { shopContext } from "../Context/shop-context";
import { GoPlus } from "react-icons/go";
import { useContext } from "react";
import "./style.css";

const ProductItem = ({
  productId,
  productName,
  productPrice,
  productImg,
  productQty,
  productTotal,
}) => {
  const { addToCart } = useContext(shopContext);
  const [error, setError] = useState("");
  const [exist, setExist] = useState(false);
  const [success, setSuccess] = useState("");

  const handleAddToCart = () => {
    const existingProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = existingProducts.findIndex(
      (product) => product.productId === productId
    );

    console.log("existingProducts:", existingProducts);
    if (existingProductIndex !== -1) {
      setExist(true);
      setError("Product already exists in the cart!");
      setTimeout(() => {
        setExist(false);
      }, 2000);
      return;
    } else {   
      setExist(true);
      setSuccess("Item added to cart successfully!");
      setTimeout(() => {
        setExist(false);
      }, 2000);
    }

    const newProduct = {
      productId,
      productName,
      productPrice,
      productImg,
      productQty: 1,
      productTotal,
    };
    existingProducts.push(newProduct);
    localStorage.setItem("cart", JSON.stringify(existingProducts));
  };

  return (
    <div className="product-card d-flex justify-content-center flex-column">
      <img src={productImg} alt="" className="product-img mb-4 img-fluid" />
      <h6 className="product-name text-capitalize fw-marginally-bold">
        {productName}
      </h6>
      <p className="product-price">${productPrice}</p>
      <span
        className="d-flex justify-content-center align-items-center cartBtn"
        onClick={handleAddToCart}
      >
        <GoPlus size={30} color="#fff" />
      </span>
      {error && exist ? (
        <p className="text-danger">{error}</p>
      ) : success && exist && (
        <p className="text-success fw-bold fs-6">{success}</p>
      )}
    </div>
  );
};

export default ProductItem;
