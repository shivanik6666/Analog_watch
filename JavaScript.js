function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var hourRotation = (hours % 12) * 30 + (minutes / 60) * 30;
    var minuteRotation = (minutes / 60) * 360;
    var secondRotation = (seconds / 60) * 360;

    var hourHand = document.getElementById("hour");
    var minuteHand = document.getElementById("minute");
    var secondHand = document.getElementById("second");

    hourHand.style.transform = "rotate(" + hourRotation + "deg)";
    minuteHand.style.transform = "rotate(" + minuteRotation + "deg)";
    secondHand.style.transform = "rotate(" + secondRotation + "deg)";

    requestAnimationFrame(updateClock);
}

// Start the clock animation
setInterval(updateClock, 1000);

