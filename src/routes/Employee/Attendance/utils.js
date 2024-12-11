export const getYearOptions = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: currentYear - 2000 + 1 }, (_, index) => ({
    label: 2000 + index,
    value: 2000 + index,
  }));
};

export const getMonthOptions = (year) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  const allMonths = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];
  if (year === currentYear) {
    return allMonths.filter((month) => month.value <= currentMonth);
  }
  return allMonths;
};

export const getCurrentYearMonth = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  return parseInt(`${year}${month}`);
};

export const getCurrentYearMonthDay = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate() + 1).padStart(2, "0");
  return parseInt(`${year}${month}${day}`);
};

export const getDates = (year, month) => {
  const daysInMonth = new Date(year, month, 0).getDate();
  const days = [];
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month - 1, day);
    // Weekend = [0: Sunday, 6: Saturday]
    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    days.push({
      date: `${year}${month.toString().padStart(2, "0")}${day
        .toString()
        .padStart(2, "0")}`,
      isWeekend,
    });
  }
  return days;
};

export const getSheetData = (attendances) => {
  return attendances.map((item) => {
    const { attendances, ...employee } = item;
    const mappedAttendances = attendances.reduce(
      (acc, entry) => ({
        ...acc,
        [entry.date]: { id: entry.id, presence: entry.presence },
      }),
      {}
    );
    return {
      employee,
      attendances: mappedAttendances,
    };
  });
};
