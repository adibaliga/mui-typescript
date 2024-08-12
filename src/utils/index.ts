export const getTomorrowDate = (date: Date): Date => {
  const tomorrow = new Date(date);
  tomorrow.setDate(date.getDate() + 6);
  return tomorrow;
};
