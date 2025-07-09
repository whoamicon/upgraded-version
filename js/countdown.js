document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    
    function triggerCountdown(countdownElem, targetDate) {
        function updateCountdown() {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                document.querySelector(countdownElem).innerHTML = "Event Started and it will be over at 26/07/25 (03:00 PM)!";
                clearInterval(countdownInterval);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const countdownElement = document.querySelector(countdownElem);
            countdownElement.querySelector(".days").innerHTML = days;
            countdownElement.querySelector(".hours").innerHTML = hours;
            countdownElement.querySelector(".minutes").innerHTML = minutes;
            countdownElement.querySelector(".seconds").innerHTML = seconds;
        }

        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);
    }

    // Set target date to April 5, 2025
    const targetDate = new Date("July 26, 2025 11:30:00").getTime();

    triggerCountdown(".et-countdown", targetDate);
});
