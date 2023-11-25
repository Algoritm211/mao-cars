export const defaultDateFormatter = (date: Date) => {
  return new Intl.DateTimeFormat('en-EN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    hour12: true,
  }).format(date);
};
