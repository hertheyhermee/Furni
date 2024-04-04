import Hero from "../../Hero/Hero";
import "./shop.css";
import ProductItem from "../../Product-item";
import { Products } from "../../Product";

const Shop = () => {
  return (
    <div className="shop-section">
      <Hero header={"Shop"} />  
      <div className="shops_section">
        <div className="container">
          <div className="row">
            {Products.map(product => (
              <div key={product.id} className="col-12 col-md-6 col-lg-3 mb-5">
                <ProductItem
                  productId={product.id}
                  productImg={product.productImage}
                  productName={product.productName}
                  productPrice={product.productPrice}
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
