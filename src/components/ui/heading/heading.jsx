import "./heading.scss";

export const Heading = ({ tag: Tag = "h2", color = "black", align, children }) => {
  const defineClasses = () => {
    let classes = "heading";

    switch (color) {
      case "white":
        classes += " white";
        break;
      case "black":
        classes += " black";
        break;
      default:
        break;
    }

    if (align === "center") {
      classes += " center";
    }

    return classes;
  };

  return <Tag className={defineClasses()}>{children}</Tag>;
};
