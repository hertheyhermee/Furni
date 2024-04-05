import Hero from "../../Hero/Hero";
import "./cart.css";
import { Products } from "../../Product";
import CartItem from "../CartItems/CartItem";
import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
// import Shop from "../Shop";
import { shopContext } from "../../Context/shop-context";

const Cart = () => {
  const { cartItems, setCartItems } = useContext(shopContext);
  const existingProducts = JSON.parse(localStorage.getItem("cart")) || [];

  console.log("existingProducts:", existingProducts);

  const handleRemoveFromCart = (productName) => {
    const updatedProducts = existingProducts.filter(
      (product) => product.productName !== productName
    );
    localStorage.setItem("cart", JSON.stringify(updatedProducts));

    setCartItems((prevCartItems) => {
      const updatedCartItems = { ...prevCartItems };
      delete updatedCartItems[productName];
      return updatedCartItems;
    });
  };

  const handleQuantityChange = (productName, newQuantity) => {
    const updatedProducts = existingProducts.map((product) => {
      if (product.productName === productName) {
        return { ...product, productQty: newQuantity };
      }
      return product;
    });
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <Hero header={"Cart"} />
      <div className="cart-form">
        <div className="container">
          <div className="row mb-5">
            <form action="" className="col-md-12">
              <div className="table-form">
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
                    {/* {Object.entries(existingProducts).map(([id, quantity]) => {
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
                    })} */}
                    {existingProducts.map((product) => (
                      <tr key={product.productName}>
                        <td>
                          <img
                            src={product.productImg}
                            alt=""
                            className="table-img mb-4 img-fluid"
                          />
                        </td>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td>
                          <div className="input-group mb-3 d-flex align-items-ce">
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  product.productName,
                                  product.productQty - 1
                                )
                              }
                            >
                              {" "}
                              -{" "}
                            </button>
                            <input value={product.productQty} readOnly />
                            <button
                              onClick={() =>
                                handleQuantityChange(
                                  product.productName,
                                  product.productQty + 1
                                )
                              }
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </td>

                        {/* <td>{product.productQty}</td> */}
                        <td>{product.productPrice * product.productQty}</td>
                        <td
                          onClick={() =>
                            handleRemoveFromCart(product.productName)
                          }
                          className="remove-btn"
                        >
                          <FaTimes />
                        </td>
                      </tr>
                    ))}
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
