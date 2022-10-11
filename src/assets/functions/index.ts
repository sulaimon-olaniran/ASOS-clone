export const getPercentage = (prev: number, current: number) => {
  const difference = prev - current;

  const division = difference / prev;

  const percentage = Math.ceil(division * 100);

  return percentage;
};
