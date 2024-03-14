export const convertDate = (oldDate?: string) => {
  const date: Date = new Date(oldDate || '20-03-2022');

  const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate: string = new Intl.DateTimeFormat('en-GB', options).format(date);

  return formattedDate;
};
