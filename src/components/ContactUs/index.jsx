import Hero from "../../Hero/Hero";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import './contact.css'

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div>
        <Hero  
           header={'Contact'} 
           subHeader={'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.'}
        />
      </div>
      <div className="contact-us-form">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8 col-8 pb-4">
                <div className="row mb-5">
                    <div className="col-lg-4">
                    <div className="d-flex">
                    <div className="location d-flex justify-content-center align-items-center">
                       <FaLocationDot  color={"white"} /> 
                    </div>
                    <div>
                        <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                    </div>

                    </div>

                    </div>
                    <div className="col-lg-4">
                    <div className="d-flex">
                    <div className="location d-flex justify-content-center align-items-center">
                       <IoIosMail color={"white"} /> 
                    </div>
                    <div>
                        <p>info@yourdomain.com</p>
                    </div>

                    </div>

                    </div>
                    <div className="col-lg-4">
                    <div className="d-flex">
                    <div className="location d-flex justify-content-center align-items-center">
                       <BsFillTelephoneFill color={"white"} /> 
                    </div>
                    <div>
                        <p>+1 294 3925 3939</p>
                    </div>

                    </div>

                    </div>
                </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
