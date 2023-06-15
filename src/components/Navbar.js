import React from "react";
import ROY from "../IMG/ROY.png";
import "../css/HeadTailsGame.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-info-subtle">
        <div className="container-fluid">
          <a className="navbar-brand " href="..">
            <img
              src={ROY}
              alt="ROY"
              className="img-circle"
              width={50}
              height={50}
            />
          </a>
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
            {/* <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/HeadTail">Head-Tail</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Demo">Demo</a>
        </li>
      </ul> */}

            <ul
              class="nav nav-pills nav-fill gap-2 p-1 small rounded-5 shadow-sm bg-white"
              id="pillNav2"
              role="tablist"
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link  color-primary rounded-5"
                  id="home-tab2"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                >
                  <a className="nav-link " aria-current="page" href="/">
                    Home
                  </a>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link  color-primary rounded-5"
                  id="profile-tab2"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                >
                  <a className="nav-link " aria-current="page" href="/About">
                    About
                  </a>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link  color-primary rounded-5"
                  id="contact-tab2"
                  data-bs-toggle="tab"
                  type="button"
                  role="tab"
                >
                  <a className="nav-link " aria-current="page" href="/HeadTail">
                    HeadTail
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
