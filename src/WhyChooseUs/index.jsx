import whyChooseUsImg from '/images/why-choose-us-img.jpg'
import './style.css'
import Features from "../Features";
import { FiTruck } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { AiOutlineRetweet } from "react-icons/ai";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-6 ">
            <h2>Why Choose Us</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <div className="row">
              <div className="col-6 col-md-6">
                <Features
                  icon={<FiTruck size={35} />}
                  title={"Fast & Free Shipping"}
                  details={
                    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                  }
                />
              </div>
              <div className="col-6 col-md-6">
                <Features
                  icon={<FiShoppingBag size={35} />}
                  title={"Easy to Shop"}
                  details={
                    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                  }
                />
              </div>
              <div className="col-6 col-md-6">
                <Features
                  icon={<HiOutlineSupport size={35} />}
                  title={"24/7 Support"}
                  details={
                    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                  }
                />
              </div>
              <div className="col-6 col-md-6">
                <Features
                  icon={<AiOutlineRetweet size={35} />}
                  title={"Hassle Free Returns"}
                  details={
                    "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                  }
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-5 ">
            <div className="whyChooseUsImage">
              <img
                src={whyChooseUsImg}
                alt=""
                className="img-fluid rounded-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
