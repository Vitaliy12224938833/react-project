export const transformRuntime = (min) => {
  if (!min || typeof min === 'string') return null;

  const hours = Math.floor(min / 60);
  const lastMin = min - hours * 60;
  if (hours && lastMin) return `${hours} hours ${lastMin} min`;
  if (!hours && lastMin) return `${lastMin} min`;
  if (hours && !lastMin) return `${hours} hours`;
};
