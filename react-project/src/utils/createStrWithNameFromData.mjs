export const createStrWithNameFromData = (list) => {
  if (!list) return null;
  return list
    .filter((item) => item.name)
    .map((item) => item.name)
    .join(', ');
};
