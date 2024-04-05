import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./Navbar/Navbar";
import Shop from "./components/Shop";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Cart from "./components/cart";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./Footer";
import { ShopContextProvider } from "./Context/shop-context";

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ShopContextProvider>
  );
};

export default App;
