import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

// const NavBarComp = styled.nav`
//   display: ${(props) =>
//     window.innerWidth > 991 ? (props.fixed ? "flex" : "none") : "flex"};
// `;

const NavBarComp = styled.nav`
  // position: absolute;
  //  position:fixed;
  //  top:0;
  // bottom: 0;
`;

const TopNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fixed, setFixed] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef(null);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (window.innerWidth > 991) {
      if (currentScrollY > lastScrollY.current) {
        setFixed(false);
      } else {
        setFixed(true);
      }
      lastScrollY.current = currentScrollY;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function showMenuFunc() {
    setShowMenu(!showMenu);
  }
  return (
    <NavBarComp
      className="navbar fixed-top shadow-sm navbar-expand-lg py-3 py-lg-0 px-lg-5"
      ref={navRef}
      fixed={fixed}
    >
      <a href="index.html" className="navbar-brand d-block d-lg-none">
        <h1 className="font-secondary mb-n2">Wick & Sam</h1>
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
          <a
            href="#home"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Home
          </a>
          <a
            href="#aboutContainer"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            About
          </a>
          <a
            href="#story"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Story
          </a>
          {/* <a
            href="#gallery"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Gallery
          </a> */}
        </div>
        <a href="#home" className="navbar-brand mx-5 d-none d-lg-block">
          <h1 className="font-secondary mb-n2">Wick & Sam</h1>
        </a>
        <div className="navbar-nav mr-auto py-0">
          {/* <a
            href="#family"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Family
          </a> */}
          <a
            href="#events"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Events
          </a>
          <a
            href="#rsvp"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            RSVP
          </a>
          <a
            href="#contact"
            className="nav-item nav-link"
            onClick={() => {
              setShowMenu(false);
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </NavBarComp>
  );
};

export default TopNav;

// import React, { useState, useRef } from 'react';
// import styled from 'styled-components';

// const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 60px;
//   background-color: #fff;
//   position: ${props => (props.fixed ? 'fixed' : 'absolute')};
//   top: ${props => (props.fixed ? '0' : 'auto')};
//   width: 100%;
//   z-index: 1;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
// `;

// const TopNav = () => {
//   const [fixed, setFixed] = useState(false);
//   const navRef = useRef(null);

//   const handleScroll = () => {
//     if (window.pageYOffset > navRef.current.offsetTop) {
//       setFixed(true);
//     } else {
//       setFixed(false);
//     }
//   };

//   React.useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <NavbarContainer ref={navRef} fixed={fixed}>
//       <div>Logo</div>
//       <div>Nav items</div>
//     </NavbarContainer>
//   );
// };

// export default TopNav;
