import { useMemo } from 'react';

export const transformRuntime = (min) => {
  if (!min) return null;

  const hours = Math.floor(min / 60);
  const lastMin = min - hours * 60;
  return `${hours} hours ${lastMin} min`;
};

export const transformMoney = (n) => {
  if (!n) return null;
  return (
    parseFloat(n)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ') + ' $'
  );
};

export const createStrFromObj = (list) => {
  if (!list) return null;
  return list.map((item) => item.name).join(', ');
};

export const transformDate = (date) => {
  return date ? date.split('-').reverse().join(' ') : '';
};

export const createLink = (link) =>
  link ? (
    <a href={link} target='_blank'>
      {link}
    </a>
  ) : null;
