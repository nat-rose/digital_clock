const display = document.getElementById('clock');
const update_millisec = 750
const date = new Date();

function clockTick() {
    // Advance one more second
    date.setSeconds(date.getSeconds() + 1)

    updateTime()
}

function updateTime() {
    const hour = formatTime(date.getHours());
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());

    display.innerText=`${hour} : ${minutes} : ${seconds}`
}

function formatTime(time) {
    if ( time < 10 ) {
        return '0' + time;
    }
    return time;
}

var ticks = setInterval (clockTick, update_millisec);
clockTick()
