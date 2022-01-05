const clock = document.querySelector("#clock");
// SetInterval(함수, 시간) : 시간 간격으로 함수를 실행
// SetTimeout(함수, 시간) : 시간만큼 기다린 후 함수 실행

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000); // 1초마다 실행
