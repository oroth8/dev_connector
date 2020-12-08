import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Developer Connector</h1>
          <p className="lead">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil vel
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">
                Sign Up
              </Link>
              <Link to="/login" className="btn ">
                Login
              </Link>
            </div>
          </p>
        </div>
      </div>
    </section>
  );
};
