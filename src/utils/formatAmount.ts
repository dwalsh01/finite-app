function numberWithCommas(x: string | number | readonly (string | number)[]) {
  if (typeof x === 'number') {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  if (typeof x === 'string') {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export default numberWithCommas;
