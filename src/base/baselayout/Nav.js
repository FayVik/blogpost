import React from "react";
import { Link } from "react-router-dom";
import "../../style/Nav.module.css";

function Nav() {
  return (
    <div>
      <nav class="fixed">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex flex-1 justify-start">
              <Link
                className="block lg:hidden px-3 py-1 h-8 w-auto text-md font-bold text-white"
                to="/"
              >
                Fayvik
              </Link>

              <Link
                className="hidden lg:block px-3 py-1 h-8 w-auto text-md font-bold text-white"
                to="/"
              >
                Fayvik
              </Link>
            </div>
            <div class="flex-1 flex items-center md:justify-end justify-center sm:items-stretch sm:justify-start">
              <div class="">
                <div class="flex justify-end">
                  <li className=" mr-5">
                    <Link
                      className="text-white px-3 py-2 text-md font-bold"
                      to="/"
                    >
                      About
                    </Link>
                  </li>

                  <li className=" mr-5">
                    <Link
                      className="text-white px-3 py-2 text-md font-bold"
                      to="/"
                    >
                      Services
                    </Link>
                  </li>
                  <li className=" mr-5">
                    <Link
                      className="text-white px-3 py-2 text-md font-bold"
                      to="/"
                    >
                      Works
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      className="text-white px-3 py-2 text-md font-bold"
                      to="/Blog"
                    >
                      Blog
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
