function formatDate(date: string, short = false) {
  const nDate = new Date(date);
  const monthNames = [
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
    'December',
  ];
  const shortMonthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const day = nDate.getDate();
  const monthIndex = nDate.getMonth();
  const year = nDate.getFullYear();
  const getAddition = (numb: number) => {
    switch (numb) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };
  return `${day}${getAddition(day)} ${
    short ? shortMonthNames[monthIndex] : monthNames[monthIndex]
  } ${short ? `'${year.toString().slice(-2)}` : year}`;
}

export default formatDate;
