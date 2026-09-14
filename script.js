function setTime() {
    let minutes = document.getElementById("minutesInput").value;

    if (minutes > 0) {
        time = minutes * 60;
        updateDisplay();
    }
}
let time = 60;
let timer = null;

function updateDisplay() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
        String(minutes).padStart(2, "0") + ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {
    if (timer !== null) return;

    timer = setInterval(function () {
        if (time > 0) {
            time--;
            updateDisplay();
        } else {
            clearInterval(timer);
            timer = null;
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    time = 60;
    updateDisplay();
}

updateDisplay();