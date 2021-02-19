import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/Nav.module.css";
import Logo from "../../image/fayviks.png";

function Nav() {
  return (
    <div>
      <nav class={style.navbar}>
        <div className={style.logo}>
          <Link  to="/">
          <img src={Logo} className="logo" />
        </Link>
        </div>
        <div className={style.link}>
          <ul class="">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Works
              </Link>
            </li>

            <li className="nav-item">
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
