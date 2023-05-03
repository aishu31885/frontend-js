function solution(D) {
  const daysOfWeek = {
    "Mon": 0,
    "Tue": 0,
    "Wed": 0,
    "Thu": 0,
    "Fri": 0,
    "Sat": 0,
    "Sun": 0
  };

  for (const dateStr in D) {
    const value = D[dateStr];
    const date = new Date(dateStr);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
    daysOfWeek[dayOfWeek] += value;
  }

  for (const day in daysOfWeek) {
    if (daysOfWeek[day] === 0) {
      const previousDayValue = daysOfWeek[daysOfWeek.indexOf(day) - 1] || 0;
      const nextDayValue = daysOfWeek[daysOfWeek.indexOf(day) + 1] || 0;
      daysOfWeek[day] = Math.round((previousDayValue + nextDayValue) / 2);
    }
  }

  return daysOfWeek;
}

/*input : {
  "2023-05-01": 10,
  "2023-05-02": 20,
  "2023-05-04": 30
} */

/*output:
{
  "Mon": 10,
  "Tue": 20,
  "Wed": 0 
}*/