
function calenderInit(){
  const date = new Date();
  const utc = date.getTime() + (date.getTimezoneOffset() * 60 * 100);
  const kstGap = 9 * 60 * 60 * 1000;
  const today = new Date(utc + kstGap);
  const thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  renderCalender(thisMonth);
}

function renderCalender(thisMonth){
  const currentYear = thisMonth.getFullYear();
  const currentMonth = thisMonth.getMonth();
  const currentDate = thisMonth.getDate();

  const startDay = new Date(currentYear, currentMonth, 0);
  const prevDate = startDay.getDate();
  const prevDay = startDay.getDay();

  const endDay = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = endDay.getDate();
  const nextDay = endDay.getDay();

  console.log(prevDate, prevDay, nextDate, nextDay);
}


calenderInit();


