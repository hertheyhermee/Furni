import NordicChair from "/images/product-1.png";
import KruzoAzeroCheroChair from "/images/product-2.png";
import ErgonomicChair from "/images/product-3.png";
import "./styles.css";

const Chairs = () => {
  return (
    <div className="container chairs">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="wrapChair">
            <div className="chair-img">
              <img src={NordicChair} alt="" />
            </div>
            <div className="chair-details">
              <h5>Nordic Chair</h5>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <a href="">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
          <div className="wrapChair">
            <div className="chair-img">
              <img src={KruzoAzeroCheroChair} alt="" />
            </div>
            <div className="chair-details">
              <h5>Kruzo Aero Chair</h5>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <a href="">Read more</a>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-5 mt-lg-0">
          <div className="wrapChair">
            <div className="chair-img">
              <img src={ErgonomicChair} alt="" />
            </div>
            <div className="chair-details">
              <h5>Ergonomic Chair</h5>
              <p>
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <a href="">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairs;
