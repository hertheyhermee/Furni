import Hero from "../../Hero/Hero";
import "./cart.css";
import { Products } from "../../Product";
import CartItem from "../CartItems/CartItem";
// import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
// import Shop from "../Shop";
import { shopContext } from "../../Context/shop-context";

const Cart = () => {
  const { cartItems } = useContext(shopContext);

  return (
    <div>
      <Hero header={"Cart"} />
      <div className="cart-form">
        <div className="container">
          <div className="row mb-5">
            <form action="" className="col-md-12">
              <div className="div">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Image</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                      <th scope="col">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(cartItems).map(([id, quantity]) => {
                      const product = Products.find(
                        (product) => product.id === id
                      );
                      if (quantity > 0) {
                        return (
                          <CartItem
                            key={id}
                            data={product}
                            quantity={quantity}
                          />
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
