var hou = document.querySelector("#hour-display");
var mi = document.querySelector("#min-display");
var se = document.querySelector("#sec-display");

setInterval(() => {
  var d = new Date();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var seconds = d.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  if (hours == 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  hou.innerHTML = hours;
  mi.innerHTML = minutes;
  se.innerHTML = seconds;
}, 1000);
