import "./text.scss";

export const Text = (props) => {
  const { tag: Tag = "p", color, align, children } = props;
  const defineClasses = () => {
    let classes = "text";

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

  return (
    <Tag className={defineClasses()} {...props}>
      {children}
    </Tag>
  );
};
