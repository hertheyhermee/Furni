import Hero from "../../Hero/Hero";
import "./cart.css";
import Product1 from "../../../public/images/product-1.png";
import Product2 from "../../../public/images/product-2.png";
import Product3 from "../../../public/images/product-3.png";

import { FaTimes } from "react-icons/fa";
import { useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      productName: "Nordic Chair",
      productImage: Product1,
      productPrice: "49.00",
      productQty: 1,
      productTotal: "",
    },
    {
      id: 2,
      productName: "Kuzo Azero Chair",
      productImage: Product2,
      productPrice: "49.00",
      productQty: 3,
      productTotal: "",
    },
    {
      id: 3,
      productName: "Ergonomic Chair",
      productImage: Product3,
      productPrice: "30.00",
      productQty: 7,
      productTotal: "",
    },
    {
      id: 4,
      productName: "Exotic Sofa",
      productImage: Product2,
      productPrice: "56.00",
      productQty: 2,
      productTotal: "",
    },
    {
      id: 5,
      productName: "Level Chair",
      productImage: Product2,
      productPrice: "49.00",
      productQty: 3,
      productTotal: "",
    },
  ]);
  const handleDelete = (getCurrentItem) => {
    console.log(getCurrentItem);
    let newProducts = products.filter((item) => item.id !== getCurrentItem);
    setProducts(newProducts);
  };

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
                    {products && products.length > 0
                      ? products.map((product) => (
                          <tr key={product.id}>
                            <td className="table-img">
                              <img
                                src={product.productImage}
                                alt=""
                                className="img-fluid"
                              />
                            </td>
                            <td className="align-middle">
                              {product.productName}
                            </td>
                            <td className="align-middle">
                              ${product.productPrice}
                            </td>
                            <td className="align-middle">
                              <select name="product-qty" id={product.id}>
                                {product.productQty}
                                <option value="">{product.productQty}</option>
                              </select>
                            </td>
                            <td className="align-middle">
                              $
                              {product.productQty *
                                parseInt(product.productPrice)}
                            </td>
                            <td className="align-middle">
                              <div
                                className="remove-btn mx-auto"
                                onClick={() => handleDelete(product.id)}
                              >
                                <FaTimes />
                              </div>
                            </td>
                          </tr>
                        ))
                      : null}
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
