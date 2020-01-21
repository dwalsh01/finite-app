const tickFormatter = (tick: any) => {
  const nDate = new Date(tick);
  const monthNames = [
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
  return `${day}${getAddition(day)} ${monthNames[monthIndex]}`;
};

export default tickFormatter;
