import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import './navbar.css'

const Navbar = () => {
  const [links, setLinks] = useState([
    { link: "home", path: "/" },
    { link: "shop", path: "/shop" },
    { link: "about us", path: "/about" },
    { link: "services", path: "/services" },
    { link: "blog", path: "/blog" },
    { link: "contact us", path: "/contactUs" },
  ]);
  return (
    <div className="container-fluid navBar py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <h2 className="mb-0 text-white fw-marginally-bold">
            Furni<span className="text-secondary fs-1">.</span>
          </h2>
        </div>
        <div className="d-flex align-items-center">
          <nav className="">
            {links.map((navItem) => (
              <a
                href={navItem.path}
                className="text-capitalize text-decoration-none mx-4 link-color fw-slightly-bold"
                key={navItem.link}
              >
                {navItem.link}
              </a>
            ))}
          </nav>
          <div className="cart ms-5">
            <FaShoppingCart size={25} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
