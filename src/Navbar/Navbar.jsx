import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [active, setActive] = useState("home");
  const [links] = useState([
    { link: "home", path: "/" },
    { link: "shop", path: "/shop" },
    { link: "about us", path: "/about" },
    { link: "services", path: "/services" },
    { link: "blog", path: "/blog" },
    { link: "contact us", path: "/contactUs" },
  ]);

  const showSideBar = () => setSideBar(!sideBar);

  useEffect(() => {
    const pathname = location.pathname;
    const matchingLink = links.find((link) => link.path === pathname);
    if (matchingLink) {
      setActive(matchingLink.link);
    }
    if (pathname === "/cart") {
      setActive(null);
    }
  }, [location.pathname, links]);

  const handleClick = (getCurrentItem) => {
    if (getCurrentItem !== "/cart") {
      setActive(getCurrentItem);
    }
  };

  console.log(active);

  return (
    <div className={`container-fluid navBar py-3 px-0 bg-nav ${""}`}>
      <div className="container d-flex justify-content-between align-items-center wrapper">
        <div className="ps-md-0">
          <h2 className="mb-0 text-white fw-marginally-bold title">
            Furni<span className="text-secondary fs-1">.</span>
          </h2>
        </div>
        <div className="d-block d-md-none pe-3 pe-sm-0">
          <div className="hamburger" onClick={showSideBar}>
            <div className="bar"></div>
          </div>
        </div>
        <div className="align-items-center d-none d-md-flex">
          <nav className="">
            {links.map((navItem) => (
              <Link
                to={navItem.path}
                className={`text-capitalize fs-slight-1 text-decoration-none mx-2 mx-lg-4 link-color fw-slightly-bold nav_link ${
                  navItem.link === active ? "active" : null
                } `}
                onClick={() => handleClick(navItem.link)}
                key={navItem.link}
              >
                {navItem.link}
              </Link>
            ))}
          </nav>
          <div className="cart ms-lg-5 ms-6">
            <Link to="/cart">
              <FaShoppingCart
                size={25}
                color="white"
                onClick={() => handleClick("cart")}
              />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={` nav_list_wrap ${sideBar ? "ul-active" : ""}`}
        style={{ marginBottom: `${sideBar ? "-4px" : "0"}` }}
      >
        <div className="">
          <ul>
            {links.map((navItem) => (
              <li key={navItem.link}>
                <Link
                  to={navItem.path}
                  className={`link-color hover text-capitalize px-3 px-sm-0 nav-two`}
                >
                  {navItem.link}
                </Link>
              </li>
            ))}
            <li className="px-3 px-md-0 py-3">
              <Link to="/cart">
                <FaShoppingCart size={25} color="white" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
