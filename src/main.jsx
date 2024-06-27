import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ShopContextProvider } from "./Context/shop-context.jsx";
import { ContextProvider } from "./Context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </ShopContextProvider>
  </React.StrictMode>
);
