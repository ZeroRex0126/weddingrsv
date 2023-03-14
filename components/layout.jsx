import { Fragment } from "react";
import TopNav from "./topNav/topNav";

function Layout(props) {
  return (
    <Fragment>
      {/* navigateion */}
      <div className="navContainer">
        <TopNav />
      </div>
      {/* main app */}
      <main>{props.children}</main>
      {/* footer */}
      <footer className="footer">
        <a target="_blank" rel="noopener noreferrer">
          All Right Reserved to KSites
        </a>
      </footer>
    </Fragment>
  );
}

export default Layout;
