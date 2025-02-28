export const beautifyDate = (dateTime: Date, withTime = true): string => {
  if (dateTime) {
    const dateObj = new Date(dateTime);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const year = dateObj.getFullYear();
    const hours = String(dateObj.getHours()).padStart(2, '0');
    const minutes = String(dateObj.getMinutes()).padStart(2, '0');

    if (withTime) return `${day}.${month}.${year} ${hours}:${minutes}`;
    return `${day}.${month}.${year}`;
  }
  return dateTime;
};

export const getFormattedDate = (date: string | number | Date) => {
  const currentDate = new Date(date);
  if (!isNaN(currentDate.getTime())) {
    const localTimezoneDate = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60000);
    return localTimezoneDate.toISOString().slice(0, 19);
  }
  return currentDate;
};

export const getToday = (end = false, start = false, isDateOnly = false) => {
  const currentDate = new Date();
  if (end) {
    currentDate.setHours(23, 59, 59, 999);
  }
  if (start) {
    currentDate.setHours(0, 0, 0, 0);
  }
  const localTimezoneDate = new Date(currentDate.getTime() - currentDate.getTimezoneOffset() * 60000);
  if (!isDateOnly) return localTimezoneDate.toISOString().slice(0, 16);
  else return localTimezoneDate.toISOString().slice(0, 10);
};

export const addMonthsToDateTime = (dateTimeLocal, months) => {
  const date = new Date(dateTimeLocal);
  date.setMonth(date.getMonth() + months);
  return date.toISOString().slice(0, 16);
};
