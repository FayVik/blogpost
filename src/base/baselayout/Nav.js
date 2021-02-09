import React from "react";
import {Link} from "react-router-dom";
import  "../../style/Nav.module.css";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top nav">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FayVik</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/">About</Link>
              </li>
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/">Services</Link>
              </li>
              <li className="nav-item mr-5">
                <Link className="nav-link" to="/">Works</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
