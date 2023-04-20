import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://freefrontend.com/assets/img/html-funny-404-pages/HTML-Yeti-404-Page.gif")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-8xl font-bold">4 O 4</h1>
            <p className="mb-5">May be You are lost.Try again...</p>
            <Link to="/">
              {" "}
              <button className="btn-primary btn">Back to Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
