import './style.css';
import { shopContext } from '../Context/shop-context';
import { GoPlus } from 'react-icons/go';
import { useContext } from 'react';

const ProductItem = ({ id, productName, productPrice, productImg }) => {
    const { addToCart } = useContext(shopContext);

    const handleAddToCart = () => {
        addToCart({ id, productName, productPrice, productImg });
    };

    return (
        <div className="product-card d-flex justify-content-center flex-column">
            <img src={productImg} alt="" className="product-img mb-4 img-fluid" />
            <h6 className="product-name text-capitalize fw-marginally-bold">{productName}</h6>
            <p className="product-price">${productPrice}</p>
            <span className='d-flex justify-content-center align-items-center cartBtn' onClick={handleAddToCart}>
                <GoPlus size={30} color='#fff' />
            </span>
        </div>
    );
}

export default ProductItem;
