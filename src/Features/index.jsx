import './style.css';

const  Features = ({icon, title, details}) => {
    return ( 
        <div className="feature">
            <div className="feature-icon">{icon}</div>
            <h3 className='feature-title text-capitalize fw-semibold'>{title}</h3>
            <p className='feature-details'>{details}</p>
        </div>
     );
}
 
export default  Features;