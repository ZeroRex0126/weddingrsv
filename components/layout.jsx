import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      {/* navigateion */}
      <header className="navContainer">
        <div>test header</div>
      </header>
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
