export function changeDateFormat(date) {
  const month = `${date.substr(0, date.indexOf("/"))}`;
  date = date.slice(date.indexOf("/") + 1);
  const day = `${date.substr(0, date.indexOf("/"))}`;
  date = date.slice(date.indexOf("/") + 1);
  const year = date;

  return `${year}-${month}-${day}`;
}

export function dateToMonthBefore(date) {
  let month = `${date.substr(0, date.indexOf("/"))}`;
  month = parseInt(month) - 1;

  if (month < 10) {
    month = `0${month}`;
  } else {
    month = month.toString();
  }

  date = date.slice(date.indexOf("/") + 1);
  let day = `${date.substr(0, date.indexOf("/"))}`;
  day = parseInt(day) + 1;

  if (day < 10) {
    day = `0${day}`;
  } else {
    day = day.toString();
  }

  date = date.slice(date.indexOf("/") + 1);
  const year = date;

  return `${year}-${month}-${day}`;
}
