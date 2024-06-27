import React, { useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../Context/context";
import Chair from "/images/couch.png";
import "./guest.css";

const GuestLayout = () => {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div
        style={{
          background: "#3b5d50",
          height: "100vh",
        }}
      >
        <div className="row p-0 m-0">
          <div
            className="col-12 col-md-6"
            style={{
              overflow: "hidden !important",
            }}
          >
            <div className="ms-5">
              <Link
                to="/"
                style={{}}
                className="fs-1 text-decoration-none text-white fw-bolder mx-auto"
              >
                Furni
              </Link>
            </div>
            <div
              className="ms-5 mt-5"
              style={{ maxWidth: "400px", margin: "o auto" }}
            >
              <Outlet />
            </div>
          </div>
          <div
            className="col-md-6 d-none d-md-block p-0 m-0"
            style={{
              position: "relative",
            }}
          >
            <img
              src={Chair}
              alt=""
              className="chair"
              width="100%"
              style={{
                position: "absolute",
                left: "-80px",
                top: "100px",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestLayout;
