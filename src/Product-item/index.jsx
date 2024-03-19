import './style.css'
import { GoPlus } from 'react-icons/go';

const ProductItem = ({productName, productPrice, productImg}) => {
    return ( 
        <div className="product-card d-flex py-5 justify-content-center flex-column">
            <img src={productImg} alt="" className="product-img mb-4 img-fluid" />
            <h6 className="product-name text-capitalize fw-marginally-bold">{productName}</h6>
            <p className="product-price">${productPrice}</p>
            <span className='d-flex justify-content-center align-items-center cartBtn'><GoPlus size={30} color='#fff' /></span>
        </div>
     );
}
 
export default ProductItem;