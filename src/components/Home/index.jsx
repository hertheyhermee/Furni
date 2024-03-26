import "./home.css";
import Button from "../../Button";
import Hero from "../../Hero/Hero";
import WhyChooseUs from "../../WhyChooseUs";
import ImgGridOne from "/images/img-grid-1.jpg";
import ImgGridTwo from "/images/img-grid-2.jpg";
import ImgGridThree from "/images/img-grid-3.jpg";
import GreenDot from "/images/dots-green.svg";
import CraftedWithExcellentMaterial from "../../Crafted";
import Carousel from "../../Carousel"
import Chairs from "../../Chairs";
import HomeBlog from "../../HomeBlog";

const Home = () => {
  return (
    // <div className="container-fluid">
    <div className="container-fluid px-0">
      <div className="home">
        <Hero
          header={"Modern Interior Design Studio"}
          subHeader={
            "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
          }
        />
        <CraftedWithExcellentMaterial />
        <WhyChooseUs />
        <div className="container modern-design">
          <div className="row mx-0">
            <div className="col-12 col-lg-7">
              <div className="imageWrapper">
                <img src={GreenDot} className="green-dot" alt="" />
                <img src={ImgGridOne} className="img-fluid grid-one" alt="" />
                <img src={ImgGridTwo} className="img-fluid grid-two" alt="" />
                <img
                  src={ImgGridThree}
                  className="img-fluid grid-three"
                  alt=""
                />
              </div>
            </div>
            <div className="col-12 col-lg-5 px-lg-4 px-4 header-column">
              <div>
                <h2 className="mb-4">
                  We Help You Make Modern Interior Design
                </h2>
                <p className="head-text">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                  Pellentesque habitant morbi tristique senectus et netus et
                  malesuada
                </p>
                <div className="row">
                  <div className="col-6">
                    <p className="points">
                      Donec vitae odio quis nisl dapibus malesuada
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="points">
                      Donec vitae odio quis nisl dapibus malesuada
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="points">
                      Donec vitae odio quis nisl dapibus malesuada
                    </p>
                  </div>
                  <div className="col-6">
                    <p className="points">
                      Donec vitae odio quis nisl dapibus malesuada
                    </p>
                  </div>
                </div>
                <Button
                  className="mt-4"
                  text="explore"
                  backgroundColor="#2f2f2f"
                  border="#2f2f2f"
                  color="#fff"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container read-more-about-chair">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="nordic"></div>
            </div>
            <div className="col-12 col-md-6 col-lg-4"></div>
            <div className="col-12 col-md-6 col-lg-4"></div>
          </div>
        </div>
        <Chairs />
        <Carousel />
        <HomeBlog />
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
