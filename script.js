//your JS code here. If required.
function updateTime() {
  let timer = document.getElementById('timer');
  let now = new Date();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  let year = now.getFullYear();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (hours > 12) {
    hours = hours - 12;
    timer.textContent = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} PM`;
  } else if (hours === 0) {
    hours = 12
    timer.textContent = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} AM`;
  } else {
    timer.textContent = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} AM`;
  }
}
  // Call updateTime every second
  setInterval(updateTime, 1000);
