import React from "react";

const CartItem = ({ data, quantity }) => {
  const { productName, productPrice, productImg } = data;

  return (
    <tr>
      <td className="table-img">
        <img src={productImg} alt="" className="img-fluid" />
      </td>
      <td className="align-middle">{productName}</td>
      <td className="align-middle">${productPrice}</td>
      <td className="align-middle">{quantity}</td>

    </tr>
  );
};

export default CartItem;
