import { Link } from "react-router-dom";

import { getImage } from "utils/helpers";

import "./logo.scss";

export const Logo = () => (
  <Link to="#" className="logo">
    <img
      src={getImage("logo")}
      alt="Logo of test task"
      width="104"
      height="26"
    />
  </Link>
);
