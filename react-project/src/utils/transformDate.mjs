export const transformDate = (date) => {
  if ((!date, typeof date !== 'string')) return null;
  return date.split('-').reverse().join(' ');
};
