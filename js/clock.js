const clock = document.querySelector("#clock");

function getClock(){
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  
}

// setInterval(sayHello, 5000); 5초마다 실행
// setTimeout(sayHello, 5000);  5초 후에 실행
// padStart(2,"0");
// (targetLength, padString) 현재 문자열의 시작을 다른 문자열로 채워, 주어진 길이를 만족하는 새로운 문자열을 반환합니다. 채워넣기는 대상 문자열의 시작(좌측)부터 적용됩니다. >> string타입 데이터타입변환
// padEnd(2,"0");

getClock();
setInterval(getClock, 1000);