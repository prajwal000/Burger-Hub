import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar() {
  return (
    <>
      <section>
        <section className="top-bar ">
          <div className="container primary-hover ">
            <i className="bi bi-envelope-fill pe-1"></i>info@example.com
          </div>
        </section>
        <section className="crossbar">
          <nav className="navbar navbar-expand-lg ">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse gap-3"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-lg-0 gap-3">
                  <li className="">
                    <Link className="nav-link " to="/">
                      Home
                    </Link>
                  </li>
                  <li className="">
                    <Link className="nav-link " to="/">
                      Menus
                    </Link>
                  </li>
                  <li className="">
                    <Link className="nav-link " to="/">
                      Trending
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto mb-lg-0 gap-3">
                  <li className="">
                    <Link className="nav-link mob-nav-link" to="/">
                      Our Story
                    </Link>
                  </li>
                  <li className="">
                    <Link className="nav-link " to="/">
                      Blog
                    </Link>
                  </li>
                  <li className="">
                    <Link className="nav-link " to="/">
                      Pages
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </section>
      </section>
    </>
  );
}

export default Navbar;
