import "./hero.css";
import Couch from "../../public/images/couch.png";
import Button from '../Button'

const Hero = ({ header, subHeader }) => {
  return (
    <div className="hero bg-main">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="wrap">
            <div className="">
              <h1 className="mb-4 fs-mega fw-bolder text-white text-capitalize">{header}</h1>
            </div>
            {subHeader ? (
              <div className="">
                <p className="text-subHeader fs-small mb-4">{subHeader}</p>
                <Button className={'me-2'} text={'shop now'} backgroundColor={'#f9bf29'} color={'#2f2f2f'} border={'1px solid #f9bf29'} />
                <Button text={'explore'} backgroundColor={'transparent'} color={'#fff'} border={'1px solid rgba(255, 255, 255, 0.5)'} />
                <img src={Couch} width className="couch" alt="" />
              </div>
            ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
