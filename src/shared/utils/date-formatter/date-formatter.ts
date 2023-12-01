export const defaultDateFormatter = (date: Date) => {
  return new Intl.DateTimeFormat('en-EN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    year: 'numeric',
    hour12: false,
  }).format(date);
};

export const commentDateFormatter = (date: Date) => {
  return new Intl.DateTimeFormat('en-EN',{
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  }).format(date);
}
