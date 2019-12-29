import { format } from 'date-fns';

const dateHelper = (date: Date): string => format(date, 'MMMM');

export default dateHelper;
