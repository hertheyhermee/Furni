import Features from "../../Features";
import "./services.css";
import Hero from "../../Hero/Hero";
import { FiTruck } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { HiOutlineSupport } from "react-icons/hi";
import { AiOutlineRetweet } from "react-icons/ai";
import CraftedWithExcellentMaterial from "../../Crafted";
import Carousel from "../../Carousel"

const Services = () => {
  return (
    <div className="services">
      <div>
        <Hero
          header={"Services"}
          subHeader={
            "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
          }
        />
      </div>
      <div className="services-section">
        <div className="container">
          <div className="row my-5">
            <div className="col-6 col-md-6 col-lg-3 mb-5">
              <Features
                icon={<FiTruck size={35} />}
                title={"Fast & Free Shipping"}
                details={
                  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                }
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-5">
              <Features
                icon={<FiShoppingBag size={35} />}
                title={"Easy to Shop"}
                details={
                  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                }
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-5">
              <Features
                icon={<HiOutlineSupport size={35} />}
                title={"24/7 Support"}
                details={
                  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                }
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-5">
              <Features
                icon={<AiOutlineRetweet size={35} />}
                title={"Hassle Free Returns"}
                details={
                  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                }
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-5">
              <Features
                icon={<FiTruck size={35} />}
                title={"Fast & Free Shipping"}
                details={
                  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                }
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-5">
              <Features
                icon={<FiShoppingBag size={35} />}
                title={"Easy to Shop"}
                details={
                  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                }
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-5">
              <Features
                icon={<HiOutlineSupport size={35} />}
                title={"24/7 Support"}
                details={
                  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                }
              />
            </div>
            <div className="col-6 col-md-6 col-lg-3 mb-5">
              <Features
                icon={<AiOutlineRetweet size={35} />}
                title={"Hassle Free Returns"}
                details={
                  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate."
                }
              />
            </div>
            <div className="pt-0 crafted">
              <CraftedWithExcellentMaterial />
            </div>
          </div>
        </div>
        <Carousel/>
      </div>
    </div>
  );
};

export default Services;
