export const getImage = (tag) => {
  const icons = {
    // header
    logo: "/img/header/logo.svg",

    // hero
    heroBg1x: "/img/hero/img@1x.jpg",
    heroBg2x: "/img/hero/img@2x.jpg",
    heroBg1xMob: "/img/hero/img@1x-mobile.jpg",
    heroBg2xMob: "/img/hero/img@2x-mobile.jpg",

    // user
    userPlaceholder: "/img/user/user.svg",

    // loader
    loader: "/img/ui/loader.svg"
  };

  if (icons.hasOwnProperty(tag)) {
    return icons[tag];
  }

  return "";
};
