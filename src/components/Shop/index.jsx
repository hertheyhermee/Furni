import Hero from "../../Hero/Hero";
import "./shop.css";
import ProductItem from "../../Product-item";
import product1 from "../../../public/images/product-1.png";
import product2 from "../../../public/images/product-2.png";
import product3 from "../../../public/images/product-3.png";

const Shop = () => {
 
  return (
    <div className="shop-section">
      <div>
        <Hero header={"Shop"} />
      </div>
      <div className="shops_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ProductItem 
                productImg = {product3}
                productName = "Nordic Chair"
                productPrice = "50.00"
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ProductItem 
                productImg = {product1}
                productName = "Nordic Chair"
                productPrice = "50.00"
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ProductItem 
                productImg = {product2}
                productName = "Nordic Chair"
                productPrice = "78.00"
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ProductItem 
                productImg = {product3}
                productName = "Nordic Chair"
                productPrice = "43.00"
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ProductItem 
                productImg = {product3}
                productName = "Nordic Chair"
                productPrice = "50.00"
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ProductItem 
                productImg = {product1}
                productName = "Nordic Chair"
                productPrice = "50.00"
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ProductItem 
                productImg = {product2}
                productName = "Nordic Chair"
                productPrice = "78.00"
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ProductItem 
                productImg = {product3}
                productName = "Nordic Chair"
                productPrice = "43.00"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
