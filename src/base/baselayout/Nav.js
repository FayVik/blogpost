import React from "react";
import { Link } from "react-router-dom";
import "../../style/Nav.module.css";
import Logo from "../../image/fayviks.png";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <Link className="block lg:hidden w-auto text-md font-bold " to="/">
          <img src={Logo} className="logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li className="nav-item mr-4">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>

            <li className="nav-item mr-4">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>

            <li className="nav-item mr-4">
              <Link className="nav-link" to="/">
                Works
              </Link>
            </li>

            <li className="nav-item mr-4">
              <Link className="nav-link" to="/Blog">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
