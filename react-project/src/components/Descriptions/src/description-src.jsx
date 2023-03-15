import { Link } from 'react-router-dom';
import { useMemo } from 'react';
export const transformRuntime = (min) =>
  useMemo(() => {
    if (!min) return null;

    const hours = Math.floor(min / 60);
    const lastMin = min - hours * 60;
    return `${hours} hours ${lastMin} min`;
  }, [min]);

export const transformMoney = (n) =>
  useMemo(() => {
    if (!n) return null;
    return (
      parseFloat(n)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ') + ' $'
    );
  }, [n]);

export const createStrFromObj = (list) => {
  if (!list) return null;
  let StrList = '';
  list.forEach((item) => (StrList += item.name + ', '));
  return StrList.slice(0, -2);
};

export const transformDate = (date) =>
  useMemo(() => (date ? date.split('-').reverse().join(' ') : ''), [date]);

export const createLink = (link) =>
  link ? (
    <Link href={link} target='_blank'>
      {link}
    </Link>
  ) : null;
