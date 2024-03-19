export const convertDate = (oldDate?: string) => {
  const date: Date = new Date(oldDate || '20-03-2022');

  const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate: string = new Intl.DateTimeFormat('en-GB', options).format(date);

  return formattedDate;
};

export const getMonthNameByNum = (monthNumber: number) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  if (monthNumber >= 1 && monthNumber <= 12) {
    return months[monthNumber - 1];
  } else {
    return 'Invalid month number';
  }
};

export const addPostfixToNumber = (myNum: number) => {
  const lastDigit = myNum % 10;
  const lastTwoDigits = myNum % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return myNum + 'th'; // Các số từ 11 đến 13 sử dụng postfix "th"
  }

  switch (lastDigit) {
    case 1:
      return myNum + 'st'; // postfix "st" cho số 1
    case 2:
      return myNum + 'nd'; // postfix "nd" cho số 2
    case 3:
      return myNum + 'rd'; // postfix "rd" cho số 3
    default:
      return myNum + 'th'; // postfix "th" cho các số còn lại
  }
};
