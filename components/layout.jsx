import { Fragment } from "react";

function Layout(props) {
  function LogData() {
    console.log(props);
  }

  return (
    <Fragment>
      {/* navigateion */}
      <header>
        <div>test header</div>
      </header>
      {/* main app */}
      <main>{props.children}</main>
      {/* footer */}
      <footer className="footer">
        <a target="_blank" rel="noopener noreferrer">
          All Right Reserve to Wundrful Sites
        </a>
      </footer>
    </Fragment>
  );
}

export default Layout;
