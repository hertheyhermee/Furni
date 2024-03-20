import Hero from "../../Hero/Hero";
import './AboutUs.css'
import Team from "../../Team";
import Person1 from '../../../public/images/person_1.jpg'
import Person2 from '../../../public/images/person_2.jpg'
import Person3 from '../../../public/images/person_3.jpg'
import Person4 from '../../../public/images/person_4.jpg'
import whyChooseUsImg from '../../../public/images/why-choose-us-img.jpg'
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
                    title={'Fast & Free Shipping'}
                    details={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}
                  />
                </div>
                <div className="col-6 col-md-6">
                <Features 
                    icon={<FiShoppingBag size={35} />}
                    title={'Fast & Free Shipping'}
                    details={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}
                  />
                </div>
                <div className="col-6 col-md-6">
                <Features 
                    icon={<HiOutlineSupport size={35} />}
                    title={'Fast & Free Shipping'}
                    details={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}
                  />
                </div>
                <div className="col-6 col-md-6">
                <Features 
                    icon={<AiOutlineRetweet size={35} />}
                    title={'Fast & Free Shipping'}
                    details={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'}
                  />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5 ">
              <div className="whyChooseUsImage">
                <img src={whyChooseUsImg} alt="" className="img-fluid rounded-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="team-section">
        <div className="container">
        <div className="row mb-5">
          <div className="col-lg-5 mx-auto text-center">
            <h2 className="team-section-header">Our Team</h2>
          </div>
        </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <Team 
               teamImage = {Person1}
               teamName={'Lawson Arnold'}
               teamPosition = {'CEO, Founder, Atty.'}
               teamDetails = {'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}
               teamMore = {'Learn More'}
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <Team 
               teamImage = {Person2}
               teamName = {'Jeremy Walker'}
               teamPosition = {'CEO, Founder, Atty.'}
               teamDetails = {'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}
               teamMore = {'Learn More'}
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <Team 
               teamImage = {Person3}
               teamName = {'Patrik White'}
               teamPosition = {'CEO, Founder, Atty.'}
               teamDetails = {'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}
               teamMore = {'Learn More'}
               />
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-5">
              <Team 
               teamImage = {Person4}
               teamName = {'Kathryn Ryan'}
               teamPosition = {'CEO, Founder, Atty.'}
               teamDetails = {'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'}
               teamMore = {'Learn More'}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
