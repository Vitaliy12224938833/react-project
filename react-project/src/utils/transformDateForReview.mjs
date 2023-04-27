const isValidDate = (dateStr) => {
  if (!dateStr || typeof dateStr !== 'string') return false;

  const regex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (!dateStr.match(regex)) {
    return false;
  }
  return true;
};

export const transformDateForReview = (date) => {
  if (!isValidDate(date)) return null;
  return date.slice(0, 10).split('-').reverse().join(' ');
};
