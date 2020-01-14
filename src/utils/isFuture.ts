const isFuture = (date: string) => {
  const today = new Date();
  const someDate = new Date(date);
  return (
    someDate.getDate() > today.getDate() &&
    someDate.getMonth() >= today.getMonth() &&
    someDate.getFullYear() >= today.getFullYear()
  );
};

export default isFuture;
