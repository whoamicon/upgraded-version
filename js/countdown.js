document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    function triggerCountdown(countdownElem, days, hours, minutes, seconds) {
        // Function to set the countdown duration using Date objects
        function setCountdown() {
            const now = Math.floor(new Date().getTime() / 1000); // Current time in seconds

            // Calculate the countdown duration in seconds
            const countdownDuration = (days * 24 * 60 * 60)   // Days in seconds
                + (hours * 60 * 60)        // Hours in seconds
                + (minutes * 60)           // Minutes in seconds
                + seconds;                 // Seconds

            // Return the new countdown target time
            return now + countdownDuration;
        }

        // Initialize the countdown target date
        let countdownDate = setCountdown();

        // Update the countdown every 1 second
        const countdownInterval = setInterval(function () {
            const now = Math.floor(new Date().getTime() / 1000); // Current time in seconds

            // Find the distance between now and the countdown date
            const distance = countdownDate - now;

            // Time calculations for days, hours, minutes, and seconds
            const displayDays = Math.floor(distance / (60 * 60 * 24));
            const displayHours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
            const displayMinutes = Math.floor((distance % (60 * 60)) / 60);
            const displaySeconds = distance % 60;

            // Display the result in the element with id="countdown"
            const countdownElement = document.querySelector(countdownElem);

            countdownElement.querySelector(".days").innerHTML = displayDays;
            countdownElement.querySelector(".hours").innerHTML = displayHours;
            countdownElement.querySelector(".minutes").innerHTML = displayMinutes;
            countdownElement.querySelector(".seconds").innerHTML = displaySeconds;

            // If the countdown reaches zero, reset it
            if (distance < 0) {
                countdownDate = setCountdown(); // Reset the countdown date
            }
        }, 1000);
    }

    triggerCountdown(".et-countdown", 10, 23, 45, 49);
});