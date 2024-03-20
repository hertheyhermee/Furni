import Hero from "../../Hero/Hero";
import './AboutUs.css'
import Features from "../../Features";
import { FiTruck } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { AiOutlineRetweet } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="aboutUs-section">
      <div>
        <Hero
          header={"About Us"}
          subHeader={
            "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
          }
        />
      </div>
      <div className="why-choose-us py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 ">
              <h2>Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-4">
                  <Features 
                    icon={<FiTruck size={35} />}
                    title={'Fast & Free Shipping'}
                    details={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}
                  />
                </div>
                <div className="col-lg-6 col-md-4">
                <Features 
                    icon={<FiShoppingBag size={35} />}
                    title={'Fast & Free Shipping'}
                    details={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}
                  />
                </div>
                <div className="col-lg-6 col-md-4">
                <Features 
                    icon={<HiOutlineSupport size={35} />}
                    title={'Fast & Free Shipping'}
                    details={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}
                  />
                </div>
                <div className="col-lg-6 col-md-4">
                <Features 
                    icon={<AiOutlineRetweet size={35} />}
                    title={'Fast & Free Shipping'}
                    details={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
