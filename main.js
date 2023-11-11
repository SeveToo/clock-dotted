const component__hours = document.querySelector(".component__hours");
const component__minutes = document.querySelector(".component__minutes");
const component__seconds = document.querySelector(".component__seconds");

let hours, minutes, seconds;

const hoursNum = document.querySelector(".Clock__hours .title__value");
const minNum = document.querySelector(".Clock__minutes .title__value");
const secNum = document.querySelector(".Clock__seconds .title__value");

function preZero(x) {
  if (x > 9) return x;
  else return "0" + x;
}

function showTime() {
  hoursNum.textContent = `${preZero(hours)}`;
  minNum.textContent = `${preZero(minutes)}`;
  secNum.textContent = `${preZero(seconds)}`;
}

function generateHours() {
  component__hours.innerHTML = "";
  for (let i = 0; i < 24; i++) {
    let el = document.createElement("div");
    el.classList.add("content__unit");
    el.classList.add("hours__unit");
    if (i + 1 <= hours) el.classList.add("active");
    if (i + 1 == hours) el.classList.add("activeRed");
    component__hours.append(el);
  }
}

function generateMin() {
  component__minutes.innerHTML = "";
  for (let i = 0; i < 60; i++) {
    let el = document.createElement("div");
    el.classList.add("content__unit");
    el.classList.add("minute__unit");
    if (i + 1 <= minutes) el.classList.add("active");
    if (i + 1 == minutes) el.classList.add("activeRed");
    component__minutes.append(el);
  }
}

function generateSec() {
  component__seconds.innerHTML = "";
  for (let i = 0; i < 60; i++) {
    let el = document.createElement("div");
    el.classList.add("content__unit");
    el.classList.add("second__unit");
    if (i + 1 <= seconds) el.classList.add("active");
    if (i + 1 == seconds) el.classList.add("activeRed");
    component__seconds.append(el);
  }
}

console.log(hours, minutes, seconds);

let timeInterval = setInterval(() => {
  let date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  generateMin();
  generateHours();
  generateSec();
  showTime();
}, 1000);
