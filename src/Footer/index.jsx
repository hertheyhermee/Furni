import "./style.css";
import {
  FaRegEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Sofa from "../../public/images/sofa.png";
import { IoIosSend } from "react-icons/io";
import { useState } from "react";
import axios from "axios";

const Icon = ({ href, social }) => {
  return (
    <span>
      <a href={href}>{social}</a>
    </span>
  );
};

const Footer = () => {
  const [socials] = useState([
    { icon: <FaFacebookF />, link: "https://www.facebook.com" },
    { icon: <FaTwitter />, link: "https://twitter.com" },
    { icon: <FaInstagram />, link: "http://instagram.com" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com" },
  ]);
  const [inputs, setInputs] = useState({})
  const [value, setValue] = useState("")
  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);

    axios.post('http://localhost/api/subscribe/save', inputs);
  }

  return (
    <div className="footer py-5">
      <div className="container py-5">
        <div className="row newsletter-wrapper">
          <div className="col-12 col-lg-6">
            <p className="mb-0 fw-marginally-bold newsletter">
              <span className="me-2">
                <FaRegEnvelope size={25} color={"rgba(0, 0, 0, .3)"} />
              </span>
              Subscribe to Newsletter
            </p>
            <form action="" onSubmit={handleSubmit}>
              <div className="row gap-0 subscribe mt-3">
                <div className="col-12 col-sm-5 mb-3 mb-sm-0">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="p-3"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-12 col-sm-5 mb-3 mb-sm-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                    className="px-3"
                  />
                </div>
                <div className="col-2">
                  <button className="send d-flex justify-content-center align-items-center">
                    <IoIosSend size={30} color={"white"} />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-12 col-lg-6 px-0 con-two">
            <div className="sofa-wrapper">
              <img src={Sofa} className="sofa" alt="" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-4 furni-footer">
            <h2 className="mb-1 footer-title">Furni.</h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <div className="socials">
              {/* <span><a href=""><FaFacebookF color="" size={15} /></a></span> */}
              {socials.map((socialLink) => (
                <Icon
                  size={15}
                  key={socialLink.link}
                  href={socialLink.link}
                  social={socialLink.icon}
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-8 list-wrap">
            <div className="row">
              <div className="col-6 col-md-3 col-lg-3">
                <ul>
                  <li>
                    <a href="">About us</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                  <li>
                    <a href="">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <ul>
                  <li>
                    <a href="">Support</a>
                  </li>
                  <li>
                    <a href="">Knowledge base</a>
                  </li>
                  <li>
                    <a href="">Live Chat</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <ul>
                  <li>
                    <a href="">Jobs</a>
                  </li>
                  <li>
                    <a href="">Our team</a>
                  </li>
                  <li>
                    <a href="">Leadership</a>
                  </li>
                  <li>
                    <a href="">PrivacyPolicy</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3 col-lg-3">
                <ul>
                  <li>
                    <a href="">Nordic Chair</a>
                  </li>
                  <li>
                    <a href="">Kruzo Azero</a>
                  </li>
                  <li>
                    <a href="">Ergonomic Chair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="border-bottom border-secondary mt-5 mb-4"></div>
        <div className="row">
          <div className="col-12 col-lg-6 copyright">
            <p>
              Copyright ©2024. All Rights Reserved. — Designed with love by
              Untree.co Distributed By ThemeWagon
            </p>
          </div>
          <div className="col-12 col-lg-6 terms">
            <div className="d-flex terms-conditions justify-content-end gap-4">
              <a className="" href="">Terms & Conditions</a>
              <a href="">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
