import { HashLink } from "react-router-hash-link";

import "./button.scss";

export const Button = (props) => {
  const { tag: Tag = "button", hash, children } = props;
  const defineClasses = () => {
    let classes = "button";

    if (props.disabled) classes += " button--disabled";

    return classes;
  };

  if (Tag === "HashLink") {
    return (
      <HashLink smooth to={hash} className={defineClasses()} {...props}>
        {children}
      </HashLink>
    );
  } else {
    return (
      <Tag className={defineClasses()} {...props}>
        {children}
      </Tag>
    );
  }
};
