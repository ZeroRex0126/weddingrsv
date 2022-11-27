import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      {/* navigateion */}
      <main>{props.children}</main>
      {/* footer */}
    </Fragment>
  );
}

export default Layout;
