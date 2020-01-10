function formatDate(date: string) {
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
  return `${day}${getAddition(day)} ${monthNames[monthIndex]} ${year}`;
}

export default formatDate;
