export const getImageSize = (url) => {
  const img = document.createElement("img");

  const promise = new Promise((resolve, reject) => {
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;

      resolve({ width, height });
    };

    img.onerror = reject;
  });

  img.src = url;

  return promise;
};
