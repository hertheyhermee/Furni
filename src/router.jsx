import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import Cart from "./components/cart";
import Shop from "./components/Shop";
import Profile from "./components/Profile/Profile";
import GuestLayout from "./Layouts/GuestLayout";
import Login from "./components/Guests/Login";
import Signup from "./components/Guests/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Home /> 
            },
            {
                path: "/shop",
                element: <Shop /> 
            },
            {
                path: "/about",
                element: <AboutUs /> 
            },
            {
                path: "/services",
                element: <Services /> 
            },
            {
                path: "/blog",
                element: <Blog /> 
            },
            {
                path: "/contactUs",
                element: <ContactUs /> 
            },
            {
                path: "/cart",
                element: <Cart /> 
            },
            {
                path: "/profile",
                element: <Profile />,
            }
        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup />
            }
        ]
    }
    
])

export default router