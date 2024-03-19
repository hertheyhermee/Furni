import Button from "../../Button";
import Hero from "../../Hero/Hero";
import ProductItem from "../../Product-item";
import NoridcChair from "../../../public/images/product-1.png";
import KruzoAeroChair from "../../../public/images/product-2.png";
import ErgonomicChair from "../../../public/images/product-3.png";
import "./home.css";

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
        <div className="container crafted-with-excellent-material py-5">
          <div className="row">
            <div className="col-12 col-lg-3 crafted">
              <div className="craft">
                <h2 className="mb-4">Crafted with excellent material.</h2>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <Button
                  text="explore"
                  color="white"
                  backgroundColor="#2f2f2f"
                  border="#2f2f2f"
                />
              </div>
            </div>
            <div className="col-12 col-lg-9">
              <div className="row ">
                <div className="col-12 col-md-4">
                  <ProductItem
                    productImg={NoridcChair}
                    productName={"Nordic chair"}
                    productPrice={50}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <ProductItem
                    productImg={KruzoAeroChair}
                    productName={"Kruzo Aero Chair"}
                    productPrice={50}
                  />
                </div>
                <div className="col-12 col-md-4">
                  <ProductItem
                    productImg={ErgonomicChair}
                    productName={"Ergonomic chair"}
                    productPrice={50}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
