// import "./topNav.scss";

import { useState } from "react";

const TopNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  function showMenuFunc() {
    setShowMenu(!showMenu);
  }
  return (
    <nav className="navbar fixed-top shadow-sm navbar-expand-lg py-3 py-lg-0 px-lg-5">
      <a href="index.html" className="navbar-brand d-block d-lg-none">
        <h1 className="font-secondary text-white mb-n2">
          Jack <span className="text-primary">&</span> Rose
        </h1>
      </a>
      <button type="button" className="navbar-toggler" onClick={showMenuFunc}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`${
          showMenu ? "show" : ""
        } collapse navbar-collapse justify-content-between`}
      >
        <div className="navbar-nav ml-auto py-0">
          <a href="/" className="nav-item nav-link">
            Home
          </a>
          <a href="/" className="nav-item nav-link">
            About
          </a>
          <a href="/" className="nav-item nav-link">
            Story
          </a>
          <a href="/" className="nav-item nav-link">
            Gallery
          </a>
        </div>
        <a href="/" className="navbar-brand mx-5 d-none d-lg-block">
          <h1 className="font-secondary text-white mb-n2">Wick & Sam</h1>
        </a>
        <div className="navbar-nav mr-auto py-0">
          <a href="/" className="nav-item nav-link">
            Family
          </a>
          <a href="/" className="nav-item nav-link">
            Event
          </a>
          <a href="/" className="nav-item nav-link">
            RSVP
          </a>
          <a href="/" className="nav-item nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
