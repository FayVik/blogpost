import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  // function addFadown() {  
  // }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" style={{minHeight: "20vh", fontSize: "22px"}}>
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">Navbar</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav m-auto">
              <li class="nav-item mr-5">
                <Link class="nav-link" to="/">About</Link>
              </li>
              <li class="nav-item mr-5">
                <Link class="nav-link" to="/">Services</Link>
              </li>
              <li class="nav-item mr-5">
                <Link class="nav-link" to="/">Works</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
