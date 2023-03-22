import { useState } from "react";
import styled from "styled-components";

const SideNavbar = styled.div`
  position: fixed;
  min-height: 100vh;

  a,
  a:hover,
  a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  }

  .navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
  }

  .wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  #sidebar {
    min-height: 100vh;
    min-width: 250px;
    max-width: 250px;
    background: #7386d5;
    color: #fff;
    transition: all 0.3s;
  }

  #sidebar.active {
    margin-left: -250px;
  }

  #sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
  }

  #sidebar ul.components {
    padding: 20px 0;
    border-bottom: 1px solid #47748b;
  }

  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }

  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
  }

  #sidebar ul li a:hover {
    color: #7386d5;
    background: #fff;
  }

  #sidebar ul li.active > a,
  a[aria-expanded="true"] {
    color: #fff;
    background: #6d7fcc;
  }

  a[data-toggle="collapse"] {
    position: relative;
  }

  .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
  }

  ul.CTAs {
    padding: 20px;
  }

  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #sidebarCollapse {
      width: 35px;
      height: 35px;
      position: fixed;
      display: flex;
      top: 10px;
      left: 10px;
      background-color: transparent;
      border-color: transparent;
      z-index: 10;
      transition: all 0.3s;
    }
    #sidebarCollapse.active {
      left: 210px;
    }
  }
`;

const SideNav = () => {
  const [active, setActive] = useState(false);
  return (
    <SideNavbar>
      <nav id="sidebar" className={active ? "active" : ""}>
        <div className="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
        </div>

        <ul className="list-unstyled components">
          <p>Dummy Heading</p>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        type="button"
        id="sidebarCollapse"
        className={`btn btn-info ${active ? "active" : ""}`}
        onClick={() => {
          setActive(!active);
        }}
      >
        <span>X</span>
      </button>
    </SideNavbar>
  );
};

export default SideNav;
