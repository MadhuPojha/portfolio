export const getImageUrl = (path) => {
  const base = import.meta.env.BASE_URL || '/portfolio/'; 
  return `${base}src/assets/${path}`;
};
