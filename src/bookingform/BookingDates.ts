
const getDaysForMonthOptions = (
  month: number,
  year: number,
  weekDayNames: string[]
): Map<string, number> => {

  const date = new Date(year, month, 1);
  const map = new Map<string, number>();

  while (date.getMonth() === month) {
    map.set(
      `${date.getDate().toString().padStart(2, "0")} - ${
        weekDayNames[date.getDay()]
      }`,
      date.getDate()
    );
    date.setDate(date.getDate() + 1);
  }
  return map;
};

const getMonthsOptions = (
  now: Date,
  monthNames: string[]
): Map<string, { month: number; year: number }> => {
  const year = now.getFullYear();
  const currentYears = monthNames.slice(now.getMonth());
  const nextYears = monthNames.slice(0, now.getMonth());
  const map = new Map<string, { month: number; year: number }>();
  currentYears.forEach((month) =>
    map.set(`${year} -  ${month}`, { month: monthNames.indexOf(month), year })
  );
  nextYears.forEach((month) =>
    map.set(`${year + 1} - ${month} `, {
      month: monthNames.indexOf(month),
      year: year + 1,
    })
  );
  return map;
};

const stringToArrayHelper = (message: string) => message.split(",");


export { getMonthsOptions, getDaysForMonthOptions,stringToArrayHelper};
