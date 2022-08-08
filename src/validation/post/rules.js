import { getImageSize } from "utils/helpers";

export const nameRules = {
  maxLength: {
    value: 60,
    message: "max length is 60"
  },
  minLength: {
    value: 2,
    message: "min length is 2"
  },
  required: {
    value: true,
    message: "This field must be filled"
  }
};

export const emailRules = {
  maxLength: {
    value: 100,
    message: "max length is 60"
  },
  minLength: {
    value: 2,
    message: "min length is 2"
  },
  required: {
    value: true,
    message: "This field must be filled"
  },
  pattern: {
    value:
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/,
    message: "Entered value does not match email format"
  }
};

export const phoneRules = {
  required: {
    value: true,
    message: "This field must be filled"
  },
  pattern: {
    value: /^[\+]{0,1}380([0-9]{9})$/,
    message: "Entered value does not match ukrainian phone format"
  }
};

export const positionRules = {
  required: {
    value: true,
    message: "This field must be filled"
  }
};

export const fileRules = {
  required: {
    value: true,
    message: "This field must be filled"
  },
  validate: {
    rightFormat: (v) => {
      return (
        v[0].type === "image/jpeg" ||
        v[0].type === "image/jpg" ||
        "The photo format must be jpeg/jpg type"
      );
    },
    dimensions: async (v) => {
      let _URL = window.URL || window.webkitURL;
      const imgUrl = _URL.createObjectURL(v[0]);
      let dimensionsImage = (async () => await getImageSize(imgUrl))();
      dimensionsImage = await dimensionsImage;
      _URL.revokeObjectURL(v[0]);
      return dimensionsImage.width > 70 && dimensionsImage.height > 70
        ? true
        : "Minimum size of photo 70x70px";
    },
    size: (v) =>
      v[0].size < 5000000 || "The photo size must not be greater than 5 Mb"
  }
};
