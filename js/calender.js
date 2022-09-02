<!--
const month = document.querySelector(".year_month");
const dates = document.querySelector(".dates");
const prev = document.querySelector(".nav-btn.prev");
const next = document.querySelector(".nav-btn.next");


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

  console.log(currentMonth);
  
  const startDay = new Date(currentYear, currentMonth, 0);
  const prevDate = startDay.getDate();
  const prevDay = startDay.getDay();

  const endDay = new Date(currentYear, currentMonth + 1, 0);
  const nextDate = endDay.getDate();

  month.innerText = currentYear + '.' + (currentMonth+1);
  dates.innerHTML = '';
  for(let i = prevDate - prevDay+1; i <= prevDate; i++){
    dates.innerHTML =  dates.innerHTML + '<div class="day prev disable">' + i + '</div>'
  }
  for(let i = 1; i <= nextDate; i++){
    dates.innerHTML = dates.innerHTML + '<div class="day current">' + i + '</div>'
  }


  prev.addEventListener('click', function(e){
    e.preventDefault();
    thisMonth = new Date(currentYear, currentMonth - 1, 1);
    renderCalender(thisMonth);
  });
  next.addEventListener('click', function(e){
    e.preventDefault();
    thisMonth = new Date(currentYear, currentMonth + 1, 1);
    renderCalender(thisMonth);
  });

}


calenderInit();

-->
