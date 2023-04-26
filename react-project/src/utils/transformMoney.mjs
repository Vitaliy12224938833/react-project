export const transformMoney = (n) => {
  if (!n || typeof n === 'string') return null;
  return (
    parseFloat(n)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ') + ' $'
  );
};
