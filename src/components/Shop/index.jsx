import Hero from "../../Hero/Hero";
import "./shop.css";
import ShopItems from "../../ShopItems/shopItems";
import product1 from "../../../public/images/product-1.png";
import product2 from "../../../public/images/product-2.png";
import product3 from "../../../public/images/product-3.png";


  return (
    <div className="shop-section">
      <div>
        <Hero header={"Shop"} />
      </div>
      <div className="shops_section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <ShopItems 
                imageUrl = {product2}
                productName = "Nordic Chair"
                price = "$50.00"
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="shops-item">
                <img src={product1} alt="img-chair" className="img-fluid" />
                <h3>Nordic Chair</h3>
                <strong class="product-price">$50.00</strong>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="shops-item">
                <img src={product2} alt="img-chair" className="img-fluid"/>
                <h3>Nordic Chair</h3>
                <strong class="product-price">$50.00</strong>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="shops-item">
                <img src={product3} alt="img-chair"className="img-fluid" />
                <h3>Nordic Chair</h3>
                <strong class="product-price">$50.00</strong>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="shops-item">
                <img src={product3} alt="img-chair" className="img-fluid" />
                <h3>Nordic Chair</h3>
                <strong class="product-price">$50.00</strong>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="shops-item">
                <img src={product1} alt="img-chair" className="img-fluid" />
                <h3>Nordic Chair</h3>
                <strong class="product-price">$50.00</strong>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="shops-item">
                <img src={product2} alt="img-chair" className="img-fluid" />
                <h3>Nordic Chair</h3>
                <strong class="product-price">$50.00</strong>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <div className="shops-item">
                <img src={product3} alt="img-chair" className="img-fluid" />
                <h3>Nordic Chair</h3>
                <strong class="product-price">$50.00</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
