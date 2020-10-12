// Date-Time
function showTime() {
  var dt = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();

  var time = h + ":" + m + ":" + s;
  document.getElementById("datetime").innerHTML = time;
  document.getElementById("datetime").textContent = time;
}

showTime();
