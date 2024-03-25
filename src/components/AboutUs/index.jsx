import Hero from "../../Hero/Hero";
import "./AboutUs.css";
import Team from "../../Team";
import Person1 from "/images/person_1.jpg";
import Person2 from "/images/person_2.jpg";
import Person3 from "/images/person_3.jpg";
import Person4 from "/images/person_4.jpg";
import WhyChooseUs from "../../WhyChooseUs";
import Carousel from "../../Carousel";

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
      <WhyChooseUs />
      <div className="team-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mx-auto text-center header mb-4">
              <h2 className="team-section-header">Our Team</h2>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <Team
                  teamImage={Person1}
                  teamName={"Lawson Arnold"}
                  teamPosition={"CEO, Founder, Atty."}
                  teamDetails={
                    "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                  }
                  teamMore={"Learn More"}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <Team
                  teamImage={Person2}
                  teamName={"Jeremy Walker"}
                  teamPosition={"CEO, Founder, Atty."}
                  teamDetails={
                    "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                  }
                  teamMore={"Learn More"}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <Team
                  teamImage={Person3}
                  teamName={"Patrik White"}
                  teamPosition={"CEO, Founder, Atty."}
                  teamDetails={
                    "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                  }
                  teamMore={"Learn More"}
                />
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-5">
                <Team
                  teamImage={Person4}
                  teamName={"Kathryn Ryan"}
                  teamPosition={"CEO, Founder, Atty."}
                  teamDetails={
                    "Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean."
                  }
                  teamMore={"Learn More"}
                />
              </div>
              <Carousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
