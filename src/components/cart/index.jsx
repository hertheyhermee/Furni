import Hero from "../../Hero/Hero";
import './cart.css'
import Product1 from '../../../public/images/product-1.png'
import Product2 from '../../../public/images/product-2.png'
import { FaTimes } from "react-icons/fa";

const Cart = () => {
  return (
    <div>
      <Hero header={"Cart"} />
      <div className="cart-form">
        <div className="container">
          <div className="row mb-5">
            <form action="" className="col-md-12">
              <div className="div">
                <table class="table">
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
                    <tr className="mt-5">
                      <td className="table-img"><img src={Product1} alt="" className="img-fluid" /></td>
                      <td>Product 1</td>
                      <td>$49.00</td>
                      <td>@mdo</td>
                      <td>$49.00</td>
                      <td><FaTimes/></td>
                    </tr>
                    <tr>
                      <td className="table-img"><img src={Product2} alt="" className="img-fluid" /></td>
                      <td>Product 2</td>
                      <td>$49.00</td>
                      <td>@mdo</td>
                      <td>$49.00</td>
                      <td><FaTimes/></td>
                    </tr>
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
