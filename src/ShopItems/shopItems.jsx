
const ShopItems = ({imageUrl, productName, price}) => {
    return ( 
        <div className="shops-item">
            <img src={imageUrl} alt="" className="img-fluid" />
            <h3>{productName}</h3>
            <strong className="product-price">{price}</strong>
        </div>
     );
}
 
export default ShopItems;