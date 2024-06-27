import Hero from "../../Hero/Hero";
import "./shop.css";
import ProductItem from "../../Product-item";
// import { Products } from "../../Product";
import { useEffect, useState } from "react";
import axiosClient from "../../axios/axiosClient";

const Shop = () => {
  const [products, setProducts] = useState(null);

  const getProducts = () => {
    axiosClient
      .get("/products")
      .then(({ data }) => {
        setProducts(data.data);
        console.log(data);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  };

  
  useEffect(() => {
    getProducts()
  }, []);

  return (
    <div className="shop-section">
      <Hero header={"Shop"} />
      <div className="shops_section">
        <div className="container">
          <div className="row">
            {products?.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-3 mb-5">
                <ProductItem
                  productId={product.id}
                  productImg={product.image}
                  productName={product.productName}
                  productPrice={product.price}
                  productQty={product.productQty}
                  productTotal={product.productTotal}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
