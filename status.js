let timeLeft = 4;
const timerDisplay = document.getElementById('timer');

setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    timerDisplay.innerText = `${timeLeft} minutes`;
  } else {
    timerDisplay.innerText = "Ready!";
    document.getElementById('status').innerText = "Ready";
  }
}, 60000); // every minute
