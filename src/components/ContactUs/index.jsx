import Hero from "../../Hero/Hero";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import "./contact.css";
import Button from "../../Button";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div>
        <Hero
          header={"Contact"}
          subHeader={
            "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
          }
        />
      </div>
      <div className="contact-us-form">
        <div className="container">
          <div className="block">
            <div className="row mb-5">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="location">
                  <span>
                    <FaLocationDot color="white" size={18} className="" />
                  </span>
                  <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0 ">
                <div className="message">
                  <span>
                    <IoIosMail color="white" size={18} className="" />
                  </span>
                  <p>info@yourdomain.com</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
                <div className="location">
                  <span>
                    <BsFillTelephoneFill color="white" size={18} className="" />
                  </span>
                  <p>+1 294 3925 3939</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <form action="">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="fname">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control formss"
                        id="fname"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="lname">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control formss"
                        id="lname"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb-1">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label mb-0"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control formss"
                        id="exampleFormControlInput1"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label mb-0"
                      >
                        Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <Button
                      className="mt-4"
                      text="Send Message"
                      backgroundColor="#2f2f2f"
                      border="#2f2f2f"
                      color="#fff"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
