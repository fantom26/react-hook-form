export const IconSvg = ({ tag }) => {
  const icons = {};

  if (icons.hasOwnProperty(tag)) {
    return icons[tag];
  }

  return "";
};
