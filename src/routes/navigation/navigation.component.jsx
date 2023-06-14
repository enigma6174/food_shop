import { Link, Outlet } from "react-router-dom";
import { logo } from "../../assets/images";

import "./navigation.styles.scss";

const NavigationBar = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} className="logo" alt={"logo"} />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
