import { getImage } from "utils/helpers";

import "./loader.scss";

export const Loader = () => (
  <div className="loader">
    <img src={getImage("loader")} alt="Preloader" />
  </div>
);
