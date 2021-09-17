class DigitalClock {
    constructor(element) {
        this.element = element;
    }

    start() {
        this.update();

        setInterval(() => {
            this.update();   
        }, 500);
    }

    update() {
        const parts = this.getTimeParts();
        const minuteFormatted = parts.minute.toString().padStart(2, "0");
        const secondFormatted = parts.seconds.toString().padStart(2, "0");
        const timeFormatted = `${parts.hour}:${minuteFormatted}:${secondFormatted}`;

        this.element.querySelector(".hour").textContent = timeFormatted;
    
        console.log(timeFormatted);
    }

    getTimeParts() {
        const now = new Date ();

        return {
            hour: now.getHours(),
            minute: now.getMinutes(),
            seconds: now.getSeconds()
        };

    }
}

const clockElement = document.querySelector (".clock");
const clockObject = new DigitalClock(clockElement);

clockObject.start();
