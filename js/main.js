setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

const SECONDS_IN_MINUTE = 60;
const MINUTE_IN_HOUR = 60;
const HOUR_IN_CLOCK_ROTATION = 12;
const DEGREES_IN_CLOCK_ROTATION = 360;

function setClock() {
	const currentDate = new Date();
	const secondsRatio = currentDate.getSeconds() / SECONDS_IN_MINUTE;
	const minutesRatio = (currentDate.getMinutes() + secondsRatio) / MINUTE_IN_HOUR;
	const hoursRatio = (currentDate.getHours() + minutesRatio) / HOUR_IN_CLOCK_ROTATION;

	setRotation(hourHand, hoursRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(secondHand, secondsRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty("--rotation", rotationRatio * DEGREES_IN_CLOCK_ROTATION);
}

// Set clock on page load
setClock();
